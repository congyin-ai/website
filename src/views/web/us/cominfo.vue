<template>
  <div class="cominfo">
    <AwHeader class="cominfo_header" ref="cominfo_header"></AwHeader>
    <div class="box">
      <div class="landing-page">
        <div class="content">
          <div class="container">
            <div class="image">
              <img src="@/assets/img/index/logo.png" style="width: 100%" />
            </div>
            <div class="info">
              <h1>{{$t('us.cominfo.title')}}</h1>
              <p>
                {{$t('us.cominfo.subtitle')}}
              </p>
              <button>{{$t('us.cominfo.button')}}</button>
            </div>
          </div>
        </div>
        <div class="gtco-testimonials">
          <h2>{{$t('us.cominfo.members')}}</h2>
          <div class="owl-carousel owl-carousel1 owl-theme">
            <div class="members">
              <div class="member">
              <div class="card text-center">
                <img
                  class="card-img-top"
                  src="@/assets/img/index/app1.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h5>
                    {{$t('us.cominfo.member1.name')}}<br />
                    <span> {{$t('us.cominfo.member1.position')}} </span>
                  </h5>
                  <p class="card-text">
                    {{$t('us.cominfo.member1.motto')}}
                  </p>
                </div>
              </div>
              <div class="card text-center">
                <img
                  class="card-img-top"
                  src="@/assets/img/index/app1.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h5>
                    {{$t('us.cominfo.member1.name')}}<br />
                    <span> {{$t('us.cominfo.member1.position')}} </span>
                  </h5>
                  <p class="card-text">
                    {{$t('us.cominfo.member1.motto')}}
                  </p>
                </div>
              </div>
              <div class="card text-center">
                <img
                  class="card-img-top"
                  src="@/assets/img/index/app1.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h5>
                    {{$t('us.cominfo.member1.name')}}<br />
                    <span> {{$t('us.cominfo.member1.position')}} </span>
                  </h5>
                  <p class="card-text">
                    {{$t('us.cominfo.member1.motto')}}
                  </p>
                </div>
              </div>
              </div>
              <div class="member">
              <div class="card text-center">
                <img
                  class="card-img-top"
                  src="@/assets/img/index/app1.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h5>
                    {{$t('us.cominfo.member1.name')}}<br />
                    <span> {{$t('us.cominfo.member1.position')}} </span>
                  </h5>
                  <p class="card-text">
                    {{$t('us.cominfo.member1.motto')}}
                  </p>
                </div>
              </div>
              <div class="card text-center">
                <img
                  class="card-img-top"
                  src="@/assets/img/index/app1.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h5>
                    {{$t('us.cominfo.member1.name')}}<br />
                    <span> {{$t('us.cominfo.member1.position')}} </span>
                  </h5>
                  <p class="card-text">
                    {{$t('us.cominfo.member1.motto')}}
                  </p>
                </div>
              </div>
              <div class="card text-center">
                <img
                  class="card-img-top"
                  src="@/assets/img/index/app1.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h5>
                    {{$t('us.cominfo.member1.name')}}<br />
                    <span> {{$t('us.cominfo.member1.position')}} </span>
                  </h5>
                  <p class="card-text">
                    {{$t('us.cominfo.member1.motto')}}
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AwFooter></AwFooter>
  </div>
</template>

<script>
import AwHeader from "@/components/web/public/Header";
import AwFooter from "@/components/web/public/Footer";

export default {
  name: "cominfo",
  components: {
    AwFooter,
    AwHeader,
  },
  data() {
    return {};
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    if (from.name === "cominfo") {
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
.box {
  height: 150vh;
  padding-top: 10vh;
}

.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}
/* Small */
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
/* Medium */
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
/* Large */
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

.landing-page .content .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 140px;
  height: 50vh;
  /* min-height: calc(100vh - 80px); */
}
@media (max-width: 767px) {
  .landing-page .content .container {
    gap: 0;
    min-height: calc(100vh - 101px);
    justify-content: center;
    flex-direction: column-reverse;
  }
}
@media (max-width: 767px) {
  .landing-page .content .info {
    text-align: center;
    margin-bottom: 15px;
  }
}
.landing-page .content .info h1 {
  color: #5d5d5d;
  font-size: 44px;
  width: 200%;/*1005修改*/
  
}
.landing-page .content .info p {
  margin: 0;
  line-height: 1.6;
  font-size: 15px;
  color: #5d5d5d;
}
.landing-page .content .info button {
  border: 0;
  border-radius: 20px;
  padding: 12px 30px;
  margin-top: 30px;
  cursor: pointer;
  color: #fff;
  background-color: #6c63ff;
}
.landing-page .content .image img {
  max-width: 100%;
}
.image {
  width: 90%;
}

/*  members css */

.gtco-testimonials {
  position: relative;
  margin-top: 30px;

  h2 {
    font-size: 30px;
    text-align: center;
    color: #333333;
    margin-bottom: 50px;
  }

  .owl-stage-outer {
    padding: 30px 0;
  }

  .owl-nav {
    display: none;
  }

  .owl-dots {
    text-align: center;

    span {
      position: relative;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      display: block;
      background: #fff;
      border: 2px solid #01b0f8;
      margin: 0 5px;
    }

    .active {
      box-shadow: none;

      span {
        background: #01b0f8;
        box-shadow: none;
        height: 12px;
        width: 12px;
        margin-bottom: -1px;
      }
    }
  }

  .card {
    background: #fff;
    box-shadow: 0 8px 30px -7px #c9dff0;
    margin: 0 20px;
    padding: 0 10px;
    border-radius: 20px;
    border: 0;
    text-align: center;
    width: 20%;

    .card-img-top {
      max-width: 100px;
      border-radius: 50%;
      margin: 15px auto 0;
      box-shadow: 0 8px 20px -4px #95abbb;
      width: 100px;
      height: 100px;
    }

    h5 {
      color: #01b0f8;
      font-size: 21px;
      line-height: 1.3;

      span {
        font-size: 18px;
        color: #666666;
      }
    }

    p {
      font-size: 18px;
      color: #555;
      padding-bottom: 15px;
    }
  }

  .active {
    opacity: 0.5;
    transition: all 0.3s;
  }

  .center {
    opacity: 1;

    h5 {
      font-size: 24px;

      span {
        font-size: 20px;
      }
    }

    .card-img-top {
      max-width: 100%;
      height: 120px;
      width: 120px;
    }
  }
}

@media (max-width: 767px) {
  .gtco-testimonials {
    margin-top: 20px;
  }
}

.owl-carousel {
  .owl-nav button {
    &.owl-next,
    &.owl-prev {
      outline: 0;
    }
  }

  button.owl-dot {
    outline: 0;
  }
}

.member {
  display: flex;
  justify-content:space-evenly;
  margin-top: 10vh;
}
</style>

