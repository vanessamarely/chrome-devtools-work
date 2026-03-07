import React, { useState } from 'react'
import { CaretRight, CaretDown, Flask, CheckCircle, Code } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Badge } from '@/components/ui/badge'
import { useKV } from '@github/spark/hooks'
import { MiniLab } from '../types/workshop'
import { CodePracticeArea } from './CodePracticeArea'
import { cn } from '../lib/utils'

interface MiniLabProps {
  miniLab: MiniLab
  topicId: string
}

export function MiniLabComponent({ miniLab, topicId }: MiniLabProps) {
  const [completedStepsString, setCompletedStepsString] = useKV(`minilab-${topicId}-completed`, '')
  const [openSteps, setOpenSteps] = useState<Set<number>>(new Set([1]))

  const completedSteps = new Set(
    completedStepsString && typeof completedStepsString === 'string'
      ? completedStepsString.split(',').map(Number).filter(n => !isNaN(n))
      : []
  )

  const toggleStep = (stepNumber: number) => {
    const newOpenSteps = new Set(openSteps)
    if (openSteps.has(stepNumber)) {
      newOpenSteps.delete(stepNumber)
    } else {
      newOpenSteps.add(stepNumber)
    }
    setOpenSteps(newOpenSteps)
  }

  const markStepComplete = (stepNumber: number) => {
    if (!completedSteps.has(stepNumber)) {
      const currentSteps = completedStepsString && typeof completedStepsString === 'string'
        ? completedStepsString.split(',').map(Number).filter(n => !isNaN(n))
        : []
      const newCompleted = [...currentSteps, stepNumber]
      setCompletedStepsString(newCompleted.join(','))
    }
  }

  const isStepCompleted = (stepNumber: number) => completedSteps.has(stepNumber)
  const completedCount = completedSteps.size
  const totalSteps = miniLab.steps.length
  const progressPercentage = Math.round((completedCount / totalSteps) * 100)

  return (
    <div className="mt-16 space-y-8">
      <div className="relative">
        <div className="relative bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 rounded-2xl p-8 border-2 border-accent/30 shadow-xl">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg shadow-accent/30">
                  <Flask size={28} className="text-white" weight="bold" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-1">
                    {miniLab.title}
                  </h2>
                  <p className="text-muted-foreground text-sm font-medium">
                    {completedCount === totalSteps ? '¡Completado!' : 'En progreso'}
                  </p>
                </div>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base">
                {miniLab.description}
              </p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <Badge variant="outline" className="text-base px-4 py-2 bg-card/80 backdrop-blur-sm border-2 border-accent/30 shadow-sm">
                <span className="font-bold text-accent">{completedCount}</span>
                <span className="text-muted-foreground mx-1">/</span>
                <span className="font-bold">{totalSteps}</span>
              </Badge>
              <div className="w-32 h-3 bg-muted rounded-full overflow-hidden shadow-inner border border-border">
                <div 
                  className="h-full bg-gradient-to-r from-accent via-primary to-accent transition-all duration-700 ease-out shadow-sm"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <span className="text-xs font-bold text-muted-foreground">
                {progressPercentage}% Completado
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        {miniLab.steps.map((step) => {
          const isCompleted = isStepCompleted(step.step)
          const isOpen = openSteps.has(step.step)
          
          return (
            <Card key={step.step} className={cn(
              "border-2 transition-all duration-300 overflow-hidden",
              isCompleted 
                ? "border-accent bg-gradient-to-r from-accent/5 to-accent/10 shadow-lg shadow-accent/10" 
                : "border-border hover:border-primary/40 hover:shadow-md"
            )}>
              <Collapsible open={isOpen} onOpenChange={() => toggleStep(step.step)}>
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-gradient-to-r hover:from-muted/50 hover:to-muted/30 transition-all duration-200 group">
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center text-base font-bold shadow-md transition-all duration-300 group-hover:scale-105",
                          isCompleted 
                            ? "bg-gradient-to-br from-accent to-primary text-white shadow-accent/30" 
                            : "bg-gradient-to-br from-primary to-accent text-white shadow-primary/30"
                        )}>
                          {isCompleted ? (
                            <CheckCircle size={22} weight="bold" />
                          ) : (
                            <span className="font-bold">{step.step}</span>
                          )}
                        </div>
                        <div>
                          <span className="text-xl font-bold">{step.title}</span>
                          {isCompleted && (
                            <Badge variant="secondary" className="ml-3 bg-accent/20 text-accent border border-accent/30 shadow-sm">
                              ✓ Completado
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {isOpen ? (
                          <CaretDown size={24} className="text-muted-foreground transition-transform group-hover:scale-110" weight="bold" />
                        ) : (
                          <CaretRight size={24} className="text-muted-foreground transition-transform group-hover:scale-110" weight="bold" />
                        )}
                      </div>
                    </CardTitle>
                  </CardHeader>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="pt-0 pb-6">
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl p-6 border-2 border-border shadow-inner">
                        <h4 className="font-bold text-foreground mb-5 flex items-center gap-3 text-lg">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                            <span className="w-2.5 h-2.5 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse shadow-sm" />
                          </div>
                          Instrucciones paso a paso:
                        </h4>
                        <ol className="space-y-4">
                          {step.instructions.map((instruction, index) => (
                            <li key={index} className="text-foreground/90 flex gap-4 leading-relaxed group">
                              <span className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-xl w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5 shadow-md group-hover:scale-110 transition-transform">
                                {index + 1}
                              </span>
                              <span className="text-[15px] leading-relaxed">{instruction}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      
                      <div className="flex justify-end">
                        {!isCompleted ? (
                          <Button 
                            onClick={() => markStepComplete(step.step)}
                            className="gap-2 btn-hover-gradient"
                            size="lg"
                          >
                            <CheckCircle size={20} weight="bold" />
                            Marcar como Completado
                          </Button>
                        ) : (
                          <Button 
                            variant="outline" 
                            className="gap-2 cursor-default bg-accent/10 border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/30"
                            disabled
                            size="lg"
                          >
                            <CheckCircle size={20} weight="fill" />
                            Paso Completado
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          )
        })}
      </div>

      {completedCount === totalSteps && (
        <Card className="border-2 border-accent bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 shadow-xl overflow-hidden relative">
          <CardContent className="pt-8 pb-8 relative z-10">
            <div className="text-center space-y-5">
              <div className="relative inline-block">
                <CheckCircle size={44} weight="bold" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">
                ¡Mini Lab Completado! 🎉
              </h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Has completado todos los pasos del mini lab. ¡Excelente trabajo dominando DevTools con IA!
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {miniLab.practiceArea && (
        <CodePracticeArea
          title={miniLab.practiceArea.title}
          description={miniLab.practiceArea.description}
          examples={miniLab.practiceArea.examples || []}
          webPageCode={miniLab.practiceArea.webPageCode}
          tips={miniLab.practiceArea.tips}
        />
      )}
    </div>
  )
}