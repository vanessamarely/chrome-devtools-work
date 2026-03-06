import React, { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Sidebar } from './components/Sidebar'
import { ContentArea } from './components/ContentArea'
import { workshopData } from './data/workshopData'

function App() {
  const [selectedTopic, setSelectedTopic] = useState<string>('introduction')
  const [completedTopicsString, setCompletedTopicsString] = useKV('completed-topics', '')

  const completedTopics = new Set(
    completedTopicsString && typeof completedTopicsString === 'string' 
      ? completedTopicsString.split(',') 
      : []
  )

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId)
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
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <Sidebar
        sections={workshopData.sections}
        selectedTopic={selectedTopic}
        completedTopics={completedTopics}
        onTopicSelect={handleTopicSelect}
      />
      <ContentArea
        topic={currentTopic}
        isCompleted={completedTopics.has(selectedTopic)}
        onComplete={() => handleTopicComplete(selectedTopic)}
      />
    </div>
  )
}

export default App