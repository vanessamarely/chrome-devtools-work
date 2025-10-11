export interface WorkshopTopic {
  id: string
  title: string
  content: string
  exercises?: CodeExercise[]
  interactiveExercises?: InteractiveExercise[]
}

export interface CodeExercise {
  id: string
  title: string
  description: string
  code: string
  language: string
  instructions: string[]
}

export interface InteractiveExercise {
  id: string
  title: string
  description: string
  type: 'code-completion' | 'css-selector' | 'debug-fix' | 'dom-manipulation' | 'console-command'
  initialCode?: string
  solution: string | string[]
  hints?: string[]
  validation: ValidationRule[]
  language?: string
}

export interface ValidationRule {
  type: 'contains' | 'regex' | 'exact' | 'function' | 'dom-check'
  value: string | RegExp
  message: string
  points?: number
}

export interface WorkshopSection {
  id: string
  title: string
  icon: string
  topics: WorkshopTopic[]
}

export interface WorkshopData {
  title: string
  description?: string
  sections: WorkshopSection[]
}