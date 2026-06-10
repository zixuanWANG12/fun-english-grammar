import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import BooksPage from './pages/BooksPage'
import BookDetailPage from './pages/BookDetailPage'
import LessonPage from './pages/LessonPage'
import PracticePage from './pages/PracticePage'
import ProgressPage from './pages/ProgressPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:bookId" element={<BookDetailPage />} />
        <Route path="/lesson/:lessonId" element={<LessonPage />} />
        <Route path="/practice/:lessonId" element={<PracticePage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={
          <div className="text-center py-20">
            <div className="text-6xl mb-4">😅</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">页面不见了</h2>
            <p className="text-gray-500 mb-4">你访问的页面不存在</p>
            <a href="/fun-english-grammar/" className="text-indigo-500 hover:text-indigo-600 font-medium">← 返回首页</a>
          </div>
        } />
      </Routes>
    </Layout>
  )
}