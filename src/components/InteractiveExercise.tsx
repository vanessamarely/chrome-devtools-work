import React, { useState, useCallback, useEffect } from 'react'
import { CheckCircle, XCircle, Lightbulb, Play, ArrowCounterClockwise } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'
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
    <Card className="border-2 border-border hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-accent/5 to-primary/5 border-b-2 border-border">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xl">{exercise.title}</span>
              <Badge className={`${getTypeColor()} font-semibold border`}>{getTypeLabel()}</Badge>
              {isExerciseCompleted && (
                <Badge variant="secondary" className="gap-2 bg-gradient-to-r from-accent/20 to-accent/10 text-accent border border-accent/30 shadow-sm">
                  <CheckCircle size={16} weight="fill" />
                  Completado
                </Badge>
              )}
            </CardTitle>
            <p className="text-muted-foreground leading-relaxed">{exercise.description}</p>
          </div>
          <div className="flex gap-2">
            {exercise.hints && exercise.hints.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={showNextHint}
                className="gap-2 btn-hover-bounce hover:bg-accent/10 hover:text-accent hover:border-accent/30"
              >
                <Lightbulb size={16} weight="bold" />
                Pista
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="gap-2 btn-hover-scale hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30"
            >
              <ArrowCounterClockwise size={16} weight="bold" />
              Reiniciar
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6 pt-6">
        <AnimatePresence>
          {showHints && exercise.hints && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Alert className="border-2 border-accent/30 bg-gradient-to-r from-accent/10 to-accent/5">
                <Lightbulb className="h-5 w-5 text-accent" weight="fill" />
                <AlertDescription className="text-foreground">
                  <strong className="text-accent">Pista {currentHintIndex + 1}:</strong> {exercise.hints[currentHintIndex]}
                </AlertDescription>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-br from-primary to-accent rounded-full" />
              Tu solución:
            </label>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={runCode}
                className="gap-2 btn-hover-pulse"
              >
                <Play size={16} weight="fill" />
                Verificar
              </Button>
            </div>
          </div>
          
          <Textarea
            value={userCode}
            onChange={(e) => handleCodeChange(e.target.value)}
            placeholder={getPlaceholderText()}
            className="font-mono text-sm min-h-[150px] border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            spellCheck={false}
          />
        </div>

        <AnimatePresence>
          {validation && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-3"
            >
            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 border-2 border-border">
              <div className="flex items-center gap-3">
                {validation.isValid ? (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                    <CheckCircle className="text-white" size={24} weight="fill" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                    <XCircle className="text-white" size={24} weight="fill" />
                  </div>
                )}
                <span className={`font-bold text-lg ${validation.isValid ? 'text-green-600' : 'text-red-600'}`}>
                  {validation.isValid ? '¡Correcto!' : 'Necesita mejoras'}
                </span>
              </div>
              <Badge variant="outline" className="text-base px-4 py-2 font-bold border-2">
                {validation.passedRules}/{validation.totalRules} puntos
              </Badge>
            </div>
            
            <Alert className={`border-2 ${validation.isValid ? 'border-green-300 bg-gradient-to-r from-green-50 to-green-100' : 'border-red-300 bg-gradient-to-r from-red-50 to-red-100'}`}>
              <AlertDescription className="whitespace-pre-line leading-relaxed">
                {validation.message}
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
        </AnimatePresence>

        <AnimatePresence>
          {validation?.isValid && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Alert className="border-2 border-accent bg-gradient-to-r from-accent/10 to-accent/5 shadow-lg">
                <CheckCircle className="h-5 w-5 text-accent" weight="fill" />
                <AlertDescription className="text-foreground leading-relaxed">
                  <strong className="text-accent">¡Excelente trabajo!</strong> Has completado este ejercicio correctamente. 
                  {exercise.type === 'debug-fix' && ' El bug ha sido corregido.'}
                  {exercise.type === 'css-selector' && ' El selector es correcto.'}
                  {exercise.type === 'dom-manipulation' && ' La manipulación DOM es correcta.'}
                </AlertDescription>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}