import { useState, useCallback, useEffect } from 'react'
import { CheckCircle, XCircle, Lightbulb, Play, ArrowCounterClockwise } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription } from '@/components/ui/alert'
import type { InteractiveExercise, ValidationRule } from '../types/workshop'
import { useKV } from '@github/spark/hooks'

interface InteractiveExerciseComponentProps {
  exercise: InteractiveExercise
  topicId: string
}

interface ValidationResult {
  isValid: boolean
  message: string
  points: number
  passedRules: number
  totalRules: number
}

export function InteractiveExercise({ exercise, topicId }: InteractiveExerciseComponentProps) {
  const [userCode, setUserCode] = useState(exercise.initialCode || '')
  const [validation, setValidation] = useState<ValidationResult | null>(null)
  const [showHints, setShowHints] = useState(false)
  const [isCompleted, setIsCompleted] = useKV(`exercise-${topicId}-${exercise.id}`, 'false')
  const [currentHintIndex, setCurrentHintIndex] = useState(0)

  const isExerciseCompleted = isCompleted === 'true'

  const validateCode = useCallback((code: string): ValidationResult => {
    let passedRules = 0
    let totalPoints = 0
    let messages: string[] = []

    for (const rule of exercise.validation) {
      const points = rule.points || 1
      totalPoints += points

      let passed = false
      
      switch (rule.type) {
        case 'exact':
          passed = code.trim() === rule.value
          break
        case 'contains':
          passed = code.includes(rule.value as string)
          break
        case 'regex':
          passed = (rule.value as RegExp).test(code)
          break
        case 'function':
          try {
            // For simple function validation
            passed = eval(`(() => { ${code}; return ${rule.value}; })()`)
          } catch {
            passed = false
          }
          break
        case 'dom-check':
          // Simulate DOM checking for exercises
          passed = code.includes(rule.value as string)
          break
      }

      if (passed) {
        passedRules += points
        messages.push(`✓ ${rule.message}`)
      } else {
        messages.push(`✗ ${rule.message}`)
      }
    }

    const isValid = passedRules === totalPoints
    const message = messages.join('\n')

    return {
      isValid,
      message,
      points: passedRules,
      passedRules,
      totalRules: totalPoints
    }
  }, [exercise.validation])

  const handleCodeChange = (value: string) => {
    setUserCode(value)
    const result = validateCode(value)
    setValidation(result)
    
    if (result.isValid && !isExerciseCompleted) {
      setIsCompleted('true')
    }
  }

  const handleReset = () => {
    setUserCode(exercise.initialCode || '')
    setValidation(null)
    setShowHints(false)
    setCurrentHintIndex(0)
    setIsCompleted('false')
  }

  const showNextHint = () => {
    if (!exercise.hints) return
    if (currentHintIndex < exercise.hints.length - 1) {
      setCurrentHintIndex(prev => prev + 1)
    }
    setShowHints(true)
  }

  const runCode = () => {
    // For demonstration purposes, just validate
    const result = validateCode(userCode)
    setValidation(result)
  }

  useEffect(() => {
    if (userCode) {
      const result = validateCode(userCode)
      setValidation(result)
    }
  }, [userCode, validateCode])

  const getPlaceholderText = () => {
    switch (exercise.type) {
      case 'code-completion':
        return 'Completa el código aquí...'
      case 'css-selector':
        return 'Escribe el selector CSS...'
      case 'debug-fix':
        return 'Corrige el código aquí...'
      case 'dom-manipulation':
        return 'Escribe el código de manipulación DOM...'
      case 'console-command':
        return 'Escribe el comando de consola...'
      default:
        return 'Escribe tu respuesta aquí...'
    }
  }

  const getTypeColor = () => {
    switch (exercise.type) {
      case 'code-completion':
        return 'bg-blue-100 text-blue-800'
      case 'css-selector':
        return 'bg-purple-100 text-purple-800'
      case 'debug-fix':
        return 'bg-red-100 text-red-800'
      case 'dom-manipulation':
        return 'bg-green-100 text-green-800'
      case 'console-command':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeLabel = () => {
    switch (exercise.type) {
      case 'code-completion':
        return 'Completar Código'
      case 'css-selector':
        return 'Selector CSS'
      case 'debug-fix':
        return 'Corrección de Bug'
      case 'dom-manipulation':
        return 'Manipulación DOM'
      case 'console-command':
        return 'Comando de Consola'
      default:
        return 'Ejercicio'
    }
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-3">
            <span>{exercise.title}</span>
            <Badge className={getTypeColor()}>{getTypeLabel()}</Badge>
            {isExerciseCompleted && (
              <Badge variant="secondary" className="gap-1">
                <CheckCircle size={14} className="text-green-600" />
                Completado
              </Badge>
            )}
          </CardTitle>
          <div className="flex gap-2">
            {exercise.hints && exercise.hints.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={showNextHint}
                className="gap-1"
              >
                <Lightbulb size={14} />
                Pista
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="gap-1"
            >
              <ArrowCounterClockwise size={14} />
              Reiniciar
            </Button>
          </div>
        </div>
        <p className="text-muted-foreground">{exercise.description}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {showHints && exercise.hints && (
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertDescription>
              <strong>Pista {currentHintIndex + 1}:</strong> {exercise.hints[currentHintIndex]}
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Tu solución:</label>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={runCode}
                className="gap-1"
              >
                <Play size={14} />
                Verificar
              </Button>
            </div>
          </div>
          
          <Textarea
            value={userCode}
            onChange={(e) => handleCodeChange(e.target.value)}
            placeholder={getPlaceholderText()}
            className="font-mono text-sm min-h-[120px]"
            spellCheck={false}
          />
        </div>

        {validation && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {validation.isValid ? (
                  <CheckCircle className="text-green-600" size={20} />
                ) : (
                  <XCircle className="text-red-600" size={20} />
                )}
                <span className={`font-medium ${validation.isValid ? 'text-green-600' : 'text-red-600'}`}>
                  {validation.isValid ? '¡Correcto!' : 'Necesita mejoras'}
                </span>
              </div>
              <Badge variant="outline">
                {validation.passedRules}/{validation.totalRules} puntos
              </Badge>
            </div>
            
            <Alert className={validation.isValid ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
              <AlertDescription className="whitespace-pre-line text-sm">
                {validation.message}
              </AlertDescription>
            </Alert>
          </div>
        )}

        {validation?.isValid && (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription>
              <strong>¡Excelente trabajo!</strong> Has completado este ejercicio correctamente. 
              {exercise.type === 'debug-fix' && ' El bug ha sido corregido.'}
              {exercise.type === 'css-selector' && ' El selector es correcto.'}
              {exercise.type === 'dom-manipulation' && ' La manipulación DOM es correcta.'}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}