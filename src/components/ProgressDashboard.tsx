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
    <Card className="border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10 border-b-2 border-border">
        <CardTitle className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-md">
            <Trophy size={22} className="text-white" weight="fill" />
          </div>
          <span className="text-2xl font-bold">Progreso del Taller</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8 pt-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-foreground">Progreso General</span>
            <Badge variant="outline" className="text-lg px-4 py-2 font-bold border-2">{completionPercentage}%</Badge>
          </div>
          <div className="relative">
            <Progress value={completionPercentage} className="h-4 shadow-inner" />
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            {progress.completedExercises} de {progress.totalExercises} ejercicios completados
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target size={20} className="text-accent" weight="fill" />
              <span className="text-base font-bold text-foreground">Ejercicios Interactivos</span>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-2 font-bold border-2">{interactiveCompletionPercentage}%</Badge>
          </div>
          <div className="relative">
            <Progress value={interactiveCompletionPercentage} className="h-4 shadow-inner" />
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            {progress.completedInteractiveExercises} de {progress.interactiveExercises} ejercicios interactivos completados
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className={`text-center p-5 rounded-xl border-2 transition-all duration-300 ${
            completionPercentage >= 25 
              ? 'bg-gradient-to-br from-accent/10 to-accent/20 border-accent/40 shadow-md' 
              : 'bg-muted border-border'
          }`}>
            <CheckCircle 
              size={32} 
              weight={completionPercentage >= 25 ? "fill" : "regular"}
              className={`mx-auto mb-3 ${completionPercentage >= 25 ? 'text-accent' : 'text-muted-foreground'}`} 
            />
            <p className={`text-base font-bold mb-1 ${completionPercentage >= 25 ? 'text-foreground' : 'text-muted-foreground'}`}>
              Principiante
            </p>
            <p className="text-xs font-medium text-muted-foreground">25% completado</p>
          </div>

          <div className={`text-center p-5 rounded-xl border-2 transition-all duration-300 ${
            completionPercentage >= 50 
              ? 'bg-gradient-to-br from-primary/10 to-primary/20 border-primary/40 shadow-md' 
              : 'bg-muted border-border'
          }`}>
            <Trophy 
              size={32} 
              weight={completionPercentage >= 50 ? "fill" : "regular"}
              className={`mx-auto mb-3 ${completionPercentage >= 50 ? 'text-primary' : 'text-muted-foreground'}`} 
            />
            <p className={`text-base font-bold mb-1 ${completionPercentage >= 50 ? 'text-foreground' : 'text-muted-foreground'}`}>
              Intermedio
            </p>
            <p className="text-xs font-medium text-muted-foreground">50% completado</p>
          </div>

          <div className={`text-center p-5 rounded-xl border-2 transition-all duration-300 ${
            completionPercentage >= 75 
              ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-primary/40 shadow-md' 
              : 'bg-muted border-border'
          }`}>
            <Target 
              size={32} 
              weight={completionPercentage >= 75 ? "fill" : "regular"}
              className={`mx-auto mb-3 ${completionPercentage >= 75 ? 'text-primary' : 'text-muted-foreground'}`} 
            />
            <p className={`text-base font-bold mb-1 ${completionPercentage >= 75 ? 'text-foreground' : 'text-muted-foreground'}`}>
              Avanzado
            </p>
            <p className="text-xs font-medium text-muted-foreground">75% completado</p>
          </div>

          <div className={`text-center p-5 rounded-xl border-2 transition-all duration-300 ${
            completionPercentage >= 100 
              ? 'bg-gradient-to-br from-accent/10 to-primary/10 border-accent/40 shadow-md' 
              : 'bg-muted border-border'
          }`}>
            <Clock 
              size={32} 
              weight={completionPercentage >= 100 ? "fill" : "regular"}
              className={`mx-auto mb-3 ${completionPercentage >= 100 ? 'text-accent' : 'text-muted-foreground'}`} 
            />
            <p className={`text-base font-bold mb-1 ${completionPercentage >= 100 ? 'text-foreground' : 'text-muted-foreground'}`}>
              Experto
            </p>
            <p className="text-xs font-medium text-muted-foreground">100% completado</p>
          </div>
        </div>

        {completionPercentage < 100 && (
          <div className="p-5 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl border-2 border-accent/30 shadow-md">
            <h4 className="text-base font-bold mb-3 text-foreground flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse" />
              Próximo Paso
            </h4>
            <p className="text-sm text-foreground/80 leading-relaxed">
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
          <div className="relative overflow-hidden p-6 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl border-2 border-accent/40 shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                  <Trophy className="text-white" size={28} weight="fill" />
                </div>
                <h4 className="text-xl font-bold text-foreground">¡Felicitaciones!</h4>
              </div>
              <p className="text-base text-foreground/80 leading-relaxed">
                Has completado todos los ejercicios del taller. ¡Ahora eres un experto en DevTools + IA!
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}