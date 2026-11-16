# 彰隐的个人主页

基于 [Valaxy](https://valaxy.site/) + [Yun](https://valaxy.site/zh/themes/yun) 主题的纯静态个人主页，
通过 GitHub Actions 自动构建并部署到 GitHub Pages。

- 线上地址：<https://zhangyin256.github.io/>
- 仓库：<https://github.com/ZhangYin256/ZhangYin256.github.io>

## 写作流程

只有两步：**写 Markdown → 提交到 `main`**。构建、部署、RSS、sitemap 全部由 CI 完成。

```bash
pnpm install          # 首次
pnpm dev              # 本地预览 http://localhost:4859/
pnpm build            # 构建到 dist/
pnpm serve            # 预览构建产物 http://localhost:4173/
```

## 目录结构

```text
pages/
  posts/<slug>.md          文章（URL: /posts/<slug>）
  about/index.md           关于我
  about/site.md            关于本站与许可协议
  links/index.md           友情链接
  archives/ categories/ tags/  归档、分类、标签（主题内置）
 404.md                    404 页面
public/
  avatar.svg               头像
  favicon.svg              站点图标
  images/posts/<slug>/     文章配图
site.config.ts             站点信息（标题、作者、URL、社交链接）
valaxy.config.ts           主题与框架配置
.github/workflows/gh-pages.yml   GitHub Pages 部署流水线
```

## 文章约定

frontmatter 固定使用以下字段：

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

- 文件名即 URL 的一部分：英文小写连字符，全站唯一，发布后不再修改
- 正文只写标准 Markdown，不使用主题私有标签语法，保证内容可迁移
- 配图放在 `public/images/posts/<slug>/`，正文用 `/images/posts/<slug>/xxx.png` 引用

## 首次部署

本目录已初始化为 Git 仓库并完成首次提交（分支 `main`）。剩下的只有推送和打开 Pages：

1. 在 GitHub 新建公开仓库 `ZhangYin256.github.io`（不要勾选初始化 README）。
2. 推送本项目的 `main` 分支：

   ```bash
   git remote add origin https://github.com/ZhangYin256/ZhangYin256.github.io.git
   git push -u origin main
   ```

3. 打开仓库 **Settings → Pages**，把 **Source** 设为 **GitHub Actions**。
4. 等待 Actions 中的 `GitHub Pages` 工作流跑完，访问 <https://zhangyin256.github.io/>。

仓库名为 `ZhangYin256.github.io`，站点部署在域名根路径 `/`，因此无需配置 Vite 的 `base`。
若改用其它仓库名（项目站点），需在 `site.config.ts` 之外，给 `valaxy.config.ts` 加上：

```ts
vite: {
  base: '/<仓库名>/',
},
```

并把 `site.config.ts` 的 `url` 改为 `https://zhangyin256.github.io/<仓库名>/`。

## 内容来源

站内文章整理自个人 Obsidian 笔记库（`D:\Repos\Obsidian`）。整理时按主题挑选、
合并碎片、补齐上下文与标题结构后发布；**原始笔记目录不做任何改动**。
课程与内部资料一律不发布，因此不在此列。

已发布文章的来源对照：

| 站点文章 | 来源笔记 |
| --- | --- |
| 无锡旅行札记 | `闲事杂谈/无锡旅行札记.md` |
| 如何一次性掌握所有编程语言 | `技术/如何一次性掌握所有编程语言.md` |
| 开始菜单搜索卡死：一次 Windows 排障记录 | `疑难杂症/开始菜单搜索卡死.md` + `疑难杂症/电脑无端黑屏重启.md` |
| 三分化训练笔记 | `生活/健身.md` |
| 用 Valaxy 搭一个只写 Markdown 的个人主页 | `项目/个人网站/需求清单.md` |
| 关于我 | `文档/基本信息.md` + `文档/个人陈述.md` |

笔记中没有写下确切日期的，发表日期取自源文件的修改时间，可按需在 frontmatter 中调整。

## 许可

- 文章文字：[CC BY-NC-SA 4.0](./LICENSE)
- 示例代码：[MIT](./LICENSE-CODE)
