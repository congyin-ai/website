<template>
  <div id = "app">
    <router-view></router-view>
    <el-backtop :bottom = "80" :right = "60" :visibility-height = "280">
      <svg class = "icon" aria-hidden = "true">
        <use xlink:href = "#icon-huojian"></use>
      </svg>
    </el-backtop>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {},
  data () {
    return {
    }
  },
  methods: {
  },

  created () {
  }

}
</script>

// <style lang="less">
// .el-popper{
//   .el-menu--horizontal{
//     .el-menu--popup{
//       background-color:red ;//这里设置成自己想要的颜色即可
//       .el-menu-item{
//         background-color:blue ;//这里设置成自己想要的颜色即可
//       }
//     }
//     .el-menu--popup-bottom-start{
//       
//     }
//   }
// }

// </style>

<style lang = "less" scoped>
.icon {
  width: 1.3em;
  height: 1.3em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.el-backtop {
  width: 48px;
  height: 48px;
  box-shadow: 0 0 6px rgba(0, 0, 0, .2);
}
</style>
