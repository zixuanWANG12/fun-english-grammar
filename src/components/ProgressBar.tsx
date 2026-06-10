import { Link } from 'react-router-dom'
import { getProgress } from '../utils/progress'
import books from '../data/books'

export default function ProgressBar({ bookId, total }: { bookId: string; total: number }) {
  const p = getProgress()
  const completed = p.completedLessons.filter(id => id.startsWith(bookId)).length
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-700"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-xs text-gray-500 font-medium shrink-0">{completed}/{total}</span>
    </div>
  )
}

export function GlobalProgressBar() {
  const p = getProgress()
  const totalLessons = books.reduce((acc, b) => acc + b.lessons.length, 0)
  const completedCount = p.completedLessons.length
  const percentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0

  return (
    <Link
      to="/progress"
      className="block rounded-2xl bg-white/80 backdrop-blur-sm border border-indigo-100 p-4 shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-bold text-gray-700">📊 总学习进度</span>
        <span className="text-xs text-indigo-500 font-medium">{completedCount}/{totalLessons} 课</span>
      </div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 transition-all duration-700"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
        <span>🔥 连续学习 {p.streak} 天</span>
        <span>✨ {p.xp} XP</span>
        <span>🏅 {p.badges.length} 徽章</span>
      </div>
    </Link>
  )
}