import { useParams, Link } from 'react-router-dom'
import { useState, useCallback } from 'react'
import books from '../data/books'
import ExerciseCard from '../components/ExerciseCard'
import { completeLesson, getProgress } from '../utils/progress'

export default function LessonPage() {
  const { lessonId } = useParams<{ lessonId: string }>()
  const [showExercises, setShowExercises] = useState(false)
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [showAnalysis, setShowAnalysis] = useState<string | null>(null)

  // Find lesson across all books
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

  const progress = getProgress()
  const isAlreadyCompleted = lessonId ? progress.completedLessons.includes(lessonId) : false

  const handleExerciseComplete = useCallback(() => {
    if (lesson && currentExerciseIndex < lesson.exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1)
    } else {
      setCompleted(true)
      if (lesson && lessonId) {
        completeLesson(lessonId)
      }
    }
  }, [currentExerciseIndex, lesson, lessonId])

  if (!lesson) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-xl font-bold text-gray-800">找不到这一课</h2>
        <Link to="/books" className="mt-4 inline-block text-indigo-500 hover:text-indigo-600">
          ← 返回课程列表
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link to={`/books/${lessonId?.split('-')[0]}`} className="text-sm text-indigo-500 hover:text-indigo-600 mb-4 inline-block">
        ← 返回 {bookTitle}
      </Link>

      {/* Title */}
      <div className="mb-6 animate-fade-in-up">
        <div className="flex items-center gap-2 text-sm text-indigo-500 mb-1">
          <span>{bookTitle}</span>
          <span>·</span>
          <span>{'⭐'.repeat(lesson.level)}</span>
          <span>·</span>
          <span>⏱ {lesson.estimatedMinutes} 分钟</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">{lesson.title}</h1>
        <p className="text-gray-500 mt-1">{lesson.summary}</p>
        {isAlreadyCompleted && (
          <span className="inline-block mt-2 text-sm bg-green-100 text-green-600 px-3 py-1 rounded-full font-medium">
            ✅ 已完成
          </span>
        )}
      </div>

      {/* Sections */}
      <div className="space-y-4 mb-8">
        {lesson.sections.map((section, i) => {
          switch (section.type) {
            case 'story':
              return (
                <div key={i} className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 p-5 animate-fade-in-up shadow-sm" style={{ animationDelay: `${i * 100}ms` }}>
                  <h3 className="font-bold text-amber-800 mb-3">{section.title}</h3>
                  <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{section.content}</div>
                </div>
              )
            case 'explanation':
              return (
                <div key={i} className="rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 p-5 animate-fade-in-up shadow-sm" style={{ animationDelay: `${i * 100}ms` }}>
                  <h3 className="font-bold text-indigo-800 mb-3">{section.title}</h3>
                  <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{section.content}</div>
                </div>
              )
            case 'examples':
              return (
                <div key={i} className="rounded-2xl bg-white border border-gray-100 p-5 animate-fade-in-up shadow-sm" style={{ animationDelay: `${i * 100}ms` }}>
                  <h3 className="font-bold text-gray-800 mb-3">{section.title}</h3>
                  <div className="space-y-3">
                    {section.examples?.map((ex, j) => (
                      <div key={j} className="p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-indigo-200 transition-all cursor-pointer" onClick={() => setShowAnalysis(showAnalysis === `${i}-${j}` ? null : `${i}-${j}`)}>
                        <p className="text-base font-medium text-gray-800">{ex.english}</p>
                        <p className="text-sm text-gray-500 mt-1">{ex.chinese}</p>
                        {ex.highlight && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            <span className="text-xs text-indigo-500 font-medium">🔦 语法点：</span>
                            {ex.highlight.split(', ').map((h, k) => (
                              <span key={k} className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-md font-mono">{h}</span>
                            ))}
                          </div>
                        )}
                        {showAnalysis === `${i}-${j}` && ex.analysis && (
                          <div className="mt-2 p-3 rounded-lg bg-indigo-50 border border-indigo-100 animate-pop-in">
                            <p className="text-sm text-indigo-700">💡 {ex.analysis}</p>
                          </div>
                        )}
                        <div className="mt-2 text-xs text-indigo-400 hover:text-indigo-600">{showAnalysis === `${i}-${j}` ? '点击收起分析' : '点击查看分析'}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            case 'pitfall':
              return section.pitfall ? (
                <div key={i} className="rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 border border-red-100 p-5 animate-fade-in-up shadow-sm" style={{ animationDelay: `${i * 100}ms` }}>
                  <h3 className="font-bold text-red-700 mb-3">⚡ {section.title}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 rounded-lg bg-red-100/50 border border-red-200">
                      <span className="text-red-500 font-bold">❌ 错误：</span> {section.pitfall.wrong}
                    </div>
                    <div className="p-3 rounded-lg bg-green-100/50 border border-green-200">
                      <span className="text-green-600 font-bold">✅ 正确：</span> {section.pitfall.right}
                    </div>
                    <p className="text-gray-600 mt-2 p-3 rounded-lg bg-white/60">💡 {section.pitfall.reason}</p>
                  </div>
                </div>
              ) : null
            case 'summary':
              return (
                <div key={i} className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 p-5 animate-fade-in-up shadow-sm" style={{ animationDelay: `${i * 100}ms` }}>
                  <h3 className="font-bold text-green-700 mb-3">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            default:
              return null
          }
        })}
      </div>

      {/* Practice Button */}
      {!showExercises && !completed && (
        <div className="text-center animate-fade-in-up">
          <button
            className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl transition-all active:scale-95"
            onClick={() => setShowExercises(true)}
          >
            {isAlreadyCompleted ? '📝 再做一次练习' : '📝 开始练习'}
          </button>
        </div>
      )}

      {/* Exercises */}
      {showExercises && !completed && lesson.exercises.length > 0 && (
        <div className="animate-fade-in-up">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            练习题 <span className="text-sm font-normal text-gray-400">({currentExerciseIndex + 1}/{lesson.exercises.length})</span>
          </h2>
          <ExerciseCard
            key={lesson.exercises[currentExerciseIndex].id}
            exercise={lesson.exercises[currentExerciseIndex]}
            onComplete={handleExerciseComplete}
          />
        </div>
      )}

      {showExercises && lesson.exercises.length === 0 && (
        <div className="text-center py-8 text-gray-400">
          <p>该课程暂无练习题</p>
        </div>
      )}

      {/* Completion */}
      {completed && (
        <div className="text-center py-10 animate-pop-in">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-gray-800">太棒了！</h2>
          <p className="text-gray-500 mt-2">你已完成「{lesson.title}」的学习</p>
          <p className="text-indigo-500 font-bold text-xl mt-2">+50 XP</p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link
              to={`/practice/${lessonId}`}
              className="px-6 py-2.5 bg-white border-2 border-indigo-200 hover:border-indigo-400 text-indigo-600 font-bold rounded-xl transition-all active:scale-95"
            >
              🔄 专项练习
            </Link>
            <Link
              to={`/books/${lessonId?.split('-')[0]}`}
              className="px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-95"
            >
              📚 继续学下一课
            </Link>
            <Link
              to="/progress"
              className="px-6 py-2.5 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl shadow-lg shadow-purple-200 transition-all active:scale-95"
            >
              📊 查看进度
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}