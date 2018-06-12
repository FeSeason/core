<script>
export default {
  name: 'biz-page',
  render: function (h) {
    return h('biz-container', {
      class: ['root-container']
    }, this.renderEle(h, this.pageData))
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
