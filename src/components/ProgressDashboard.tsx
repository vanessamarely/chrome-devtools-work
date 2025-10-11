import React, { useState, useEffect } from 'react'
import { Trophy, Target, CheckCircle, Clock } from '@phosphor-icons/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { useKV } from '@github/spark/hooks'
import { WorkshopData } from '../types/workshop'

interface ProgressDashboardProps {
  workshopData: WorkshopData
}

interface ExerciseProgress {
  totalExercises: number
  completedExercises: number
  interactiveExercises: number
  completedInteractiveExercises: number
}

export function ProgressDashboard({ workshopData }: ProgressDashboardProps) {
  const [progress, setProgress] = useState<ExerciseProgress>({
    totalExercises: 0,
    completedExercises: 0,
    interactiveExercises: 0,
    completedInteractiveExercises: 0
  })

  useEffect(() => {
    const calculateProgress = async () => {
      let totalExercises = 0
      let completedExercises = 0
      let interactiveExercises = 0
      let completedInteractiveExercises = 0

      for (const section of workshopData.sections) {
        for (const topic of section.topics) {
          // Count regular exercises
          if (topic.exercises) {
            totalExercises += topic.exercises.length
          }

          // Count and check interactive exercises
          if (topic.interactiveExercises) {
            interactiveExercises += topic.interactiveExercises.length
            totalExercises += topic.interactiveExercises.length

            // Check completion status for each interactive exercise
            for (const exercise of topic.interactiveExercises) {
              try {
                const completed = await window.spark.kv.get<string>(`exercise-${topic.id}-${exercise.id}`)
                if (completed === 'true') {
                  completedInteractiveExercises++
                  completedExercises++
                }
              } catch (error) {
                // Exercise not completed
              }
            }
          }
        }
      }

      setProgress({
        totalExercises,
        completedExercises,
        interactiveExercises,
        completedInteractiveExercises
      })
    }

    calculateProgress()
  }, [workshopData])

  const completionPercentage = progress.totalExercises > 0 
    ? Math.round((progress.completedExercises / progress.totalExercises) * 100)
    : 0

  const interactiveCompletionPercentage = progress.interactiveExercises > 0
    ? Math.round((progress.completedInteractiveExercises / progress.interactiveExercises) * 100)
    : 0

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy size={20} className="text-accent" />
          Progreso del Taller
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Progreso General</span>
            <Badge variant="outline">{completionPercentage}%</Badge>
          </div>
          <Progress value={completionPercentage} className="h-2" />
          <p className="text-sm text-muted-foreground">
            {progress.completedExercises} de {progress.totalExercises} ejercicios completados
          </p>
        </div>

        {/* Interactive Exercises Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target size={16} className="text-primary" />
              <span className="text-sm font-medium">Ejercicios Interactivos</span>
            </div>
            <Badge variant="outline">{interactiveCompletionPercentage}%</Badge>
          </div>
          <Progress value={interactiveCompletionPercentage} className="h-2" />
          <p className="text-sm text-muted-foreground">
            {progress.completedInteractiveExercises} de {progress.interactiveExercises} ejercicios interactivos completados
          </p>
        </div>

        {/* Achievement Badges */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-muted rounded-lg">
            <CheckCircle 
              size={24} 
              className={`mx-auto mb-2 ${completionPercentage >= 25 ? 'text-green-600' : 'text-muted-foreground'}`} 
            />
            <p className={`text-sm font-medium ${completionPercentage >= 25 ? 'text-foreground' : 'text-muted-foreground'}`}>
              Principiante
            </p>
            <p className="text-xs text-muted-foreground">25% completado</p>
          </div>

          <div className="text-center p-3 bg-muted rounded-lg">
            <Trophy 
              size={24} 
              className={`mx-auto mb-2 ${completionPercentage >= 50 ? 'text-yellow-600' : 'text-muted-foreground'}`} 
            />
            <p className={`text-sm font-medium ${completionPercentage >= 50 ? 'text-foreground' : 'text-muted-foreground'}`}>
              Intermedio
            </p>
            <p className="text-xs text-muted-foreground">50% completado</p>
          </div>

          <div className="text-center p-3 bg-muted rounded-lg">
            <Target 
              size={24} 
              className={`mx-auto mb-2 ${completionPercentage >= 75 ? 'text-blue-600' : 'text-muted-foreground'}`} 
            />
            <p className={`text-sm font-medium ${completionPercentage >= 75 ? 'text-foreground' : 'text-muted-foreground'}`}>
              Avanzado
            </p>
            <p className="text-xs text-muted-foreground">75% completado</p>
          </div>

          <div className="text-center p-3 bg-muted rounded-lg">
            <Clock 
              size={24} 
              className={`mx-auto mb-2 ${completionPercentage >= 100 ? 'text-purple-600' : 'text-muted-foreground'}`} 
            />
            <p className={`text-sm font-medium ${completionPercentage >= 100 ? 'text-foreground' : 'text-muted-foreground'}`}>
              Experto
            </p>
            <p className="text-xs text-muted-foreground">100% completado</p>
          </div>
        </div>

        {/* Next Steps */}
        {completionPercentage < 100 && (
          <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
            <h4 className="text-sm font-medium mb-2 text-accent-foreground">Próximo Paso</h4>
            <p className="text-sm text-muted-foreground">
              {completionPercentage < 25 
                ? "Completa más ejercicios básicos para alcanzar el nivel Principiante"
                : completionPercentage < 50
                ? "¡Vas bien! Continúa con los ejercicios para alcanzar el nivel Intermedio"
                : completionPercentage < 75
                ? "¡Excelente progreso! Sigue así para alcanzar el nivel Avanzado"
                : "¡Casi lo logras! Completa los últimos ejercicios para convertirte en Experto"
              }
            </p>
          </div>
        )}

        {completionPercentage === 100 && (
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="text-green-600" size={20} />
              <h4 className="text-sm font-medium text-green-800">¡Felicitaciones!</h4>
            </div>
            <p className="text-sm text-green-700">
              Has completado todos los ejercicios del taller. ¡Ahora eres un experto en DevTools + IA!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}