import { CaretRight, CaretDown, BookOpen, Code, CheckCircle } from '@phosphor-icons/react'
import { useState } from 'react'
import { WorkshopSection } from '../types/workshop'
import { cn } from '../lib/utils'

interface SidebarProps {
  sections: WorkshopSection[]
  selectedTopic: string
  completedTopics: Set<string>
  onTopicSelect: (topicId: string) => void
}

export function Sidebar({ sections, selectedTopic, completedTopics, onTopicSelect }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['basics']))

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  return (
    <div className="w-80 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-xl font-bold text-sidebar-foreground">Chrome DevTools Workshop</h1>
        <p className="text-sm text-sidebar-foreground/70 mt-1">Master debugging with AI assistance</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {sections.map((section) => {
          const isExpanded = expandedSections.has(section.id)
          const completedCount = section.topics.filter(topic => completedTopics.has(topic.id)).length
          const totalCount = section.topics.length
          
          return (
            <div key={section.id} className="space-y-1">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-sidebar-accent transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{section.icon}</span>
                  <div>
                    <div className="font-medium text-sidebar-foreground">{section.title}</div>
                    <div className="text-xs text-sidebar-foreground/60">
                      {completedCount}/{totalCount} completed
                    </div>
                  </div>
                </div>
                {isExpanded ? (
                  <CaretDown size={16} className="text-sidebar-foreground/60" />
                ) : (
                  <CaretRight size={16} className="text-sidebar-foreground/60" />
                )}
              </button>
              
              {isExpanded && (
                <div className="ml-6 space-y-1">
                  {section.topics.map((topic) => {
                    const isSelected = selectedTopic === topic.id
                    const isCompleted = completedTopics.has(topic.id)
                    const hasExercises = topic.exercises && topic.exercises.length > 0
                    
                    return (
                      <button
                        key={topic.id}
                        onClick={() => onTopicSelect(topic.id)}
                        className={cn(
                          "w-full flex items-center gap-3 p-2 rounded-md transition-colors text-left",
                          isSelected
                            ? "bg-sidebar-primary text-sidebar-primary-foreground"
                            : "hover:bg-sidebar-accent text-sidebar-foreground"
                        )}
                      >
                        <div className="flex items-center gap-2 flex-1">
                          {hasExercises ? (
                            <Code size={16} className={isSelected ? "text-sidebar-primary-foreground/80" : "text-sidebar-foreground/60"} />
                          ) : (
                            <BookOpen size={16} className={isSelected ? "text-sidebar-primary-foreground/80" : "text-sidebar-foreground/60"} />
                          )}
                          <span className="text-sm">{topic.title}</span>
                        </div>
                        {isCompleted && (
                          <CheckCircle size={16} className="text-accent flex-shrink-0" />
                        )}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
      
      <div className="p-4 border-t border-sidebar-border">
        <div className="text-xs text-sidebar-foreground/60 text-center">
          Progress: {completedTopics.size}/{sections.flatMap(s => s.topics).length} topics completed
        </div>
      </div>
    </div>
  )
}