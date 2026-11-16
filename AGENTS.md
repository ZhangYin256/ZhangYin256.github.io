# AGENTS.md

给在本仓库中工作的编程助手（以及未来的我）的说明。

## 项目性质

个人主页，Valaxy + Yun 主题，纯静态，部署在 GitHub Pages。
仓库名 `ZhangYin256.github.io`，因此站点在域名根路径，**不需要**配置 `vite.base`。

## 目录约定

- `pages/posts/<slug>.md` — 文章，URL 为 `/posts/<slug>`
- `pages/about/` — 关于页（`index.md` 关于我，`site.md` 关于本站与许可）
- `pages/links/` — 友情链接
- `public/images/posts/<slug>/` — 文章配图，正文用 `/images/posts/<slug>/xxx.png` 引用
- `site.config.ts` — 站点信息
- `valaxy.config.ts` — 主题与框架配置
- `.github/workflows/gh-pages.yml` — 部署流水线

## frontmatter 规范

```yaml
---
title: 文章标题
date: 2026-11-16
updated: 2026-11-16
tags: [标签A, 标签B]
categories: [分类A]
draft: false
---
```

- 标题用 `title`，不在正文里再写一级标题；正文标题从 `##` 开始
- 日期用 `YYYY-MM-DD`，需要精确时间时用带偏移的 ISO 格式
- 文件名英文小写连字符，全站唯一，**发布后不允许修改**（URL 稳定性优先）

## 内容规范

- 只写标准 Markdown；如需交互才用 Vue 组件（`components/` 会自动注册）
- 不使用主题私有的标签插件语法，保证内容可整体迁移
- 引用他人内容（歌词、图片、视频）要标注来源，且不超过合理引用范围

## 禁止事项

- 不修改 `D:\Repos\Obsidian`（笔记库）中的任何文件；只读
- 不修改 Valaxy 引擎源码，不 fork 引擎，不新建主题包
- 不引入未锁定版本的依赖；升级依赖单独提交
- 不提交 `node_modules`、`dist`、`.env*`

## 改动流程

1. 改完先在本地验证：`pnpm build` 成功，且 `pnpm serve` 打开首页与文章页正常
2. 依赖升级、主题升级、内容改动分开提交
3. 推送到 `main` 后 CI 自动构建部署，确认 Actions 通过再离开

## 常用命令

```bash
pnpm dev      # 开发服务器 http://localhost:4859/
pnpm build    # SSG 构建到 dist/
pnpm serve    # 预览 dist http://localhost:4173/
pnpm new xxx  # 新建文章
```
