---
title: 用 Valaxy 搭一个个人主页
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

> 使用 Deepseek V4.1 Flash 生成文章骨架，人工填充血肉。

庆祝本站在我又一个生日到来之前开张了。

Happy Birthday Robert!

## 为什么要建站

初三时为了记录与朋友的技术交流，写了一薄本的《闲事杂谈》。

高中仍以《闲事杂谈》为名，记录同学以及老师的名人名言。

大学期间几乎不带额外的本子，用高强度的QQ空间代偿，但其并不是发布长文本与图文混排文章的理想选择。

建站的想法一直在更迭，最近世俗上的事务姑且算尘埃落定，参考了朋友们的建站方案，选了一个比较契合当前使用场景且免费的方案。

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

这个选型基本复刻自[这位朋友的博客](https://烫烫烫的锟斤拷.top/)。

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

正文只写标准 Markdown，便于迁移。

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

权限只给 `contents: read`、`pages: write`、`id-token: write`，不引入任何自有后端——站点是纯静态文件，没有服务器可以被打（废话）。

## 许可

- 文章文字：**CC BY-NC-SA 4.0**。转载要保留作者和出处，不能拿去商用，衍生作品保持同样的开放程度。
- 文中示例代码：**MIT**，与文字协议分别声明。

分成两套协议的原因很简单：文字被无出处搬运很讨厌，代码被 MIT 用起来则完全没问题。

## 下一步

- 评论：giscus（数据存仓库 Discussions，不需要后端）
- 友链、关于页收尾
- 访问统计：Cloudflare Web Analytics，无 Cookie；不可用时降级到移除统计，不阻塞上线
- 音乐播放器放到 MVP 之后再说

就这样，开工。
