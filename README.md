# 学术风格博客主题

一个基于 Astro 的静态博客主题，采用学术目录风格设计，适合研究者、学者和技术写作者展示论文、书籍和博客文章。

## 设计特点

- **奶油色背景** (#F6F1DE) - 护眼舒适的阅读体验
- **三色条带编号卡片** - 独特的视觉识别系统
- **左侧标题导航 (TOC)** - 文章内快速跳转
- **垂直分割线装饰** - 学术目录风格
- **四种内容类型** - 博客、书籍、论文分享、发表论文

## 快速开始

```sh
# 克隆项目
git clone <your-repo-url>
cd Blog

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:4321 查看站点。

## 主题复用指南

### 1. 修改个人信息

编辑 `src/config/site.ts` 文件：

```typescript
export const profile = {
  // 姓名
  name: "你的名字",

  // 职位/头衔
  title: "PhD Student @ 你的学校",

  // 个人简介（支持多行）
  bio: `你的个人简介...
研究兴趣...`,

  // 社交媒体链接（可选）
  links: {
    github: "https://github.com/yourname",
    email: "mailto:your.email@example.com",
  },
} as const;
```

### 2. 添加内容

#### 博客文章

在 `src/content/blog/` 目录下创建 `.md` 或 `.mdx` 文件：

```markdown
---
title: "文章标题"
description: "文章描述"
date: 2024-01-15
repo: "相关仓库（可选）"
---

文章内容...
```

#### 书籍/教程章节

在 `src/content/books/` 目录下按书名组织文件夹：

```markdown
---
title: "章节标题"
description: "章节描述"
bookTitle: "书籍名称"
bookOrder: 1
---

章节内容...
```

#### 论文分享

在 `src/content/paper-reviews/` 目录下创建：

```markdown
---
title: "论文标题"
authors: ["作者1", "作者2"]
venue: "会议/期刊名称"
year: 2024
link: "论文链接（可选）"
---

阅读笔记...
```

#### 发表论文

在 `src/content/publications/` 目录下创建：

```markdown
---
title: "论文标题"
authors: ["你的名字", "合作者"]
venue: "会议/期刊名称"
year: 2024
link: "论文链接"
---

（可选）补充说明...
```

### 3. 自定义样式

#### 修改主题色

编辑 `src/styles/global.css`：

```css
@theme {
  --color-cream: #F6F1DE;      /* 背景色 */
  --color-coffee: #463325;      /* 主文字色 */
  --color-orange: #E58E35;      /* 强调色 */
  --color-sage: #A9C6B8;        /* 装饰条带 */
  --color-mustard: #CDB245;     /* 装饰条带 */
  --color-dark-strip: #752A18;  /* 装饰条带 */
}
```

#### 修改字体

主题使用 Crimson Pro (衬线体) 和 JetBrains Mono (等宽体)。

### 4. 配置站点元数据

编辑 `src/config/site.ts` 中的 `site` 对象：

```typescript
export const site = {
  title: "你的站点标题",
  description: "站点描述",
  lang: "zh-CN",
} as const;
```

## 项目结构

```
/
├── src/
│   ├── components/          # 组件
│   │   ├── AutoCodeDiff.astro    # 代码差异展示
│   │   └── TableOfContents.astro # 标题导航
│   ├── config/             # 配置文件
│   │   └── site.ts         # 个人信息和站点配置
│   ├── content/            # 内容集合
│   │   ├── blog/          # 博客文章
│   │   ├── books/         # 书籍/教程
│   │   ├── paper-reviews/ # 论文分享
│   │   └── publications/  # 发表论文
│   ├── layouts/           # 布局模板
│   ├── pages/             # 页面路由
│   └── styles/            # 全局样式
├── package.json
├── astro.config.mjs
└── README.md
```

## 使用 AutoCodeDiff 组件

在 `.mdx` 文件中使用 `AutoCodeDiff` 组件展示代码差异。

### 基础用法

```mdx
---
title: "博客标题"
repo: "owner/repo"
chapters:
  - commit: "旧提交"
    label: "第一章"
  - commit: "新提交"
    label: "第二章"
---

import AutoCodeDiff from '../../components/AutoCodeDiff.astro';

<AutoCodeDiff
  repo={frontmatter.repo}
  old={frontmatter.chapters[0].commit}
  new={frontmatter.chapters[1].commit}
  files={["src/main.cc"]}
/>
```

### API

| 属性 | 类型 | 说明 |
|------|------|------|
| `repo` | `string` | GitHub 仓库，格式：`owner/repo` |
| `old` | `string` | 旧版本提交 SHA |
| `new` | `string` | 新版本提交 SHA |
| `files` | `string[] \| FileMapping[]` | 文件路径或文件映射 |

### 文件映射

支持文件拆分/重命名场景：

```mdx
<AutoCodeDiff
  repo="owner/repo"
  old="abc123"
  new="def456"
  files={[
    { old: "utils.c", new: "math.c" },
    { old: "utils.c", new: "string.c" }
  ]}
/>
```

### Front Matter 字段

- `title`: 文章标题
- `description`: 文章描述
- `repo`: GitHub 仓库地址（`owner/repo` 格式）
- `chapters`: 章节数组，每个章节包含：
  - `commit`: 提交 SHA
  - `label`: 章节显示标签

## 部署

```sh
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

构建输出在 `dist/` 目录。

### 部署到 GitHub Pages

1. 在 GitHub 仓库设置中启用 Pages
2. 选择 GitHub Actions 作为源
3. 使用以下工作流文件 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 技术栈

- **框架**: [Astro](https://astro.build) - 快速静态站点生成
- **样式**: [Tailwind CSS](https://tailwindcss.com) - 实用优先的 CSS 框架
- **字体**: Crimson Pro (衬线体), JetBrains Mono (等宽体)
- **语法高亮**: Shiki

## 许可证

MIT License
