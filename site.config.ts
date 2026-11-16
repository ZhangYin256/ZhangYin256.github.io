import { defineSiteConfig } from 'valaxy'

/**
 * 站点信息
 * @see https://valaxy.site/zh/guide/config/
 */
export default defineSiteConfig({
  // 正式部署地址，用于 sitemap、RSS 与 llms.txt
  url: 'https://zhangyin256.github.io/',
  lang: 'zh-CN',
  timezone: 'Asia/Shanghai',
  title: '彰隐的个人主页',
  subtitle: '旅行、声乐与代码',
  description: '东南大学软件工程在读。写点旅行、声乐、健身，以及折腾代码时踩到的坑。',
  keywords: ['彰隐', '东南大学', '软件工程', '旅行', '声乐', '博客'],
  favicon: '/favicon.svg',

  author: {
    name: '彰隐',
    avatar: '/avatar.svg',
    email: 'zyl_zzy@outlook.com',
    link: 'https://github.com/ZhangYin256',
    status: {
      emoji: '🌱',
      message: '慢慢写，慢慢记',
    },
  },

  // 文章文末的版权声明
  license: {
    enabled: true,
    language: 'zh-CN',
    type: 'by-nc-sa',
  },

  // 首页卡片摘要：没有手动摘要时自动截取正文开头
  excerpt: {
    type: 'html',
    auto: true,
    length: 170,
  },

  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/ZhangYin256',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'Email',
      link: 'mailto:zyl_zzy@outlook.com',
      icon: 'i-ri-mail-line',
      color: '#1e90ff',
    },
  ],

  // 构建期生成本地索引，客户端检索，不依赖外部搜索服务
  search: {
    enable: true,
  },

  sponsor: {
    enable: false,
  },

  // 由 `pnpm build` 生成 dist/llms.txt 与文章 Markdown
  llms: {
    enable: true,
  },
})
