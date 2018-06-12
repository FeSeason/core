<template>
  <header class="biz-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'biz-header',
    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  }
</script>

<style scoped>
  .biz-header {
    padding: 0 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0
  }
</style>
