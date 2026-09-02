# Home Page

基于 [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) 的个人主页（Next.js 12 + Tailwind CSS）。

## 环境要求

- Node.js 18+（已在 v22 上验证可用）
- npm

## 本地运行

```bash
# 1. 安装依赖（老项目存在 peer 依赖冲突，需要加 --legacy-peer-deps）
npm install --legacy-peer-deps

# 2. 启动开发服务器
npm run dev
```

启动后浏览器访问 <http://localhost:3000>，修改代码会自动热更新。

## 其他常用命令

| 命令            | 说明                                   |
| --------------- | -------------------------------------- |
| `npm run dev`   | 启动开发服务器（端口 3000）            |
| `npm start`     | 开发服务器 + 监听 `data/` 目录内容变化 |
| `npm run build` | 构建生产版本并生成 sitemap             |
| `npm run serve` | 以生产模式启动（需先 build）           |
| `npm run lint`  | 代码检查并自动修复                     |

## 内容修改

- 博客文章：`data/blog/`（Markdown / MDX）
- 项目列表：`data/projectsData.js`
- 发表论文：`data/publicationsData.js`
- 站点信息：`data/siteMetadata.js`
- 导航栏：`data/headerNavLinks.js`
- 个人介绍：`data/authors/default.md`
