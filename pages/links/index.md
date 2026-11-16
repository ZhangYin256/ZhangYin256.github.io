---
title: 友情链接
aside: false
keywords: 链接
description: 一些常去的地方
links:
  - url: https://valaxy.site/
    avatar: https://valaxy.site/favicon.svg
    name: Valaxy
    blog: Valaxy 文档
    desc: 本站使用的静态博客框架
    color: "#3E83E1"
  - url: https://github.com/ZhangYin256
    avatar: https://github.com/ZhangYin256.png
    name: ZhangYin256
    blog: GitHub
    desc: 我的 GitHub，代码都在这儿
    color: "#6e5494"
  - url: https://www.seu.edu.cn/
    avatar: https://www.seu.edu.cn/favicon.ico
    name: 东南大学
    blog: 东南大学
    desc: 止于至善
    color: "#0e4c92"
random: false
---

<YunLinks :links="frontmatter.links" :random="frontmatter.random" />
