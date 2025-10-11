import React, { useState } from 'react'
import { CaretRight, CaretDown, Flask, CheckCircle } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Badge } from '@/components/ui/badge'
import { useKV } from '@github/spark/hooks'
import { MiniLab } from '../types/workshop'

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
    <div className="mt-12 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <Flask size={28} className="text-accent" />
          {miniLab.title}
        </h2>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-sm">
            {completedCount}/{totalSteps} pasos completados
          </Badge>
          <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
      
      <p className="text-muted-foreground text-lg">
        {miniLab.description}
      </p>

      <div className="space-y-4">
        {miniLab.steps.map((step) => {
          const isCompleted = isStepCompleted(step.step)
          const isOpen = openSteps.has(step.step)
          
          return (
            <Card key={step.step} className={`border-2 transition-all duration-200 ${
              isCompleted 
                ? 'border-accent/50 bg-accent/5' 
                : 'border-border hover:border-primary/50'
            }`}>
              <Collapsible open={isOpen} onOpenChange={() => toggleStep(step.step)}>
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          isCompleted 
                            ? 'bg-accent text-accent-foreground' 
                            : 'bg-primary text-primary-foreground'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle size={18} weight="bold" />
                          ) : (
                            step.step
                          )}
                        </div>
                        <span className="text-lg">{step.title}</span>
                        {isCompleted && (
                          <Badge variant="secondary" className="ml-2">
                            Completado
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {isOpen ? (
                          <CaretDown size={20} className="text-muted-foreground" />
                        ) : (
                          <CaretRight size={20} className="text-muted-foreground" />
                        )}
                      </div>
                    </CardTitle>
                  </CardHeader>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          Instrucciones paso a paso:
                        </h4>
                        <ol className="space-y-3">
                          {step.instructions.map((instruction, index) => (
                            <li key={index} className="text-foreground flex gap-3 leading-relaxed">
                              <span className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                                {index + 1}
                              </span>
                              <span className="text-sm">{instruction}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      
                      <div className="flex justify-end">
                        {!isCompleted ? (
                          <Button 
                            onClick={() => markStepComplete(step.step)}
                            className="gap-2"
                            variant="default"
                          >
                            <CheckCircle size={16} />
                            Marcar como Completado
                          </Button>
                        ) : (
                          <Button 
                            variant="outline" 
                            className="gap-2 cursor-default"
                            disabled
                          >
                            <CheckCircle size={16} className="text-accent" />
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
        <Card className="border-accent bg-accent/10">
          <CardContent className="pt-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={32} weight="bold" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                ¡Mini Lab Completado! 🎉
              </h3>
              <p className="text-muted-foreground">
                Has completado todos los pasos del mini lab. ¡Excelente trabajo dominando DevTools con IA!
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}