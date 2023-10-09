<template>
  <div class="news">
    <AwHeader class="news_header" ref="news_header"></AwHeader>
    <div class="box">
      <div class="news-banner">
        <div class="banner-title">
          <h2>{{ $t("news.title") }}</h2>
          <h3>{{ $t("news.subtitle") }}</h3>
        </div>
        <el-autocomplete
          class="search-news"
          popper-class="my-autocomplete"
          highlight-first-item
          v-model="searchNews"
          clearable
          ref="autocomplete"
          @focus="autocompleteFlag = true"
          @blur="autocompleteFlag = false"
          @clear="searchHandle"
          :fetch-suggestions="querySearchAsync"
          :placeholder="$t('news.search')"
          :trigger-on-focus="false"
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
          <template slot-scope="{ item }">
            <router-link :to="`/news/${item.newsId}`" target="_blank">
              <div class="name" v-html="item.title"></div>
              <span class="desc" v-html="item.intro"></span>
            </router-link>
          </template>
        </el-autocomplete>
      </div>
      <div class="news-container">
        <div class="news-card">
          <el-card
            shadow="never"
            v-for="(item, index) in recomNews"
            :key="index"
          >
            <router-link :to="`/news/${item.newsId}`">
              <div class="news-card-item">
                <img :src="item.cover_img" alt="" />
                <p class="item-mask">
                  <span>{{ item.title }}</span>
                </p>
              </div>
            </router-link>
          </el-card>
        </div>
        <div class="news-list">
          <div class="list-left">
            <news-list :items="newsItems" class="newslist"></news-list>
            <el-pagination
              class="pagination"
              background
              @current-change="handleCurrentChange"
              :current-page.sync="pageInfo.pagenum"
              :page-size="pageInfo.pagesize"
              layout="prev, pager, next, jumper"
              :total="total"
              :hide-on-single-page="singlePage"
              v-scroll-to="{
                element: '.news-container',
                duration: 300,
                easing: 'ease',
                offset: -40,
              }"
            >
            </el-pagination>
          </div>

          <div class="list-right">
            <div class="search-by-date">
              <p>按日期搜索：</p>
              <el-date-picker
                v-model="pageInfo.selectDate"
                type="month"
                placeholder="选择日期"
                value-format="yyyy-MM"
                @change="searchByDate(pageInfo.selectDate)"
              >
              </el-date-picker>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AwFooter></AwFooter>
  </div>
</template>

<script>
import AwHeader from "../../components/web/public/Header";
import AwFooter from "../../components/web/public/Footer";
import NewsList from "../../components/web/newsList";
import HotNews from "../../components/web/hotNews";
import { getNews } from "@/api/news";

export default {
  name: "news",
  components: {
    HotNews,
    NewsList,
    AwFooter,
    AwHeader,
  },
  data() {
    return {
      total: 1,
      searchNews: "",
      newsItems: {},
      pageInfo: {
        activeName: "1",
        // 当前页码
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 5,
        selectDate: "",
      },
      // 单页隐藏
      singlePage: "",
      // 卡片新闻
      recomNews: [],
      selectDate: "",
      // 新闻搜索
      searchList: [],
      // autocompleteFlag: false
    };
  },
  methods: {
    // 关键词搜索新闻
    async querySearchAsync(queryString, cb) {
      this.searchList = [];
      var query = {};
      query.pageSize = this.pageInfo.pagesize;
      query.pageNum = this.pageInfo.pagenum;
      query.title = queryString;
      getNews(query).then((res) => {
        if (res.status !== 200) {
          this.searchList = {};
        } else {
          // this.$message.success('获取成功')
          this.searchList = res.data.rows;
        }
        const newHtml = `<span style="color: #3370ff">${queryString}</span>`;
        this.searchList.forEach((item) => {
          item.title = item.title.replace(queryString, newHtml);
          item.intro = item.intro.replace(queryString, newHtml);
        });
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(this.searchList);
        }, 1000 * Math.random());
      });
      // const { data: res } = await this.$http.get(
      //   "/web/searchnews/" + queryString
      // );
      // if (res.status !== 200) {
      // } else {
      //   // this.$message.success('获取成功')
      //   this.searchList = res.data.list;
      // }
      // const newHtml = `<span style="color: #3370ff">${queryString}</span>`;
      // this.searchList.forEach((item) => {
      //   item.news_title = item.news_title.replace(queryString, newHtml);
      //   item.news_desc = item.news_desc.replace(queryString, newHtml);
      //   // item.news_desc = item.news_desc.replace(queryString, newHtml)
      // });
      // clearTimeout(this.timeout);
      // this.timeout = setTimeout(() => {
      //   cb(this.searchList);
      // }, 1000 * Math.random());
    },
    // 解决 clearable 搜索框后再次输入不显示下拉
    searchHandle() {
      if (this.autocompleteFlag) this.$refs.autocomplete.activated = true;
    },
    // 新闻列表选项卡切换
    handleClick(tab, event) {
      this.getNewsItems();
    },
    // handleSizeChange (val) {
    //   console.log(`每页 ${val} 条`)
    // },
    // 新闻列表页码切换
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.getNewsItems();
    },
    // 根据新闻 类型、日期 查询新闻，并按日期排序

    //!!!
    async getNewsItems() {
      var query = {};
      query.pageSize = this.pageInfo.pagesize;
      query.pageNum = this.pageInfo.pagenum;

      // console.log(`output->query`,query)
      getNews(query).then((res) => {
        // console.log(`output->res`, res);
        if (res.status !== 200) {
          this.newsItems = {};
        } else {
          // this.$message.success('获取成功')
          this.newsItems = res.data.rows;
          this.total = res.data.total;
          if (this.total <= this.pageInfo.pagesize) {
            this.singlePage = true;
          }
        }
      });

      // const { data: res } = await this.$http.get('/web/newslist', { params: this.pageInfo })
      // if (res.status !== 200) {
      //   this.newsItems = {}
      // } else {
      //   // this.$message.success('获取成功')
      //   this.newsItems = res.data
      //   if (this.newsItems.total <= this.newsItems.limit) {
      //     this.singlePage = true
      //   }
      // }
    },
    searchByDate(data) {
      // console.log(data)
      this.getNewsItems();
    },

    // async getRecomNews () {
    //   const { data: res } = await this.$http.get('/web/recomNews')
    //   if (res.status !== 200) {
    //     this.hotNews = []
    //   } else {
    //     // this.$message.success('获取成功')
    //     this.recomNews = res.data.list
    //   }
    // }
  },
  created() {
    this.getNewsItems();
    // this.getRecomNews()
  },
  mounted() {
    this.$store.commit("setHeaderLogo", {
      headerLogoShow: false,
    });
    this.$store.commit("setShadowActive", {
      headerShadowActive: false,
    });
    this.$store.commit("setNavDarkActive", {
      navDarkActive: true,
    });
    this.$store.commit("setHeaderShow", {
      headerShow: false,
    });
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    if (from.name === "news") {
      this.$store.commit("setNavDarkActive", {
        navDarkActive: false,
      });
      this.$store.commit("setHeaderLogo", {
        headerLogoShow: true,
      });
      next();
    }
  },
};
</script>

