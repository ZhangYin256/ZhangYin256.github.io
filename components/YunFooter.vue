<script lang="ts" setup>
/**
 * 覆盖主题页脚：外观保持原样，只在配置了 token 之后异步注入统计脚本。
 * 脚本 defer 加载，不阻塞首屏。
 */
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'
import { onMounted } from 'vue'
import { cloudflareAnalytics } from '../config/integrations'

onMounted(() => {
  if (!cloudflareAnalytics.enable || !cloudflareAnalytics.token)
    return

  const script = document.createElement('script')
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js'
  script.defer = true
  script.setAttribute('data-cf-beacon', JSON.stringify({ token: cloudflareAnalytics.token }))
  document.head.appendChild(script)
})
</script>

<template>
  <YunFooter />
</template>
