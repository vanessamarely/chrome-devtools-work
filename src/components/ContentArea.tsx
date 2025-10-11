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
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <ClipboardText size={64} className="text-muted-foreground mx-auto" />
            <h2 className="text-2xl font-semibold text-foreground">Selecciona un Tema</h2>
            <p className="text-muted-foreground max-w-md">
              Elige un tema de la barra lateral para comenzar a aprender sobre Chrome DevTools y las funciones de depuración con IA.
            </p>
          </div>
        </div>
        <div className="p-8">
          <ProgressDashboard workshopData={workshopData} />
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto bg-background">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-foreground">{topic.title}</h1>
            {isCompleted && (
              <Badge variant="secondary" className="gap-1">
                <CheckCircle size={14} className="text-accent" />
                Completado
              </Badge>
            )}
          </div>
          {!isCompleted && (
            <Button onClick={onComplete} className="gap-2">
              <CheckCircle size={16} />
              Marcar como Completado
            </Button>
          )}
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="whitespace-pre-wrap text-foreground leading-relaxed">
            {topic.content.split('\n').map((line, index) => {
              // Handle headers
              if (line.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4 first:mt-0">
                    {line.substring(2)}
                  </h1>
                )
              }
              if (line.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
                    {line.substring(3)}
                  </h2>
                )
              }
              if (line.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-lg font-medium text-foreground mt-4 mb-2">
                    {line.substring(4)}
                  </h3>
                )
              }
              
              // Handle code blocks
              if (line.startsWith('```')) {
                return null // Handle these separately
              }
              
              // Handle lists
              if (line.startsWith('- ')) {
                return (
                  <li key={index} className="text-foreground ml-4 mb-1">
                    {line.substring(2)}
                  </li>
                )
              }
              
              // Handle bold text
              const boldRegex = /\*\*(.*?)\*\*/g
              const codeRegex = /`(.*?)`/g
              
              if (line.trim() === '') {
                return <div key={index} className="h-4" />
              }
              
              let processedLine = line
              processedLine = processedLine.replace(boldRegex, '<strong>$1</strong>')
              processedLine = processedLine.replace(codeRegex, '<code class="bg-muted px-1 py-0.5 rounded text-sm font-mono">$1</code>')
              
              return (
                <p key={index} className="text-foreground mb-4" dangerouslySetInnerHTML={{ __html: processedLine }} />
              )
            })}
          </div>
        </div>

        {topic.exercises && topic.exercises.length > 0 && (
          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Ejercicios Prácticos</h2>
            {topic.exercises.map((exercise) => (
              <Card key={exercise.id} className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code size={20} className="text-primary" />
                    {exercise.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{exercise.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CodeBlock
                    code={exercise.code}
                    language={exercise.language}
                  />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Instrucciones:</h4>
                    <ol className="space-y-2">
                      {exercise.instructions.map((instruction, index) => (
                        <li key={index} className="text-foreground flex gap-3">
                          <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span>{instruction}</span>
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
          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Target size={24} className="text-primary" />
              Ejercicios Interactivos
            </h2>
            <p className="text-muted-foreground">
              Completa estos ejercicios con validación en tiempo real para practicar lo que has aprendido.
            </p>
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