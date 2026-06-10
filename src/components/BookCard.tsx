import { Link } from 'react-router-dom'
import type { Book } from '../types'

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link
      to={`/books/${book.id}`}
      className="group block rounded-2xl p-6 bg-white border-2 border-transparent shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
      style={{ borderColor: book.color + '20', ['--tw-shadow-color' as string]: book.color + '15' }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-sm"
          style={{ backgroundColor: book.color + '15' }}
        >
          {book.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
            {book.title}
          </h3>
          <p className="text-sm text-indigo-500 font-medium mt-0.5">{book.subtitle}</p>
          <p className="text-sm text-gray-500 mt-2 line-clamp-2">{book.description}</p>
          <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
            <span>📖 {book.lessons.length} 课</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span
          className="text-sm font-medium px-3 py-1 rounded-full"
          style={{ backgroundColor: book.color + '15', color: book.color }}
        >
          {book.subtitle}
        </span>
        <span className="text-indigo-400 group-hover:text-indigo-600 transition-colors text-sm">
          开始学习 →
        </span>
      </div>
    </Link>
  )
}