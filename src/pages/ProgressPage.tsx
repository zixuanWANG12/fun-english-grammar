import { Link } from 'react-router-dom'
import books from '../data/books'
import { getProgress } from '../utils/progress'
import { BADGE_INFO } from '../utils/progress'
import ProgressBar from '../components/ProgressBar'

export default function ProgressPage() {
  const progress = getProgress()
  const totalLessons = books.reduce((acc, b) => acc + b.lessons.length, 0)

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">📊 学习进度</h1>
      <p className="text-gray-500 mb-6">看看你的语法学习之旅</p>

      {/* Stats cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 animate-fade-in-up">
        {[
          { icon: '📖', label: '已完成课程', value: `${progress.completedLessons.length} / ${totalLessons}` },
          { icon: '✨', label: '总 XP', value: `${progress.xp}` },
          { icon: '🔥', label: '连续学习', value: `${progress.streak} 天` },
          { icon: '🏅', label: '获得徽章', value: `${progress.badges.length} 个` },
        ].map((stat, i) => (
          <div key={i} className="rounded-2xl bg-white border border-gray-100 shadow-sm p-4 text-center hover:shadow-md transition-all" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-lg font-bold text-gray-800">{stat.value}</div>
            <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Book progress */}
      <h2 className="text-lg font-bold text-gray-800 mb-3">📚 各册进度</h2>
      <div className="space-y-3 mb-8">
        {books.map((book, i) => (
          <Link
            key={book.id}
            to={`/books/${book.id}`}
            className="block rounded-2xl bg-white border border-gray-100 shadow-sm p-4 hover:shadow-md transition-all animate-fade-in-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl">{book.emoji}</span>
              <span className="font-bold text-gray-700">{book.title}</span>
              <span className="text-xs text-gray-400">{book.subtitle}</span>
            </div>
            <ProgressBar bookId={book.id} total={book.lessons.length} />
          </Link>
        ))}
      </div>

      {/* Badges */}
      <h2 className="text-lg font-bold text-gray-800 mb-3">🏅 成就徽章</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
        {Object.entries(BADGE_INFO).map(([key, badge]) => {
          const earned = progress.badges.includes(key)
          return (
            <div
              key={key}
              className={`rounded-2xl p-4 text-center border transition-all ${
                earned
                  ? 'bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200 shadow-sm'
                  : 'bg-gray-50 border-gray-100 opacity-50'
              }`}
            >
              <div className={`text-3xl mb-1 ${earned ? 'animate-pop-in' : 'grayscale'}`}>
                {badge.icon}
              </div>
              <div className={`text-sm font-bold ${earned ? 'text-gray-800' : 'text-gray-400'}`}>
                {badge.name}
              </div>
              <div className="text-xs text-gray-400 mt-1">{badge.description}</div>
            </div>
          )
        })}
      </div>

      {/* Wrong questions */}
      {progress.wrongQuestions.length > 0 && (
        <>
          <h2 className="text-lg font-bold text-gray-800 mb-3">📝 错题本</h2>
          <div className="space-y-3">
            {progress.wrongQuestions.slice(-10).reverse().map((wq, i) => (
              <div key={i} className="rounded-2xl bg-white border border-gray-100 shadow-sm p-4 animate-fade-in-up">
                <p className="text-sm text-gray-800 font-medium">{wq.question}</p>
                <div className="flex items-center gap-3 mt-2 text-xs">
                  <span className="text-red-500">你的答案：{wq.userAnswer}</span>
                  <span className="text-green-600">正确答案：{String(wq.correctAnswer)}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Empty state */}
      {progress.completedLessons.length === 0 && (
        <div className="text-center py-10 animate-fade-in-up">
          <div className="text-6xl mb-4">🚀</div>
          <h3 className="text-lg font-bold text-gray-800">还没有学习记录</h3>
          <p className="text-gray-400 mt-1">开始你的第一节语法课吧！</p>
          <Link
            to="/books"
            className="inline-block mt-4 px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl transition-all"
          >
            📚 去学习
          </Link>
        </div>
      )}
    </div>
  )
}