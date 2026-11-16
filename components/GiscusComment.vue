<script lang="ts" setup>
/**
 * giscus 评论
 * 只有 config/integrations.ts 里的 enable 为 true 且填好两个 ID 时才会加载，
 * 否则渲染为空，不会留下空的评论框。
 */
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { giscus } from '../config/integrations'

const container = ref<HTMLElement>()
const ready = computed(() => Boolean(giscus.enable && giscus.repoId && giscus.categoryId))

let observer: MutationObserver | undefined

function currentTheme() {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

/** 站点切换明暗模式时同步 giscus 的配色 */
function syncTheme() {
  const iframe = container.value?.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
  if (!iframe?.contentWindow)
    return
  iframe.contentWindow.postMessage(
    { giscus: { setConfig: { theme: currentTheme() } } },
    'https://giscus.app',
  )
}

onMounted(() => {
  if (!ready.value || !container.value)
    return

  // 官方脚本会挂到它自己的父节点上，所以必须放进这个容器里
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'
  script.setAttribute('data-repo', giscus.repo)
  script.setAttribute('data-repo-id', giscus.repoId)
  script.setAttribute('data-category', giscus.category)
  script.setAttribute('data-category-id', giscus.categoryId)
  script.setAttribute('data-mapping', giscus.mapping)
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', currentTheme())
  script.setAttribute('data-lang', giscus.lang)
  script.setAttribute('data-loading', 'lazy')
  container.value.appendChild(script)

  observer = new MutationObserver(syncTheme)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div v-if="ready" ref="container" class="giscus-container mt-4" />
</template>
