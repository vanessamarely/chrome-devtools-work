import React from 'react'
import { CheckCircle, ClipboardText, Code, Target, Printer, Star, GitBranch } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CodeBlock } from './CodeBlock'
import { InteractiveExercise } from './InteractiveExercise'
import { MiniLabComponent } from './MiniLab'
import { ProgressDashboard } from './ProgressDashboard'
import { WorkshopTopic } from '../types/workshop'
import { workshopData } from '../data/workshopData'
import { toast } from 'sonner'

interface ContentAreaProps {
  topic?: WorkshopTopic
  isCompleted: boolean
  onComplete: () => void
}

export function ContentArea({ topic, isCompleted, onComplete }: ContentAreaProps) {
  const handlePrint = () => {
    toast.info('Abriendo vista de impresión...')
    setTimeout(() => {
      window.print()
    }, 300)
  }

  const handleStarRepo = () => {
    const repoUrl = 'https://github.com/YOUR_USERNAME/YOUR_REPO'
    window.open(`${repoUrl}/stargazers`, '_blank', 'noopener,noreferrer')
    toast.success('¡Gracias por apoyar el proyecto! 🌟')
  }

  const handleCreateIssue = () => {
    const repoUrl = 'https://github.com/YOUR_USERNAME/YOUR_REPO'
    window.open(`${repoUrl}/issues/new`, '_blank', 'noopener,noreferrer')
    toast.info('Abriendo formulario para crear un issue...')
  }

  if (!topic) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex flex-col bg-background"
      >
        <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border px-4 md:px-8 py-3 flex justify-end gap-2 print:hidden">
          <Button 
            onClick={handleStarRepo} 
            variant="outline"
            size="sm"
            className="gap-2 btn-hover-glow"
          >
            <Star size={16} weight="bold" />
            <span className="hidden sm:inline">Dar Estrella</span>
          </Button>
          <Button 
            onClick={handleCreateIssue} 
            variant="outline"
            size="sm"
            className="gap-2 btn-hover-scale"
          >
            <GitBranch size={16} weight="bold" />
            <span className="hidden sm:inline">Reportar Issue</span>
          </Button>
        </div>
        <div className="flex-1 flex items-center justify-center p-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="text-center space-y-6 max-w-lg"
          >
            <div className="relative">
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 150 }}
              >
                <ClipboardText size={80} className="text-muted-foreground mx-auto relative z-10" weight="duotone" />
              </motion.div>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Selecciona un Tema
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Elige un tema de la barra lateral para comenzar a aprender sobre Chrome DevTools y las funciones de depuración con IA.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="p-4 md:p-8 border-t border-border bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] print:hidden">
          <ProgressDashboard workshopData={workshopData} />
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      key={topic.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex-1 overflow-y-auto bg-background"
    >
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border px-4 md:px-8 py-3 flex justify-end gap-2 print:hidden">
        <Button 
          onClick={handleStarRepo} 
          variant="outline"
          size="sm"
          className="gap-2 btn-hover-glow"
        >
          <Star size={16} weight="bold" />
          <span className="hidden sm:inline">Dar Estrella</span>
        </Button>
        <Button 
          onClick={handleCreateIssue} 
          variant="outline"
          size="sm"
          className="gap-2 btn-hover-scale"
        >
          <GitBranch size={16} weight="bold" />
          <span className="hidden sm:inline">Reportar Issue</span>
        </Button>
      </div>
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex items-start justify-between mb-8 gap-4 flex-wrap"
        >
          <div className="flex-1 min-w-[250px]">
            <h1 className="text-4xl font-bold text-foreground mb-3 leading-tight tracking-tight">
              {topic.title}
            </h1>
            {isCompleted && (
              <Badge variant="secondary" className="gap-2 px-3 py-1 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/30 print:hidden">
                <CheckCircle size={16} className="text-accent" weight="fill" />
                <span className="font-semibold">Completado</span>
              </Badge>
            )}
          </div>
          <div className="flex gap-2 print:hidden">
            <Button 
              onClick={handlePrint} 
              variant="outline"
              className="gap-2 btn-hover-scale"
              size="lg"
            >
              <Printer size={18} weight="bold" />
              Imprimir
            </Button>
            {!isCompleted && (
              <Button 
                onClick={onComplete} 
                className="gap-2 btn-hover-gradient"
                size="lg"
              >
                <CheckCircle size={18} weight="bold" />
                Completar
              </Button>
            )}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="prose prose-slate max-w-none"
        >
          <div className="whitespace-pre-wrap leading-relaxed">
            {topic.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-3xl font-bold text-foreground mt-12 mb-6 first:mt-0 pb-3 border-b-2 border-primary/30">
                    {line.substring(2)}
                  </h1>
                )
              }
              if (line.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-foreground mt-10 mb-5 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-gradient-to-b from-primary to-accent rounded-full flex-shrink-0" />
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
                  <li key={index} className="text-foreground/90 ml-6 mb-3 leading-relaxed relative before:content-[''] before:absolute before:left-[-1.25rem] before:top-[0.65rem] before:w-2 before:h-2 before:bg-gradient-to-br before:from-primary before:to-accent before:rounded-full">
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
              processedLine = processedLine.replace(codeRegex, '<code class="bg-muted/80 text-foreground px-2.5 py-1 rounded-md text-sm font-mono border border-border/60 font-medium">$1</code>')
              
              return (
                <p key={index} className="text-foreground/90 mb-5 leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: processedLine }} />
              )
            })}
          </div>
        </motion.div>

        {topic.exercises && topic.exercises.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-16 space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                <Code size={20} className="text-white" weight="bold" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Ejercicios Prácticos</h2>
            </div>
            {topic.exercises.map((exercise, index) => (
              <motion.div
                key={exercise.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              >
                <Card className="border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10 overflow-hidden bg-card">
                <CardHeader className="bg-muted/50 border-b border-border">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-sm">
                      <Code size={18} className="text-white" weight="bold" />
                    </div>
                    <span className="text-xl text-foreground font-semibold">{exercise.title}</span>
                  </CardTitle>
                  <p className="text-foreground/70 leading-relaxed pl-11 text-[15px]">{exercise.description}</p>
                </CardHeader>
                <CardContent className="space-y-6 pt-6 bg-card">
                  <CodeBlock
                    code={exercise.code}
                    language={exercise.language}
                    title={exercise.title}
                    description={exercise.description}
                    editable={true}
                    showLineNumbers={true}
                  />
                  <div className="bg-muted/60 rounded-xl p-5 border border-border/80">
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
                          <span className="text-[15px]">{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {topic.interactiveExercises && topic.interactiveExercises.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-16 space-y-6"
          >
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
            {topic.interactiveExercises.map((exercise, index) => (
              <motion.div
                key={exercise.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              >
                <InteractiveExercise
                  exercise={exercise}
                  topicId={topic.id}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {topic.miniLab && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <MiniLabComponent
              miniLab={topic.miniLab}
              topicId={topic.id}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}