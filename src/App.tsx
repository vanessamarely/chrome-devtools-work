import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Sidebar } from './components/Sidebar'
import { ContentArea } from './components/ContentArea'
import { workshopData } from './data/workshopData'

function App() {
  const [selectedTopic, setSelectedTopic] = useState<string>('introduction')
  const [completedTopicsString, setCompletedTopicsString] = useKV('completed-topics', '')

  const completedTopics = new Set(completedTopicsString ? completedTopicsString.split(',') : [])

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId)
  }

  const handleTopicComplete = (topicId: string) => {
    if (!completedTopics.has(topicId)) {
      const currentTopics = completedTopicsString ? completedTopicsString.split(',') : []
      const newCompleted = [...currentTopics, topicId]
      setCompletedTopicsString(newCompleted.join(','))
    }
  }

  const currentTopic = workshopData.sections
    .flatMap(section => section.topics)
    .find(topic => topic.id === selectedTopic)

  return (
    <div className="flex h-screen bg-background">
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