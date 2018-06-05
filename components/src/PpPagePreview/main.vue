<script>
export default {
  name: 'pp-page-preview',
  render: function (h) {
    return h('el-container', {
      class: ['root-container']
    }, this.renderEle(h, this.pageData))
  },
  mounted () {
    console.log('pp-preview 加载完成！')
  },
  props: {
    pageData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style scoped lang="stylus">
  .root-container
    height 100vh
</style>
