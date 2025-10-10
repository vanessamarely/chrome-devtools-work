export interface WorkshopTopic {
  id: string
  title: string
  content: string
  exercises?: CodeExercise[]
}

export interface CodeExercise {
  id: string
  title: string
  description: string
  code: string
  language: string
  instructions: string[]
}

export interface WorkshopSection {
  id: string
  title: string
  icon: string
  topics: WorkshopTopic[]
}

export interface WorkshopData {
  title: string
  sections: WorkshopSection[]
}