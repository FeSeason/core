<template>
  <yam-button
    :action="action"
    :icon="icon"
    :modifier="modifier"
    :disabled="disabled"
    @click="click"
  >{{text}}</yam-button>
</template>
<script>
import { YamButton } from '@xhs/yam-layout'
export default {
  name: 'biz-button',
  des: '按钮',
  props: {
    text: {
      des: '按钮文案',
      type: String,
      default: '点击'
    },
    type: {
      des: '按钮边框样式',
      type: String,
      default: 'default',
      options: [{
        name: '填充型',
        value: 'default'
      }, {
        name: '边框型',
        value: 'outline'
      }, {
        name: '链接型',
        value: 'link'
      }, {
        name: '微小型',
        value: 'micro'
      }]
    },
    modifier: {
      des: '按钮常用颜色',
      type: String,
      default: '',
      options: [{
        name: '蓝色（表示重要）',
        value: 'primary'
      }, {
        name: '默认（表示普通）',
        value: 'default'
      }, {
        name: '绿色（表示成功）',
        value: 'success'
      }, {
        name: '红色（表示警告）',
        value: 'danger'
      }]
    },
    disabled: {
      des: '按钮不可用',
      type: Boolean,
      default: false
    },
    action: {
      des: '打点行为名称',
      type: String,
      default: ''
    },
    icon: {
      des: '小图标',
      type: String,
      default: ''
    },
    click: {
      type: Function
    }
  },
  components: {
    YamButton
  }
}
</script>
