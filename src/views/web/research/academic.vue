<template>
  <div>
    <AwHeader class="academic_header"></AwHeader>
    <div class="box">
      <div class="academic-banner">
        <div id="app">
          <transition name="fade">
            <div v-if="showSlogan" class="slogan">
              <p>{{$t('research.academic.title1')}}</p>
              <p>{{$t('research.academic.title2')}}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="note_container">
      <transition name="slideUp">
        <p class="note" v-if="showSlogan">
          <!-- We develop large-scale AI systems so that we can study their safety
          properties at the technological frontier, where new problems are most
          likely to arise. We use these insights to create safer, steerable, and
          more reliable models, and to generate systems that we deploy
          externally, like Claude. -->
          {{$t('research.academic.subtitle')}}
        </p>
      </transition>
    </div>
    <div class="scroll-container">
      <div class="scrollHint">
        <div class="thumb"></div>
        <div class="text">{{$t('research.academic.scroll')}}</div>
      </div>
    </div>
    <div class="search">
      <div style="width: 100%"><h1>{{$t('research.academic.search')}}</h1></div>
      <form class="search-form">
        <input class="search-submit" />
        <input
          @input="querySelect"
          v-model="query"
          class="search-text"
          placeholder="Search..."
          autocomplete="off"
        />
      </form>
    </div>
    <div style="width: 100%; height: 60vh">
      <el-table
        :cell-style="{ textAlign: 'center' }"
        :header-cell-style="{ textAlign: 'center' }"
        :data="queryData"
        v-loading="loading"
        class="paper"
      >
        <el-table-column prop="authors" label="研究员"> </el-table-column>
        <el-table-column prop="title" label="研究"> </el-table-column>
        <el-table-column prop="postedTime" label="发布时间"> </el-table-column>
        <el-table-column label="详情">
          <template slot-scope="scope">
            <el-popover
              placement="top"
              :title="scope.row.title"
              trigger="click"
              transition="fade-in-linear"
            >
              <el-form class="detailpane">
                <div>Introduce</div>
                <el-form-item>{{ detail.intro }}</el-form-item>
                <div>Address</div>
                <el-form-item>{{ detail.address }}</el-form-item>
              </el-form>
              <el-button
                @click="handleClick(scope.row)"
                slot="reference"
                type="text"
                size="small"
                >详情</el-button
              >
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          layout="prev, pager, next"
          :total="total"
          @current-change="pageData"
          :page-size="pageSize"
        >
        </el-pagination>
      </div>
    </div>

    <AwFooter></AwFooter>
  </div>
</template>