<style lang = "less" scoped>
@hover_color: #3370ff;
* {
  margin: 0;
  padding: 0;
}

.news_header {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  //border-bottom: 1px solid #eff0f1;
}

.box {
  padding-top: 60px;
  //background: url("../../assets/img/news/bg_02.jpg");
  //background-size: cover;
}

.newslist {
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
}
.news-banner {
  width: 100%;
  height: 280px;
  background: url("../../assets/img/news/newsbanner.jpg") 50% no-repeat;
  background-size: cover;
  text-align: center;
  padding-top: 70px;

  .banner-title {
    padding-bottom: 30px;

    h2 {
      font-size: 40px;
      line-height: 60px;
      font-weight: 600;
    }

    h3 {
      color: #828282;
      margin-top: 5px;
      font-size: 100%;
      font-weight: 400;
      font-variant: normal;
    }
  }

  .search-news {
    width: 46%;

    .el-input__icon {
      line-height: 46px;
      font-size: 16px;
    }
  }

  /deep/ .el-input__inner {
    height: 46px;
    line-height: 46px;
    border-radius: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
}

.news-container {
  max-width: 1200px;
  //background: #d3dce6;
  min-height: 580px;
  margin: 0 auto;

  .news-card {
    padding-top: 40px;
    margin: 0 auto 50px auto;
    display: flex;
    justify-content: space-evenly;
    //background-color: #d3dce6;
    .el-card {
      width: 280px;
      height: 160px;
      overflow: hidden;
      color: #ffffff;
    }

    .news-card-item {
      width: 280px;
      height: 160px;
      position: relative;
      cursor: pointer;

      .item-mask {
        position: absolute;
        background: linear-gradient(transparent, #030822);
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 50px 20px;
        height: 97px;
        box-sizing: border-box;
      }

      span {
        color: #fff;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }

    .news-card-item:hover img {
      transform: scale(1.02);
    }

    /deep/ .el-card__body {
      padding: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.4s ease-in-out;
    }
  }

  .news-list {
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .news-list:after {
    content: "";
    position: absolute;
    left: 0;
    top: 43px;
    width: 100%;
    height: 2px;
    background-color: #e4e7ed;
    z-index: 1;
  }

  /deep/ .el-tabs__header {
    height: 60px;
  }

  /deep/ .el-tabs__active-bar {
    bottom: 5px;
    //height: 3px;
  }

  /deep/ .el-tabs__item {
    height: 50px;
    line-height: 50px;
    font-weight: 600;
  }

  .list-left {
    width: 860px;

    /deep/ .el-tabs__content {
      height: auto;
      //background-color: #d2d3d4;
    }
  }

  .el-pagination {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 50px;
  }

  .list-right {
    margin-left: 50px;

    .search-by-date {
      //padding: 6px 0;
      display: flex;
      height: 50px;
      align-items: center;
      justify-content: flex-end;
      font-size: 14px;
      margin-bottom: 25px;

      p {
        white-space: nowrap;
        position: relative;
        //right: -30px;
      }

      .el-date-editor.el-input {
        width: 160px;
      }

      /deep/ .el-input__inner {
        width: 160px;
        height: 30px;
        line-height: 30px;
      }

      /deep/ .el-input__prefix,
      /deep/ .el-input__suffix {
        top: -4px;
      }

      ///deep/ .el-input__suffix{
      //  right: 50px;
      //}
    }

    /deep/ .el-card__body {
      padding-top: 0;
    }
  }
}

/deep/ .el-tabs__nav-wrap::after {
  content: none;
}

.box-card {
  width: 480px;
}
</style>
<style lang = "less">
@hover_color: #3370ff;
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .desc {
      font-size: 12px;
      color: #b4b4b4;
    }

    &.highlighted {
      background: #edf6ff !important;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }

  a {
    color: rgba(0, 0, 0, 1);
    //transition: color .3s;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  a:hover {
    color: @hover_color;
  }
}

.el-autocomplete-suggestion li:hover {
  background-color: #edf6ff !important;
}
</style>
