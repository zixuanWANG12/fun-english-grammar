import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">ℹ️ 关于本项目</h1>
      <p className="text-gray-500 mb-6">趣味英语语法互动学习站</p>

      <div className="space-y-6">
        {/* 关于 */}
        <section className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 animate-fade-in-up">
          <h2 className="text-lg font-bold text-gray-800 mb-3">项目介绍</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            「趣味英语语法互动学习站」是一个基于经典英语语法学习材料知识体系重新整理的互动式学习网页。
            通过游戏化的学习体验、互动练习和进度追踪，让语法学习不再枯燥。
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mt-2">
            本项目为个人学习用途，根据经典英语语法学习材料的知识体系重新整理与互动化改写。
          </p>
        </section>

        {/* 功能 */}
        <section className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 animate-fade-in-up">
          <h2 className="text-lg font-bold text-gray-800 mb-3">功能特色</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['📚', '四册系统课程', '从入门到精通的完整语法体系'],
              ['🎮', '游戏化学习', 'XP 分数、徽章、连续学习天数'],
              ['📝', '互动练习', '选择题、填空题、判断题多种题型'],
              ['📊', '进度追踪', '学习进度可视化，错题自动记录'],
              ['🎲', '随机挑战', '随时挑战随机语法难题'],
              ['🏅', '成就系统', '完成课程获得成就徽章'],
            ].map(([icon, title, desc], i) => (
              <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                <span className="text-xl shrink-0">{icon}</span>
                <div>
                  <p className="font-bold text-sm text-gray-800">{title}</p>
                  <p className="text-xs text-gray-500">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 技术栈 */}
        <section className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 animate-fade-in-up">
          <h2 className="text-lg font-bold text-gray-800 mb-3">技术栈</h2>
          <div className="flex flex-wrap gap-2">
            {[
              ['Vite', '构建工具'],
              ['React', 'UI 框架'],
              ['TypeScript', '类型安全'],
              ['Tailwind CSS', '样式框架'],
              ['React Router', '路由管理'],
              ['localStorage', '本地存储'],
            ].map(([tech, desc]) => (
              <span key={tech} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-600 text-sm">
                {tech}
                <span className="text-indigo-400 text-xs">· {desc}</span>
              </span>
            ))}
          </div>
        </section>

        {/* 版权 */}
        <section className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 animate-fade-in-up">
          <h2 className="text-lg font-bold text-gray-800 mb-3">版权说明</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            本项目为个人学习用途，根据经典英语语法学习材料的知识体系重新整理与互动化改写。
            所有讲解内容、练习题、例句均为原创或基于语法知识体系重新编写，不直接复制原书内容。
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © {new Date().getFullYear()} · 开源项目 · MIT License
          </p>
        </section>

        <div className="text-center pt-4">
          <Link
            to="/books"
            className="inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl transition-all active:scale-95"
          >
            📚 开始学习
          </Link>
        </div>
      </div>
    </div>
  )
}