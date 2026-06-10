import { useParams, Link } from 'react-router-dom'
import { useState, useCallback } from 'react'
import books from '../data/books'
import ExerciseCard from '../components/ExerciseCard'

export default function PracticePage() {
  const { lessonId } = useParams<{ lessonId: string }>()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [completed, setCompleted] = useState(false)

  let lesson = null
  let bookTitle = ''
  for (const book of books) {
    const found = book.lessons.find(l => l.id === lessonId)
    if (found) {
      lesson = found
      bookTitle = `${book.title} · ${book.subtitle}`
      break
    }
  }

  const handleComplete = useCallback(() => {
    if (lesson && currentIndex < lesson.exercises.length - 1) {
      setCurrentIndex(prev => prev + 1)
    } else {
      setCompleted(true)
    }
  }, [currentIndex, lesson])

  const handleRestart = () => {
    setCurrentIndex(0)
    setCompleted(false)
  }

  if (!lesson) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-xl font-bold text-gray-800">找不到这一课</h2>
        <Link to="/progress" className="mt-4 inline-block text-indigo-500 hover:text-indigo-600">
          ← 返回课程列表
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link to={`/lesson/${lessonId}`} className="text-sm text-indigo-500 hover:text-indigo-600 mb-4 inline-block">
        ← 返回课程
      </Link>

      <div className="mb-6 animate-fade-in-up">
        <h1 className="text-2xl font-bold text-gray-800">📝 专项练习</h1>
        <p className="text-gray-500">{bookTitle} · {lesson.title}</p>
      </div>

      {!completed ? (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / lesson.exercises.length) * 100}%` }}
              />
            </div>
            <span className="text-xs text-gray-400 font-medium shrink-0">
              {currentIndex + 1}/{lesson.exercises.length}
            </span>
          </div>
          {lesson.exercises.length > 0 ? (
            <ExerciseCard
              key={`${lesson.id}-${currentIndex}`}
              exercise={lesson.exercises[currentIndex]}
              onComplete={handleComplete}
            />
          ) : (
            <div className="text-center py-8 text-gray-400">
              <p>该课程暂无练习题</p>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-10 animate-pop-in">
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-2xl font-bold text-gray-800">专项练习完成！</h2>
          <p className="text-gray-500 mt-2">你完成了 {lesson.title} 的所有练习题</p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={handleRestart}
              className="px-6 py-2.5 bg-white border-2 border-indigo-200 hover:border-indigo-400 text-indigo-600 font-bold rounded-xl transition-all active:scale-95"
            >
              🔄 再来一次
            </button>
            <Link
              to={`/lesson/${lessonId}`}
              className="px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-95"
            >
              📖 回顾课程
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}