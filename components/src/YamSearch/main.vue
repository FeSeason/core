<template>
  <yam-search
    placeholder="请输入..."
    :is-clear-after-search="clearAS"
    @search="handleSearch"
  >
  </yam-search>
</template>

<script>
import { YamSearch } from '@xhs/yam-layout'
export default {
  name: 'ss-search',
  des: '搜索框',
  props: {
    'placeholder': {
      type: String
    },
    'clearAS': {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleSearch (keyword) {
      alert(`搜索：${keyword}`)
    }
  },
  components: {
    YamSearch
  }
}
</script>
