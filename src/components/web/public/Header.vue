<template>
  <div
    class="header"
    :class="{ header_show: headerShow, shadow: headerShadowActive }"
  >
    <div class="header_container">
      <div class="header_content">
        <div class="logo">
          <router-link to="/">
            <img
              :src="logo_img[0].path"
              alt="logo"
              v-if="headerLogoShow === true"
            />
            <img :src="logo_img[1].path" alt="logo" v-else />
          </router-link>
        </div>
        <div class="menu-wrapper">
          <div class="line"></div>
          <el-menu
            :default-active="activeIndex2"
            class="menu-item"
            mode="horizontal"
            text-color="#000"
            :router="true"
          >
            <el-menu-item index="/">首页</el-menu-item>
            <el-submenu index="/research/products">
              <template slot="title">研究</template>
              <el-menu-item index="/research/academic" class="item"
                >科研</el-menu-item
              >
              <el-menu-item index="/research/products" class="item"
                >产品介绍</el-menu-item
              >
              <el-menu-item index="/research/experience" class="item"
                >体验</el-menu-item
              >
            </el-submenu>
            <el-menu-item index="/news">新闻</el-menu-item>
            <el-submenu index="/us/cominfo">
              <template slot="title">我们</template>
              <el-menu-item index="/us/cominfo" class="item"
                >公司简介</el-menu-item
              >
              <el-menu-item index="/us/partners" class="item"
                >合作伙伴</el-menu-item
              >
              <el-menu-item index="/us/joinus" class="item"
                >加入我们</el-menu-item
              >
            </el-submenu>
            <el-menu-item index="/lang" style="float: right">语言</el-menu-item>
            <el-menu-item index="/login" style="float: right"
              >登录</el-menu-item
            >
          </el-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      navList: [
        {
          label: "首页",
          path: "/index",
        },
        {
          label: "研究",
          path: "/research",
          children: [
            {
              path: "/research/academic",
              name: "page1",
              label: "科研",
            },
            {
              path: "/research/product",
              name: "product",
              label: "产品",
            },
            {
              path: "/research/experiment",
              name: "experiment",
              label: "体验",
            },
          ],
        },
        {
          title: "新闻",
          path: "/news",
        },
        {
          title: "我们",
          path: "/us",
          children: [
            {
              path: "/us/cominfo",
              name: "cominfo",
              label: "公司简介",
            },
            {
              path: "/us/partner",
              name: "page1",
              label: "合作伙伴",
            },
            {
              path: "/us/joinus",
              name: "page1",
              label: "加入我们",
            },
          ],
        },
        // {
        //   title: '客户服务',
        //   path: '/customer'
        // },
        {
          title: "登录",
          path: "/login",
        },
      ],
      logo_img: [
        {
          path: require("../../../assets/img/index/logo.png"),
        },
        {
          path: require("../../../assets/img/index/logoColor.png"),
        },
      ],
    };
  },
  computed: {
    ...mapState([
      "headerShadowActive",
      "headerShow",
      "headerLogoShow",
      "navDarkActive",
    ]),
  },

  mounted() {},
  methods: {
  },
};
</script>

<style lang = "less" scoped>
@nav_active_color: #3370ff;
h2 {
  margin: 0;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #40fff600;
  color: #303133;
}
.item {
  margin-top: 5px;
  margin-bottom: 5px;
}

.el-menu {
  border: 0 !important;
  width: 100%;
}

.menu-item {
  background-color: rgba(0, 0, 0, 0);
}
.header_show {
  transform: translateY(-62px);
}
.a_text_dark {
  color: rgba(0, 0, 0, 0.8);
}
.header {
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0);
  //backdrop-filter: blur(0);
  box-shadow: none;

  position: fixed;
  z-index: 999;
  transition: transform 0.2s ease;
  //color: rgba(255, 255, 255, 1) !important;
  //transition: all 0.3s ease;
  .header_container {
    height: 100%;
  }
}

.shadow {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
}

.header_content {
  display: flex;
  /* justify-content: space-between; */
  flex-direction: row;
  height: 100%;
  align-items: center;
  padding: 0 50px;
  margin: 0 auto;

  .logo {
    flex: 0 0 auto;

    img {
      padding-top: 15px;
      height: 100px;
    }
  }
}

.menu-wrapper {
  width: 100%;
}

/* .nav_text_white {
  color: rgba(255, 255, 255, 1);
}

.nav_text_dark {
  color: rgba(0, 0, 0, 0.8);
} */

@media only screen and (max-width: 991px) {
  .header_content {
    padding: 0 32px;
  }
}
</style>
