<template>
  <footer class="biz-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'biz-footer',
    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  }
</script>

<style scoped>
  .biz-footer {
    padding: 0 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0
  }
</style>
