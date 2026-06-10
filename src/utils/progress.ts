import type { LearningProgress } from '../types'

const STORAGE_KEY = 'fun-english-grammar-progress'

const DEFAULT_PROGRESS: LearningProgress = {
  completedLessons: [],
  xp: 0,
  streak: 0,
  lastStudyDate: null,
  badges: [],
  wrongQuestions: [],
}

export function getProgress(): LearningProgress {
  if (typeof window === 'undefined') return { ...DEFAULT_PROGRESS }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULT_PROGRESS }
    return JSON.parse(raw) as LearningProgress
  } catch {
    return { ...DEFAULT_PROGRESS }
  }
}

export function saveProgress(p: LearningProgress): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
}

export function completeLesson(lessonId: string): LearningProgress {
  const p = getProgress()
  if (!p.completedLessons.includes(lessonId)) {
    p.completedLessons.push(lessonId)
    p.xp += 50

    // Streak calculation
    const today = new Date().toISOString().split('T')[0]
    if (p.lastStudyDate === null) {
      p.streak = 1
    } else {
      const last = new Date(p.lastStudyDate)
      const now = new Date(today)
      const diffDays = Math.floor((now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24))
      if (diffDays === 1) {
        p.streak += 1
      } else if (diffDays > 1) {
        p.streak = 1
      }
    }
    p.lastStudyDate = today

    // Add badges
    const newBadges: string[] = []
    if (p.xp >= 50 && !p.badges.includes('first-lesson')) {
      newBadges.push('first-lesson')
    }
    if (p.streak >= 3 && !p.badges.includes('streak-3')) {
      newBadges.push('streak-3')
    }
    if (p.streak >= 7 && !p.badges.includes('streak-7')) {
      newBadges.push('streak-7')
    }
    if (p.completedLessons.length >= 5 && !p.badges.includes('five-lessons')) {
      newBadges.push('five-lessons')
    }
    if (p.completedLessons.length >= 10 && !p.badges.includes('ten-lessons')) {
      newBadges.push('ten-lessons')
    }
    p.badges = [...p.badges, ...newBadges]

    saveProgress(p)
  }
  return p
}

export function addWrongQuestion(
  lessonId: string,
  exerciseId: string,
  question: string,
  userAnswer: string,
  correctAnswer: string | boolean
): void {
  const p = getProgress()
  p.wrongQuestions.push({
    lessonId,
    exerciseId,
    question,
    userAnswer,
    correctAnswer,
    timestamp: Date.now(),
  })
  saveProgress(p)
}

export function clearProgress(): void {
  localStorage.removeItem(STORAGE_KEY)
}

export function getBookProgress(bookId: string, totalLessons: number) {
  const p = getProgress()
  const completed = p.completedLessons.filter(id => id.startsWith(bookId)).length
  return {
    total: totalLessons,
    completed,
    percentage: totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0,
  }
}

export const ENCOURAGEMENTS = [
  '🎉 语法小怪兽被你打掉一只！',
  '💪 这题有点狡猾，但你抓住它了。',
  '✨ 别慌，英语语法也怕认真复盘的人。',
  '🌟 你今天又变强了一点！',
  '🚀 离语法大师又近了一步！',
  '🎯 精准命中！就是这种感觉！',
  '🏆 语法王者之路，一步一个脚印。',
]

export const BADGE_INFO: Record<string, { name: string; icon: string; description: string }> = {
  'first-lesson': { name: '初次学习', icon: '🌱', description: '完成第一节课' },
  'streak-3': { name: '连续三天', icon: '🔥', description: '连续学习 3 天' },
  'streak-7': { name: '一周达人', icon: '⭐', description: '连续学习 7 天' },
  'five-lessons': { name: '勤奋学员', icon: '📚', description: '完成 5 节课' },
  'ten-lessons': { name: '语法勇士', icon: '⚔️', description: '完成 10 节课' },
}