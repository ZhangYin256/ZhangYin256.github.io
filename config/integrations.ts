/**
 * 第三方服务配置
 *
 * 评论与统计默认都是关闭的：代码已经接好，填上 ID / token 并把 enable 改成 true 即可生效，
 * 关闭状态下不会产生任何多余的请求，也不会多出空的卡片。
 */

/**
 * 评论：giscus，数据存放在仓库的 GitHub Discussions 里，不需要自有后端。
 *
 * 启用步骤：
 * 1. 仓库 Settings → General → Features，勾选 Discussions
 * 2. 在 Discussions 里新建一个分类，类型选 Announcements（或使用已有的）
 * 3. 打开 https://giscus.app，填入仓库名，选好分类，复制生成的 repoId 与 categoryId
 * 4. 把两个 ID 填到下面，enable 改为 true
 */
export const giscus = {
  enable: false,
  /** 仓库全名 owner/repo */
  repo: 'ZhangYin256/zhangyin256.github.io',
  /** 从 giscus.app 复制 */
  repoId: '',
  /** 讨论分类名，需与 giscus.app 上选的保持一致 */
  category: 'Announcements',
  /** 从 giscus.app 复制 */
  categoryId: '',
  /** 按路径匹配：pathname 让每篇文章各自对应一个讨论串 */
  mapping: 'pathname',
  lang: 'zh-CN',
}

/**
 * 访问统计：Cloudflare Web Analytics，无 Cookie，不采集个人数据。
 *
 * 启用步骤：
 * 1. Cloudflare 控制台 → Web Analytics → 添加站点（填 zhangyin256.github.io）
 * 2. 复制生成的 token
 * 3. 填到下面，enable 改为 true
 *
 * 脚本异步注入，不阻塞首屏渲染；取不到时页面照常显示，只是没有统计。
 */
export const cloudflareAnalytics = {
  enable: false,
  token: '',
}
