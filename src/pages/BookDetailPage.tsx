import { useParams, Link } from 'react-router-dom'
import books from '../data/books'
import LessonCard from '../components/LessonCard'
import ProgressBar from '../components/ProgressBar'

export default function BookDetailPage() {
  const { bookId } = useParams<{ bookId: string }>()
  const book = books.find(b => b.id === bookId)

  if (!book) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">😅</div>
        <h2 className="text-xl font-bold text-gray-800">找不到这册书</h2>
        <Link to="/books" className="mt-4 inline-block text-indigo-500 hover:text-indigo-600">
          ← 返回课程列表
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <Link to="/books" className="text-sm text-indigo-500 hover:text-indigo-600 mb-4 inline-block">
        ← 返回全部课程
      </Link>
      <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-sm"
          style={{ backgroundColor: book.color + '15' }}
        >
          {book.emoji}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{book.title}</h1>
          <p className="text-indigo-500 font-medium">{book.subtitle}</p>
          <p className="text-sm text-gray-500 mt-1">{book.description}</p>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6 animate-fade-in-up">
        <ProgressBar bookId={book.id} total={book.lessons.length} />
      </div>

      {/* Lesson list */}
      <div className="space-y-3">
        {book.lessons.map((lesson, i) => (
          <LessonCard key={lesson.id} lesson={lesson} index={i} />
        ))}
      </div>
    </div>
  )
}