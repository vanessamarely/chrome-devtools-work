import { BookOpen, Code, CheckCircle, Target } from '@phosphor-icons/react'
import React from 'react'
import { motion } from 'framer-motion'
import { WorkshopSection } from '../types/workshop'
import { cn } from '../lib/utils'

interface SidebarProps {
  sections: WorkshopSection[]
  selectedTopic: string
  completedTopics: Set<string>
  onTopicSelect: (topicId: string) => void
}

export function Sidebar({ sections, selectedTopic, completedTopics, onTopicSelect }: SidebarProps) {
  const totalTopics = sections.flatMap(s => s.topics).length
  const progressPercentage = totalTopics > 0 ? Math.round((completedTopics.size / totalTopics) * 100) : 0

  return (
    <div className="w-80 bg-sidebar border-r border-sidebar-border flex flex-col shadow-sm relative h-full">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="p-6 border-b border-sidebar-border bg-gradient-to-br from-primary/[0.03] to-accent/[0.03] flex-shrink-0"
      >
        <div className="flex items-center gap-3 mb-2">
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 200 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md"
          >
            <Code size={20} weight="bold" className="text-white" />
          </motion.div>
          <div>
            <h1 className="text-xl font-bold text-sidebar-foreground tracking-tight">DevTools + IA</h1>
            <p className="text-xs text-sidebar-foreground/60">Workshop Interactivo</p>
          </div>
        </div>
        <p className="text-sm text-sidebar-foreground/75 leading-relaxed">
          Domina la depuración con asistencia de IA
        </p>
      </motion.div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {sections.map((section, sectionIndex) => {
          const completedCount = section.topics.filter(topic => completedTopics.has(topic.id)).length
          const totalCount = section.topics.length
          const sectionProgress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0
          
          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + sectionIndex * 0.1, duration: 0.4 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-3 px-3 py-2">
                <div className="text-xl flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  {section.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sidebar-foreground text-sm mb-1 truncate">{section.title}</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-sidebar-accent rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out rounded-full"
                        style={{ width: `${sectionProgress}%` }}
                      />
                    </div>
                    <span className="text-xs text-sidebar-foreground/50 font-medium whitespace-nowrap">
                      {completedCount}/{totalCount}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="ml-8 space-y-1">
                {section.topics.map((topic, topicIndex) => {
                  const isSelected = selectedTopic === topic.id
                  const isCompleted = completedTopics.has(topic.id)
                  const hasExercises = topic.exercises && topic.exercises.length > 0
                  const hasInteractiveExercises = topic.interactiveExercises && topic.interactiveExercises.length > 0
                  
                  return (
                    <motion.button
                      key={topic.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: topicIndex * 0.05, duration: 0.3 }}
                      onClick={() => onTopicSelect(topic.id)}
                      className={cn(
                        "w-full flex items-center gap-3 p-2.5 rounded-lg text-left group relative overflow-hidden transition-all",
                        isSelected
                          ? "bg-gradient-to-r from-primary to-primary/90 text-sidebar-primary-foreground shadow-md shadow-primary/20"
                          : "hover:bg-sidebar-accent text-sidebar-foreground"
                      )}
                    >
                      {isSelected && (
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-50" />
                      )}
                      <div className="flex items-center gap-2.5 flex-1 relative z-10">
                        {hasInteractiveExercises ? (
                          <Target size={16} weight="bold" className={isSelected ? "text-sidebar-primary-foreground" : "text-accent"} />
                        ) : hasExercises ? (
                          <Code size={16} weight="bold" className={isSelected ? "text-sidebar-primary-foreground" : "text-primary/70"} />
                        ) : (
                          <BookOpen size={16} weight="bold" className={isSelected ? "text-sidebar-primary-foreground" : "text-sidebar-foreground/60"} />
                        )}
                        <span className={cn(
                          "text-sm font-medium flex-1",
                          isSelected ? "font-semibold" : ""
                        )}>{topic.title}</span>
                      </div>
                      <div className="flex items-center gap-1.5 relative z-10">
                        {hasInteractiveExercises && !isCompleted && (
                          <div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-sm shadow-accent/50" title="Tiene ejercicios interactivos" />
                        )}
                        {isCompleted && (
                          <CheckCircle size={18} weight="fill" className={isSelected ? "text-sidebar-primary-foreground" : "text-accent"} />
                        )}
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          )
        })}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="p-4 border-t border-sidebar-border bg-gradient-to-br from-primary/[0.03] to-accent/[0.03] flex-shrink-0"
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-sidebar-foreground/75 font-medium">Progreso Total</span>
            <span className="text-sidebar-foreground font-bold">{progressPercentage}%</span>
          </div>
          <div className="h-2 bg-sidebar-accent rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-500 ease-out rounded-full shadow-sm"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="text-xs text-center text-sidebar-foreground/65">
            {completedTopics.size} de {totalTopics} temas completados
          </div>
        </div>
      </motion.div>
    </div>
  )
}