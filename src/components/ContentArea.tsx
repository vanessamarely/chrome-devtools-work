import React from 'react'
import { CheckCircle, ClipboardText, Code, Target } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CodeBlock } from './CodeBlock'
import { InteractiveExercise } from './InteractiveExercise'
import { MiniLabComponent } from './MiniLab'
import { ProgressDashboard } from './ProgressDashboard'
import { WorkshopTopic } from '../types/workshop'
import { workshopData } from '../data/workshopData'

interface ContentAreaProps {
  topic?: WorkshopTopic
  isCompleted: boolean
  onComplete: () => void
}

export function ContentArea({ topic, isCompleted, onComplete }: ContentAreaProps) {
  if (!topic) {
    return (
      <div className="flex-1 flex flex-col bg-background">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center space-y-6 max-w-lg">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl opacity-50 rounded-full" />
              <ClipboardText size={80} className="text-muted-foreground mx-auto relative z-10" weight="duotone" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Selecciona un Tema
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Elige un tema de la barra lateral para comenzar a aprender sobre Chrome DevTools y las funciones de depuración con IA.
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 border-t border-border bg-gradient-to-br from-primary/5 to-accent/5">
          <ProgressDashboard workshopData={workshopData} />
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto bg-background">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex items-start justify-between mb-8 gap-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-foreground mb-3 leading-tight tracking-tight">
              {topic.title}
            </h1>
            {isCompleted && (
              <Badge variant="secondary" className="gap-2 px-3 py-1 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/30">
                <CheckCircle size={16} className="text-accent" weight="fill" />
                <span className="font-semibold">Completado</span>
              </Badge>
            )}
          </div>
          {!isCompleted && (
            <Button 
              onClick={onComplete} 
              className="gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5"
              size="lg"
            >
              <CheckCircle size={18} weight="bold" />
              Marcar como Completado
            </Button>
          )}
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="whitespace-pre-wrap text-foreground leading-relaxed">
            {topic.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-3xl font-bold text-foreground mt-12 mb-6 first:mt-0 pb-3 border-b-2 border-gradient-to-r from-primary to-accent">
                    {line.substring(2)}
                  </h1>
                )
              }
              if (line.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-foreground mt-10 mb-5 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                    {line.substring(3)}
                  </h2>
                )
              }
              if (line.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-foreground mt-8 mb-4">
                    {line.substring(4)}
                  </h3>
                )
              }
              
              if (line.startsWith('```')) {
                return null
              }
              
              if (line.startsWith('- ')) {
                return (
                  <li key={index} className="text-foreground ml-6 mb-2 leading-relaxed relative before:content-[''] before:absolute before:left-[-1.25rem] before:top-[0.6rem] before:w-2 before:h-2 before:bg-gradient-to-br before:from-primary before:to-accent before:rounded-full">
                    {line.substring(2)}
                  </li>
                )
              }
              
              const boldRegex = /\*\*(.*?)\*\*/g
              const codeRegex = /`(.*?)`/g
              
              if (line.trim() === '') {
                return <div key={index} className="h-5" />
              }
              
              let processedLine = line
              processedLine = processedLine.replace(boldRegex, '<strong class="font-bold text-foreground">$1</strong>')
              processedLine = processedLine.replace(codeRegex, '<code class="bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-2 py-1 rounded-md text-sm font-mono border border-primary/20">$1</code>')
              
              return (
                <p key={index} className="text-foreground/90 mb-5 leading-relaxed text-[15px]" dangerouslySetInnerHTML={{ __html: processedLine }} />
              )
            })}
          </div>
        </div>

        {topic.exercises && topic.exercises.length > 0 && (
          <div className="mt-16 space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                <Code size={20} className="text-white" weight="bold" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Ejercicios Prácticos</h2>
            </div>
            {topic.exercises.map((exercise) => (
              <Card key={exercise.id} className="border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10 overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-sm">
                      <Code size={18} className="text-white" weight="bold" />
                    </div>
                    <span className="text-xl">{exercise.title}</span>
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed pl-11">{exercise.description}</p>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <CodeBlock
                    code={exercise.code}
                    language={exercise.language}
                    title={exercise.title}
                    description={exercise.description}
                    editable={true}
                    showLineNumbers={true}
                  />
                  <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl p-5 border border-border">
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2 text-lg">
                      <span className="w-2 h-2 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse" />
                      Instrucciones:
                    </h4>
                    <ol className="space-y-3">
                      {exercise.instructions.map((instruction, index) => (
                        <li key={index} className="text-foreground/90 flex gap-4 leading-relaxed">
                          <span className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5 shadow-sm">
                            {index + 1}
                          </span>
                          <span className="text-sm">{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {topic.interactiveExercises && topic.interactiveExercises.length > 0 && (
          <div className="mt-16 space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-md">
                <Target size={20} className="text-white" weight="bold" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Ejercicios Interactivos</h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Completa estos ejercicios con validación en tiempo real
                </p>
              </div>
            </div>
            {topic.interactiveExercises.map((exercise) => (
              <InteractiveExercise
                key={exercise.id}
                exercise={exercise}
                topicId={topic.id}
              />
            ))}
          </div>
        )}

        {topic.miniLab && (
          <MiniLabComponent
            miniLab={topic.miniLab}
            topicId={topic.id}
          />
        )}
      </div>
    </div>
  )
}