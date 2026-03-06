import React, { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { List, X } from '@phosphor-icons/react'
import { Button } from './components/ui/button'
import { Sidebar } from './components/Sidebar'
import { ContentArea } from './components/ContentArea'
import { workshopData } from './data/workshopData'
import { useIsMobile } from './hooks/use-mobile'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [selectedTopic, setSelectedTopic] = useState<string>('introduction')
  const [completedTopicsString, setCompletedTopicsString] = useKV('completed-topics', '')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const isMobile = useIsMobile()

  const completedTopics = new Set(
    completedTopicsString && typeof completedTopicsString === 'string' 
      ? completedTopicsString.split(',') 
      : []
  )

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId)
    if (isMobile) {
      setIsSidebarOpen(false)
    }
  }

  const handleTopicComplete = (topicId: string) => {
    if (!completedTopics.has(topicId)) {
      const currentTopics = completedTopicsString && typeof completedTopicsString === 'string' 
        ? completedTopicsString.split(',') 
        : []
      const newCompleted = [...currentTopics, topicId]
      setCompletedTopicsString(newCompleted.join(','))
    }
  }

  const currentTopic = workshopData.sections
    .flatMap(section => section.topics)
    .find(topic => topic.id === selectedTopic)

  return (
    <div className="flex h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.015] via-background to-accent/[0.015] pointer-events-none print:hidden" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/[0.025] to-accent/[0.025] rounded-full blur-3xl opacity-40 pointer-events-none print:hidden" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/[0.025] to-primary/[0.025] rounded-full blur-3xl opacity-40 pointer-events-none print:hidden" />
      
      {isMobile ? (
        <>
          <AnimatePresence>
            {isSidebarOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 print:hidden"
                  onClick={() => setIsSidebarOpen(false)}
                />
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="fixed left-0 top-0 bottom-0 z-50 w-80 max-w-[85vw] print:hidden"
                >
                  <Sidebar
                    sections={workshopData.sections}
                    selectedTopic={selectedTopic}
                    completedTopics={completedTopics}
                    onTopicSelect={handleTopicSelect}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <X size={20} weight="bold" />
                  </Button>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          <div className="flex-1 flex flex-col relative z-10">
            <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm print:hidden">
              <div className="flex items-center gap-3 p-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="btn-hover-scale shadow-sm"
                  onClick={() => setIsSidebarOpen(true)}
                >
                  <List size={20} weight="bold" />
                </Button>
                <div>
                  <h1 className="text-lg font-bold text-foreground">DevTools + IA</h1>
                  <p className="text-xs text-muted-foreground">Workshop Interactivo</p>
                </div>
              </div>
            </div>
            <ContentArea
              topic={currentTopic}
              isCompleted={completedTopics.has(selectedTopic)}
              onComplete={() => handleTopicComplete(selectedTopic)}
            />
          </div>
        </>
      ) : (
        <>
          <div className="print:hidden">
            <Sidebar
              sections={workshopData.sections}
              selectedTopic={selectedTopic}
              completedTopics={completedTopics}
              onTopicSelect={handleTopicSelect}
            />
          </div>
          <ContentArea
            topic={currentTopic}
            isCompleted={completedTopics.has(selectedTopic)}
            onComplete={() => handleTopicComplete(selectedTopic)}
          />
        </>
      )}
    </div>
  )
}

export default App