<script>
import AwHeader from "@/components/web/public/Header";
import AwFooter from "../../../components/web/public/Footer";
import { getDetailedPaper, listPaper } from "@/api/research.js";
export default {
  components: {
    AwHeader,
    AwFooter,
  },
  data() {
    return {
      total: 30,
      current:1,
      pageSize:5,
      detail: {
        address: "http://iuiqqmr.ec/tlemlc",
        intro:
          "务山养第证分思果油社改山取也示事。称群表八广习时通清百志属打。而住阶全联严装干开包生周改立济。阶单品值军世方无因山市义反置重过光。再素质使强号阶们包取子半局门单。海起资照快这府作东合步料容度温但据。",
      },
      query: "",
      loading: false,
      showSlogan: false,
      queryData: [],
      paperData: [],
    };
  },
  methods: {
    querySelect(e) {
      if (this.query == "") {
        this.queryData = this.paperData.slice(0, 5);;
      } else {
        if (this.queryData.length == 0) {
          this.queryData = this.paperData.slice(0, 5);;
        }
        this.queryData = this.paperData.filter((item) =>
          item.title.toLowerCase().includes(this.query.toLowerCase())
        );
      }
    },
    handleClick(row) {
      getDetailedPaper(row.id).then((res) => {
        console.log(`output->res`, res);
        if (res.code == 200) {
          this.detail = res.data.result;
        } else {
          console.log(`output->'error'`, "error");
        }
      });
    },
    pageData(current) {
        var start = (current - 1) * this.pageSize;
        var end = current * this.pageSize ;
        this.queryData = this.paperData.slice(start, end);
    },
    getPaperList() {
      this.loading = true;
      listPaper().then((res) => {
        this.paperData = res.data.result;
        this.queryData = this.paperData;
        this.total = this.paperData.length;
        this.queryData = this.paperData.slice(0, 5);
        this.loading = false;
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.showSlogan = true;
    }, 1000);
    this.getPaperList(1);
  },
};
</script>

<style lang="less" scoped>
@import url(../../../assets/style/search.css);
@hover_color: #3370ff;

* {
  margin: 0;
  padding: 0;
}
.academic_header {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  //border-bottom: 1px solid #eff0f1;
}
// .el-table td, .el-table th {
//     text-align: center;
// }
.box {
  // padding-top: 60px;
  // position: relative;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  // background: url("../../../assets/img/news/bg_02.jpg");
  //background-size: cover;
}
.academic-banner {
  width: 100%;
  height: 280px;
  // background: url("../../../assets/img/news/newsbanner.jpg") 50% no-repeat;
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
#app {
  font-feature-settings: "pnum" on, "lnum" on, "liga" on;
  font-family: "Styrene A LC", sans-serif;
  font-weight: bold;
  font-size: clamp(2rem, 4vw, 5.5rem);
  // font-size: 70px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.slogan {
  // width: 50%;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.note {
  font-size: clamp(1.25rem, 1.67vw, 1.625rem);
  text-align: center;
  // display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: "Tiempos Text", serif;
  font-weight: normal;
  width: 50%;
  // display: flex;
  // justify-content: center;
  // align-items: center;

  font-feature-settings: "pnum" on, "lnum" on, "ss01" on, "case" on;
  position: relative;
  top: 0%;
  transition: top 1s;
}
.note_container {
  margin-top: 20vh;
  height: 60vh;
  display: flex;
  justify-content: center;
}
.slideUp-enter-active {
  top: 100%;
}

//search css
.search {
}
body {
  padding: 4rem;
  background: #f3f3f3;
  font-family: "Roboto", sans-serif;
}
.contact {
  margin: 4rem 0 0;
  font-weight: bold;
  color: #444;
  line-height: 1.7;
}
.contact a {
  color: #66b;
}
h1,
input {
  color: #444;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
}
h1 {
  border-bottom: 1px dashed #666;
  padding-bottom: 16px;
}
form {
  padding: 0;
  margin: 0;
}
/* Expandable search box */
/* Note: don't change 0.8s in transition. */
/* --------------------- */
input.search-text {
  color: #222;
  position: relative;
  z-index: 5;
  transition: z-index 0.8s, width 0.5s, background 0.3s ease, border 0.3s;
  height: 45px;
  width: 0;
  margin: 0;
  padding: 5px 0 5px 40px;
  box-sizing: border-box;
  font-size: 16px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 30px;
  border: 1px solid transparent;
  /*background: url(search.png) no-repeat left 9px center transparent;*/
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik01MDMuODY2LDQ3Ny45NzRMMzYwLjk1OCwzMzUuMDUyYzI4LjcyNS0zNC41NDQsNDYuMDE3LTc4LjkxMiw0Ni4wMTctMTI3LjMzNiAgYzAtMTEwLjA4NC04OS4yMjctMTk5LjMxMi0xOTkuMzEyLTE5OS4zMTJDOTcuNTk5LDguNDAzLDguMzUxLDk3LjYzMSw4LjM1MSwyMDcuNzE1YzAsMTEwLjA2NCw4OS4yNDgsMTk5LjMxMiwxOTkuMzEyLDE5OS4zMTIgIGM0OC40MzUsMCw5Mi43OTItMTcuMjkyLDEyNy4zMzYtNDYuMDE3bDE0Mi45MDgsMTQyLjkyMkw1MDMuODY2LDQ3Ny45NzR6IE0yOS4zMzEsMjA3LjcxNWMwLTk4LjMzNCw3OS45ODctMTc4LjMzMiwxNzguMzMyLTE3OC4zMzIgIGM5OC4zMjUsMCwxNzguMzMyLDc5Ljk5OCwxNzguMzMyLDE3OC4zMzJzLTgwLjAwNywxNzguMzMyLTE3OC4zMzIsMTc4LjMzMkMxMDkuMzE4LDM4Ni4wNDcsMjkuMzMxLDMwNi4wNSwyOS4zMzEsMjA3LjcxNXoiIGZpbGw9IiMzNzQwNEQiLz48L3N2Zz4=)
    no-repeat left 9px center transparent;
  background-size: 24px;
}
input.search-text:focus {
  z-index: 3;
  width: 60%;
  border: 1px solid #666;
  background-color: white;
  outline: none;
  cursor: auto;
  padding-right: 10px;
}

input.search-submit {
  position: relative;
  z-index: 4;
  top: 17px;
  left: 49px;
  width: 100px;
  height: 45px;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  border-radius: 30px;
  cursor: pointer;
  background: none;
}

input.search-text::-webkit-search-cancel-button {
  cursor: pointer;
}

//scroll-hint css
.scroll-container {
  position: absolute;
  top: 30vh;
  left: 50%;
  right: 50%;
}

.scrollHint {
  height: 64px;
  width: 1px;
  background: #cfd6d9;
  position: relative;
  top: 560px;
}

.thumb {
  width: 15px;
  height: 15px;
  background: #cfd6d9;
  border-radius: 12px;
  animation: ScrollPage 3s ease-in-out infinite;
  position: absolute;
  left: -7px;
  top: 0;
  opacity: 0;
}

.text {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 14px;
  color: #7f94a1;
  width: 200px;
  padding: 20px 28px;
}

@keyframes ScrollPage {
  0 {
    top: 0;
    opacity: 0;
  }
  50% {
    top: 64px;
    opacity: 0;
    transform: scale(0);
  }
  66% {
    opacity: 1;
    transform: scale(1);
  }
  84% {
    top: 0;
    opacity: 1;
    transform: scale(1);
  }
  100% {
    top: 0;
    opacity: 1;
    transform: scale(0);
    transform-origin: top;
  }
}

.search-form {
  // width: 50%;
  margin-left: 20%;
  margin-top: 3%;
}
.paper {
  margin-top: 5vh;
  width: 70%;
  margin-left: 15%;
}

.el-button--text {
  //需要更改的按钮类型 type='primary'
  color: #552e82 !important;
  border: none;
}

h1 {
  display: block;
  width: 50%;
  margin-left: 25%;
}

.block {
  margin-top: 10vh;
  margin-left: 42%;
}

.detailpane {
  font-size: 20px;
}
</style>
