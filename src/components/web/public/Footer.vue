<template>
  <div class = "footer_container" :style="footerHeight + 'px'">
    <div class = "footer_content">
      <div class = "footer_logo footer-content-column">
        <div class = "logo-container">
          <img :src = "logo_url" alt = "">
          <div class="logo-text">
            <p class="text1">{{$t("footer.title")}}</p>
            <p class="text2">{{$t("footer.subtitle")}}</p>
          </div>
        </div>
        <h2>{{$t("footer.copyright")}}</h2>
        <h2>{{$t("footer.securityrecord")}}</h2>
      </div>
      <div class = "about_us footer-content-column">
        <h2>{{$t("footer.aboutus")}}</h2>
        <ul class = "about_list">
          <li>
            <router-link to = "/job" target = "_blank">{{$t("footer.culture")}}</router-link>
          </li>
        </ul>
      </div>
      <div class = "contact_us footer-content-column">
        <h2>{{$t("footer.contactus")}}</h2>
        <ul class = "contact_list">
          <li>
            <a href = "'mailto:'+item.email">{{ $t("footer.medium") }}</a>
          </li>
          <li>
            <a href = "'mailto:'+item.email">{{ $t("footer.recruit") }}</a>
          </li>
          <li>
            <a href = "'mailto:'+item.email">{{ $t("footer.cooperate") }}</a>
          </li>
          <li>
            <a href = "'mailto:'+item.email">{{ $t("footer.ads") }}</a>
          </li>
        </ul>
      </div>
      <div class = "focus_us footer-content-column">
        <h2>{{$t("footer.QR.title")}}</h2>
        <div class = "media">
          <div :class = "item.name" v-for = "(item,index) in focus_icon" :key = "index">
            <el-popover
              placement = "top"
              trigger = "hover">
              <div class = "qr_popover">
                <img :src = "item.qr" alt = "">
                <h2>{{ item.info }}</h2>
              </div>
              <img :src = "item.path" :alt = "item.name" slot = "reference">
            </el-popover>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footerHeight: '',
      curWidth: '',
      logo_url: require('../../../assets/img/index/logoColor.png'),
      // contact_way: [
      //   {
      //     name: this.$t("footer.medium"),
      //     email: 'aerowangue@126.com'
      //   },
      //   {
      //     name: this.$t("footer.recruit"),
      //     email: 'aerowangue@126.com'
      //   },
      //   {
      //     name: this.$t("footer.cooperate"),
      //     email: 'aerowangue@126.com'
      //   },
      //   {
      //     name: this.$t("footer.ads"),
      //     email: 'aerowangue@126.com'
      //   }
      // ],
      focus_icon: [
        {
          name: 'weibo',
          path: require('../../../assets/img/focus/weibo.png'),
          qr: require('../../../assets/img/focus/qr_weixin.png'),
          info: this.$t("footer.QR.weibo")
        },
        {
          name: 'weixin',
          path: require('../../../assets/img/focus/weixin.svg'),
          qr: require('../../../assets/img/focus/qr_weixin.png'),
          info: this.$t("footer.QR.wechat")
        },
        {
          name: 'bilibili',
          path: require('../../../assets/img/focus/bilibili.png'),
          qr: require('../../../assets/img/focus/qr_weixin.png'),
          info: this.$t("footer.QR.bilibili")
        }
      ]
    }
  },
  methods: {

    // setFooterHeight () {
    //   this.curWidth = window.innerWidth
    //   if (this.curWidth <= 991) {
    //     this.footerHeight = 570 + 'px'
    //   } else {
    //     this.footerHeight = 280 + 'px'
    //   }
    // }
  },
  created () {
    // 页面创建时执行一次getHeight进行赋值，顺道绑定resize事件
    // window.addEventListener('resize', this.setFooterHeight)
    // this.setFooterHeight()
  }
}
</script>

<style lang = "less" scoped>
*{
  margin: 0;
  padding: 0;
}
h2{
  font-size: 100%;
  font-weight: 400;
  font-variant: normal;
}
.footer_container {
  width: 100%;
  background: #1f2329;
  padding-bottom: 60px;
}

.footer_content {
  max-width: 1440px;
  color: #fff;
  margin: 0 auto;
  padding: 69px 0 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  h2 {
    font-size: 14px;
    line-height: 22px;
    margin: 4px 0;
    color: #7b7e81;
  }

  .footer-content-column {
    flex: 1 1;
    color: #d2d3d4;
    position: relative;
    text-align: center;

    h2 {
      margin-bottom: 18px;
      font-size: 16px;
      font-weight: bold;
    }

    .about_list, .contact_list {
      text-align: center;
      font-size: 14px;
      line-height: 22px;

      li {
        margin-bottom: 15px;
      }

      a {
        color: #d2d3d4;
      }
    }
  }

  .about_us, .contact_us {
    max-width: 202px;
  }

  .focus_us {
    text-align: left;
    padding-left: 73px;

    .media {
      margin-top: 18px;
      display: flex;
    }

    span {
      margin-right: 18px;
      flex: 0 0 auto;
    }

    img {
      width: 32px;
    }

    .weixin img {
      width: 38px;
      position: relative;
      top: -2px;
    }

    h2 {
      text-align: left;
      font-size: 14px;
      font-weight: normal;
      margin-bottom: 4px;
    }
  }

  .footer_logo {
    margin-left: 96px;
    height: 55px;
    text-align: left;
    max-width: 382px;
    min-width: 350px;

    h2 {
      font-size: 14px;
      font-weight: normal;
      margin-bottom: 4px;
    }

    .logo-container {
      display: flex;
      margin-bottom: 9px;
      img {
        height: 50px;
      }
      .logo-text{
        margin-left: 15px;
        position: relative;
        bottom: -6px;
      }
      .text1{
        font-size: 21px;
        font-weight: bold;
        margin: 0;
      }
      .text2{
        font-size: 12px;
        margin: 0;
      }
    }
  }
}

@media only screen and (max-width: 991px) {
  .footer_content {
    flex-direction: column;

    .footer-content-column {
      text-align: center;
      margin: 0 auto 0;

      h2 {
        text-align: center;
      }
      padding-left: 0;
    }
    .focus_us div:last-of-type > span{
      margin-right: 0;
    }
    .media{
      justify-content: center;
    }
    .logo-container{
      justify-content: center;
      text-align: left;
    }
  }
}

.qr_popover {
  width: 100%;
  text-align: center;

  img {
    width: 130px;
    height: 130px;
    margin-bottom: 10px;
  }
}
</style>
