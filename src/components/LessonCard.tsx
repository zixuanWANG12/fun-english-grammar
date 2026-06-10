import { Link } from 'react-router-dom'
import type { Lesson } from '../types'
import { getProgress } from '../utils/progress'

export default function LessonCard({
  lesson,
  index,
}: {
  lesson: Lesson
  index: number
}) {
  const progress = getProgress()
  const isCompleted = progress.completedLessons.includes(lesson.id)

  return (
    <div
      className="group rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up p-5"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-4">
        {/* Number badge */}
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold shrink-0 ${
            isCompleted
              ? 'bg-green-100 text-green-600'
              : 'bg-indigo-100 text-indigo-600'
          }`}
        >
          {isCompleted ? '✅' : index + 1}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
              {lesson.title}
            </h3>
            {isCompleted && (
              <span className="shrink-0 text-xs bg-green-100 text-green-600 px-2.5 py-0.5 rounded-full font-medium">
                已完成
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">{lesson.summary}</p>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              {'⭐'.repeat(lesson.level)}
            </span>
            <span>⏱ {lesson.estimatedMinutes} 分钟</span>
            {lesson.tags.map(tag => (
              <span
                key={tag}
                className="bg-gray-50 text-gray-500 px-2 py-0.5 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <Link
          to={`/lesson/${lesson.id}`}
          className="shrink-0 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-200 active:scale-95"
        >
          {isCompleted ? '复习' : '开始'}
        </Link>
      </div>
    </div>
  )
}