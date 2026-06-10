import { Link } from 'react-router-dom'
import books from '../data/books'

export default function BooksPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">📚 全部课程</h1>
      <p className="text-gray-500 mb-6">选择一册开始你的语法冒险</p>

      <div className="space-y-4">
        {books.map((book, i) => (
          <Link
            key={book.id}
            to={`/books/${book.id}`}
            className="group block rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all p-5 animate-fade-in-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                style={{ backgroundColor: book.color + '15' }}
              >
                {book.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {book.title}
                </h2>
                <p className="text-sm text-indigo-500 font-medium">{book.subtitle}</p>
                <p className="text-sm text-gray-500 mt-1">{book.description}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-2xl font-bold text-indigo-500">{book.lessons.length}</div>
                <div className="text-xs text-gray-400">课时</div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex gap-2">
                {book.lessons.slice(0, 3).map(l => (
                  <span key={l.id} className="text-xs bg-gray-50 text-gray-400 px-2 py-0.5 rounded-md">
                    {l.tags[0]}
                  </span>
                ))}
                {book.lessons.length > 3 && (
                  <span className="text-xs text-gray-300">+{book.lessons.length - 3}</span>
                )}
              </div>
              <span className="text-indigo-400 group-hover:text-indigo-600 text-sm">查看详情 →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}