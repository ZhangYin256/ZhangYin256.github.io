<script lang="ts" setup>
/**
 * 覆盖主题的评论卡片：保留主题原有外观，把 giscus 放进它的插槽里。
 * 未配置 giscus 时卡片不会渲染（由 siteConfig.comment.enable 控制）。
 */
import YunComment from 'valaxy-theme-yun/components/YunComment.vue'
</script>

<template>
  <YunComment>
    <GiscusComment />
  </YunComment>
</template>
