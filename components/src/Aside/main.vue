<template>
  <aside class="biz-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'biz-aside',
    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  }
</script>

<style scoped>
  .biz-aside {
    overflow: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0
  }
</style>
