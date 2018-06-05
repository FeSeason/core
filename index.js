// import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import Components from './components/index'
import DS from './util/service/request'
import {DeepCopy} from './util'

// Vue.use(ElementUI)

const PP_UP = {
  install (Vue, opt) {
    Vue.mixin({
      methods: {
        renderEle (h, _data) {
          const data = DeepCopy(_data)
          return data.map((item) => {
            item.props = item.props || {}
            return h(item.component, {
              attrs: {
                cid: item.props.cid || 0,
                cName: item.component
              },
              props: Object.assign(item.props || {},
                item.children ? {children: item.children, txt: item.txt} : item.txt ? {txt: item.txt} : {})
            }, [
              item.children && item.children.length > 0 && !item.txt ? this.renderEle(h, item.children) : item.txt
            ])
          })
        },
        GET_DS_DATA (ds) {
          return DS(ds)
        }
      }
    })
    Components.map(item => {
      Vue.component(item.name, item)
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(PP_UP)
}

export default PP_UP
