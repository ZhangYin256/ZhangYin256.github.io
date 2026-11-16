import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// 用到的图标需要加入 safelist，否则 UnoCSS 不会生成对应样式
const safelist = [
  'i-ri-home-line',
  'i-ri-archive-line',
  'i-ri-link',
  'i-ri-user-line',
]

/**
 * 主题与框架配置
 * @see https://valaxy.site/zh/guide/config/
 */
export default defineValaxyConfig<UserThemeConfig>({
  theme: 'yun',

  themeConfig: {
    type: 'nimbo',

    colors: {
      primary: '#3E83E1',
    },

    banner: {
      enable: true,
      title: '彰隐',
      grid: {
        enable: true,
        fade: true,
      },
    },

    // 社交图标下方的页面入口
    pages: [
      {
        name: '关于',
        url: '/about/',
        icon: 'i-ri-user-line',
        color: 'dodgerblue',
      },
      {
        name: '友情链接',
        url: '/links/',
        icon: 'i-ri-link',
        color: 'dodgerblue',
      },
    ],

    notice: {
      enable: false,
      content: '',
    },

    bg_image: {
      enable: false,
    },

    say: {
      enable: false,
      api: '',
      hitokoto: {
        enable: false,
        api: '',
      },
    },

    fireworks: {
      enable: false,
    },

    footer: {
      since: 2026,
      powered: true,
      // 页脚中间的图标指向站点首页
      icon: {
        url: '/',
        title: '回到首页',
      },
      beian: {
        enable: false,
        icp: '',
      },
    },

    // 页脚「404」页面反馈入口
    notFound: {
      issueLink: 'https://github.com/ZhangYin256/zhangyin256.github.io/issues/new',
    },
  },

  unocss: { safelist },
})
