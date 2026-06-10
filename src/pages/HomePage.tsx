import { Link, useNavigate } from 'react-router-dom'
import BookCard from '../components/BookCard'
import { GlobalProgressBar } from '../components/ProgressBar'
import books from '../data/books'
import { getProgress } from '../utils/progress'

const ENCOURAGEMENTS = [
  '🎯 每天进步一点点，语法达人就是你！',
  '💪 语法没有捷径，但有乐趣！',
  '🌟 每一个语法点，都是你英语的武器。',
  '🚀 今天的学习，明天的能力。',
]

export default function HomePage() {
  const navigate = useNavigate()
  const progress = getProgress()
  const encouragement = ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)]

  const handleRandomChallenge = () => {
    const allLessons = books.flatMap(b => b.lessons)
    const randomLesson = allLessons[Math.floor(Math.random() * allLessons.length)]
    navigate(`/lesson/${randomLesson.id}`)
  }

  return (
    <div>
      {/* Hero */}
      <div className="text-center py-10 animate-fade-in-up">
        <div className="text-6xl mb-4">🎮</div>
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          趣味英语语法
        </h1>
        <p className="text-lg text-gray-500 mt-3">把枯燥语法变成闯关游戏</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/books"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 transition-all active:scale-95"
          >
            📚 开始学习
          </Link>
          <button
            onClick={handleRandomChallenge}
            className="px-6 py-3 bg-white border-2 border-indigo-200 hover:border-indigo-400 text-indigo-600 font-bold rounded-xl hover:shadow-lg transition-all active:scale-95"
          >
            🎲 随机挑战
          </button>
        </div>
      </div>

      {/* Global Progress */}
      <div className="mb-8">
        <GlobalProgressBar />
      </div>

      {/* Book Cards */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">📖 选择一册开始学习</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {books.map((book, i) => (
          <div key={book.id} style={{ animationDelay: `${i * 100}ms` }}>
            <BookCard book={book} />
          </div>
        ))}
      </div>

      {/* Today's recommendation */}
      <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white shadow-lg animate-fade-in-up">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-medium">今日推荐</span>
            <h3 className="text-xl font-bold mt-3">{books[0].lessons[0].title}</h3>
            <p className="text-white/80 mt-1">{books[0].lessons[0].summary}</p>
            <div className="flex items-center gap-3 mt-3 text-sm text-white/70">
              <span>⭐ {books[0].lessons[0].level} 难度</span>
              <span>⏱ {books[0].lessons[0].estimatedMinutes} 分钟</span>
            </div>
            <Link
              to={`/lesson/${books[0].lessons[0].id}`}
              className="inline-block mt-4 px-5 py-2 bg-white text-indigo-600 font-bold rounded-xl hover:shadow-lg transition-all active:scale-95"
            >
              去学习 →
            </Link>
          </div>
          <div className="text-5xl hidden sm:block">📖</div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>{encouragement}</p>
        <p className="mt-1">
          📊 已完成 {progress.completedLessons.length} 课 · 🔥 连续学习 {progress.streak} 天 · ✨ {progress.xp} XP
        </p>
      </div>
    </div>
  )
}