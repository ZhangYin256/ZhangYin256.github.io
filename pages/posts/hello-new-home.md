---
title: 用 Valaxy 搭一个只写 Markdown 的个人主页
date: 2026-11-16
updated: 2026-11-16
categories:
  - 技术
tags:
  - Valaxy
  - 建站
  - GitHub Pages
top: 1
---

这篇算开张说明：这个站点是怎么来的，以及以后打算怎么用它。

## 目标只有一个

我想要的不是“又一个博客系统”，而是**上线之后，写东西只剩下两个动作：写 Markdown、提交代码**。构建、部署、索引、字数与阅读时长、RSS 和 sitemap，全都该自动完成。

这条要求看起来平常，但它直接筛掉了不少方案：任何需要我登录后台、点发布、管数据库的东西，都不合适。

## 技术选型

| 项目 | 选择 |
| --- | --- |
| 框架 | [Valaxy](https://valaxy.site/)（基于 Vite + Vue） |
| 主题 | [Yun](https://valaxy.site/zh/themes/yun) |
| 托管 | GitHub Pages |
| 仓库 | `ZhangYin256.github.io`，公开 |
| 运行时 | Node ≥ 22.12 |
| 包管理 | pnpm |
| 构建 | `valaxy build --ssg` |

选 Valaxy 的理由很实际：它把 Markdown 写得舒服（Vue 组件可以嵌进正文）、主题够用、产物是纯静态的每路由 HTML。而仓库名为 `ZhangYin256.github.io` 的好处是站点直接落在根路径，不需要额外配置 `base`。

## 内容约定

```text
pages/posts/<slug>.md
public/images/posts/<slug>/
```

- slug 用英文小写连字符，全站唯一，发布后不再改，保证 URL 稳定
- 文章 URL 是 `/posts/<slug>`
- frontmatter 固定这几个字段：

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

正文只写标准 Markdown，不引入主题私有的标签语法——万一以后要整体迁移，内容不该被绑死。

## 部署流水线

推送到 `main` 分支后，GitHub Actions 做这几件事：

```text
pnpm/action-setup
→ actions/setup-node（Node LTS）
→ pnpm install
→ valaxy build --ssg
→ actions/configure-pages
→ actions/upload-pages-artifact（dist）
→ actions/deploy-pages
```

权限只给 `contents: read`、`pages: write`、`id-token: write`，不引入任何自有后端——站点是纯静态文件，没有服务器可以被打。

## 许可

- 文章文字：**CC BY-NC-SA 4.0**。转载要保留作者和出处，不能拿去商用，衍生作品保持同样的开放程度。
- 文中示例代码：**MIT**，与文字协议分别声明。

分成两套协议的原因很简单：文字被无出处搬运很讨厌，代码被 MIT 用起来则完全没问题。

## 下一步

- 评论：giscus（数据存仓库 Discussions，不需要后端）
- 友链、关于页收尾
- 访问统计：Cloudflare Web Analytics，无 Cookie；不可用时降级到移除统计，不阻塞上线
- 音乐播放器放到 MVP 之后再说

站点上的文章都来自我的笔记库，按主题整理、改写后发布；笔记本身保持原样，这里只是它的一个出口。

就这样，开工。
