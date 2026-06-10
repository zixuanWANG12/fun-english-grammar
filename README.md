# 🎮 趣味英语语法互动学习站

> 把枯燥语法变成闯关游戏

一个基于 Vite + React + TypeScript + Tailwind CSS 开发的互动式英语语法学习网页，可部署到 GitHub Pages。

## 功能特色

- 📚 **四册系统课程** — 从入门到精通的完整语法体系
- 🎮 **游戏化学习** — XP 分数、徽章、连续学习天数
- 📝 **互动练习** — 选择题、填空题、判断题多种题型
- 📊 **进度追踪** — 学习进度可视化，错题自动记录
- 🎲 **随机挑战** — 随时挑战随机语法难题
- 🏅 **成就系统** — 完成课程获得成就徽章

## 技术栈

| 技术 | 用途 |
|------|------|
| Vite | 构建工具 |
| React 19 | UI 框架 |
| TypeScript | 类型安全 |
| Tailwind CSS 4 | 样式框架 |
| React Router 6 | 路由管理 |
| localStorage | 本地存储 |

## 快速开始

### 1. 安装依赖

```bash
cd fun-english-grammar
npm install
```

### 2. 本地开发

```bash
npm run dev
```

打开浏览器访问控制台显示的地址（默认 http://localhost:5173）

### 3. 构建项目

```bash
npm run build
```

构建产物在 `dist/` 目录。

## 部署到 GitHub Pages

### 前提条件

已创建 GitHub 仓库 `zixuanWANG12/fun-english-grammar`，且代码已推送到 `main` 分支。

### 方法一：一键部署（推荐）

```bash
npm run deploy
```

这会自动执行 `npm run build` 然后将 `dist/` 目录推送到 `gh-pages` 分支。

### 方法二：GitHub Actions 自动部署

在仓库 `.github/workflows/deploy.yml` 中配置：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v3
      - uses: actions/upload-pages-artifact@v2
        with:
          path: dist
      - id: deployment
        uses: actions/deploy-pages@v2
```

然后在 GitHub 仓库中：
1. **Settings → Pages**
2. **Source** 选择 **GitHub Actions**

### 方法三：手动构建部署

```bash
npm run build
npx gh-pages -d dist
```

## 访问地址

部署成功后访问：

```
https://zixuanwang12.github.io/fun-english-grammar/
```

## 如何继续添加课程内容

所有课程数据在 `src/data/books.ts` 中管理。

### 添加新课程到现有册

在对应 `book.lessons` 数组中添加新 lesson：

```ts
{
  id: 'book1-lesson4',
  title: '冠词的用法',
  tags: ['冠词', '入门'],
  level: 1,
  estimatedMinutes: 10,
  summary: '冠词 a/an/the 的用法',
  sections: [
    {
      type: 'story',       // 故事导入
      title: '📖 故事时间',
      content: '...'
    },
    {
      type: 'explanation', // 语法解释
      title: '📝 语法小课堂',
      content: '...'
    },
    {
      type: 'examples',    // 例句
      title: '🔍 看例句',
      examples: [{ english: '...', chinese: '...', highlight: '...', analysis: '...' }]
    },
    {
      type: 'pitfall',     // 易错提醒
      title: '⚡ 小心坑！',
      pitfall: { wrong: '...', right: '...', reason: '...' }
    },
    {
      type: 'summary',     // 课后小结
      title: '✅ 课后小结',
      items: ['重点1', '重点2']
    }
  ],
  exercises: [
    {
      id: 'e1-4-1',
      type: 'choice',      // 'choice' | 'blank' | 'trueFalse'
      question: '...',
      options: ['A', 'B', 'C', 'D'],
      answer: 'A',
      explanation: '...'
    }
  ]
}
```

### 添加完整课程数据

参考第 1 册的 3 节示例课程格式。课程内容模块：
- **sections**: story → explanation → examples(3条) → pitfall → summary
- **exercises**: 至少 5 道题，混合 choice/blank/trueFalse 三种题型

### 添加新册

在 `books` 数组末尾添加新 book 对象即可。

## 项目结构

```
fun-english-grammar/
├── public/
├── src/
│   ├── components/     # 可复用组件
│   │   ├── BookCard.tsx
│   │   ├── ExerciseCard.tsx
│   │   ├── Layout.tsx
│   │   ├── LessonCard.tsx
│   │   └── ProgressBar.tsx
│   ├── pages/          # 页面
│   │   ├── HomePage.tsx
│   │   ├── BooksPage.tsx
│   │   ├── BookDetailPage.tsx
│   │   ├── LessonPage.tsx
│   │   ├── PracticePage.tsx
│   │   ├── ProgressPage.tsx
│   │   └── AboutPage.tsx
│   ├── data/books.ts   # 课程数据
│   ├── types/index.ts  # 类型定义
│   ├── utils/progress.ts # 进度工具 (localStorage)
│   ├── index.css       # Tailwind 样式 + 动画
│   ├── main.tsx        # 入口文件
│   └── App.tsx         # 路由配置
├── vite.config.ts      # Vite 配置 (base: /fun-english-grammar/)
├── package.json
└── README.md
```

## 页面路由

| 路径 | 页面 |
|------|------|
| `/` | 首页 |
| `/books` | 全部课程列表 |
| `/books/:bookId` | 某一册的课程目录 |
| `/lesson/:lessonId` | 课程学习页 |
| `/practice/:lessonId` | 专项练习页 |
| `/progress` | 学习进度页 |
| `/about` | 关于项目 |

## 游戏化系统

- **XP 分数**: 每完成一节课 +50 XP
- **连续学习**: 每天学习保持连续天数
- **成就徽章**:
  - 🌱 初次学习 — 完成第一节课
  - 🔥 连续三天 — 连续学习 3 天
  - ⭐ 一周达人 — 连续学习 7 天
  - 📚 勤奋学员 — 完成 5 节课
  - ⚔️ 语法勇士 — 完成 10 节课
- **错题本**: 自动记录答错的题目

## 版权说明

本项目为个人学习用途，根据经典英语语法学习材料的知识体系重新整理与互动化改写。所有讲解内容、练习题、例句均为原创或基于语法知识体系重新编写，不直接复制原书内容。