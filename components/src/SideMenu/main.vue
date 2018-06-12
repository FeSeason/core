<template>
  <div class="side-menu">
    <div class="project-logo">
      <img :src="logoSrc" alt="">
    </div>
    <div class="side-menu-container">
      <h1 class="app-name">
        {{projectName}}
      </h1>
      <div class="menu-list">
        <div
          v-for="(item, index) in menuList"
          :key="index"
          class="menu-item">
          <h1>{{item.name || ''}}</h1>
          <div class="sub-menu">
            <a
              v-for="(m, j) in item.submenus"
              @click="jump(m)"
              :key="j">
              <i
                v-if="m.icon"
                :class="m.icon"></i>{{m.name || ''}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'side-menu',
  des: '导航菜单',
  props: {
    projectName: String,
    logoSrc: String,
    menuList: {
      type: Array
    }
  },
  methods: {
    jump(item) {
      const path = item.route.path

      if (path && path.includes('http://')) {
        window.open(path)
      } else {
        this.$router.push(path)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .side-menu
    height 100vh
    background #252b33
    .project-logo
      height 60px
      img
        max-width 100%
        height 60px
    .side-menu-container
      .app-name
        font-size 16px
      h1
        color #ffffff
        font-size 14px
        font-weight bold
        padding 20px 0 20px 20px
      .sub-menu
        a
          cursor pointer
          font-size 14px
          color #8ca5b5
          text-decoration none
          padding 20px 0 20px 20px
          display block
          transition padding .5s
          &:hover
            padding-left 30px
            color #fff
            background-color #303741
            border-left 4px solid #01d9a9
          i
            margin-right 10px
</style>
