export interface Example {
  english: string
  chinese: string
  highlight?: string
  analysis?: string
}

export interface Exercise {
  id: string
  type: 'choice' | 'blank' | 'trueFalse'
  question: string
  options?: string[]
  answer: string | boolean
  acceptableAnswers?: string[]
  explanation: string
}

export interface Section {
  type: 'story' | 'explanation' | 'examples' | 'pitfall' | 'summary'
  title: string
  content?: string
  examples?: Example[]
  pitfall?: {
    wrong: string
    right: string
    reason: string
  }
  items?: string[]
}

export interface Lesson {
  id: string
  title: string
  tags: string[]
  level: number
  estimatedMinutes: number
  summary: string
  sections: Section[]
  exercises: Exercise[]
}

export interface Book {
  id: string
  title: string
  subtitle: string
  emoji: string
  color: string
  description: string
  lessons: Lesson[]
}

export interface LearningProgress {
  completedLessons: string[]
  xp: number
  streak: number
  lastStudyDate: string | null
  badges: string[]
  wrongQuestions: WrongQuestion[]
}

export interface WrongQuestion {
  lessonId: string
  exerciseId: string
  question: string
  userAnswer: string
  correctAnswer: string | boolean
  timestamp: number
}

export interface BookProgress {
  total: number
  completed: number
  percentage: number
}