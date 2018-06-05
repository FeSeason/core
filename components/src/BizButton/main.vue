<template>
  <yam-button
    :action="action"
    :type="type"
    :size="size"
    :icon="icon"
    :modifier="modifier"
    :disabled="disabled"
    @click="click"
  >{{text}}</yam-button>
</template>
<script>
import { YamButton } from '@xhs/yam-layout'
export default {
  name: 'test-button',
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
    size: {
      des: '按钮大小',
      type: String,
      default: 's',
      options: [{
        name: 's',
        value: 's'
      }, {
        name: 'm',
        value: 'm'
      }, {
        name: 'l',
        value: 'l'
      }, {
        name: 'xl',
        value: 'xl'
      }]
    },
    modifier: {
      des: '按钮常用颜色',
      type: String,
      default: 'primary',
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
