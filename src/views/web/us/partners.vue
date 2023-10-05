<template>
  <div>
    <AwHeader class="joinus_header" ref="joinus_header"></AwHeader>
    <div class="box">
      <div>
      <h1 style="font-size:38px;font-weight:400;font-family: 'PingFangSC-Regular,PingFang SC'">{{$t('us.partners.title')}}</h1>
      <h2 style="font-size:16px;font-weight:300;">{{$t('us.partners.subtitle')}}</h2>
      <h2 style="font-size:16px;font-weight:300;">{{$t('us.partners.busmail')}} <span class="website">cooperate@aicongin.com </span>{{$t('us.partners.devmail')}} <span class="website">opensource@aicongin.com</span></h2>
    </div>
    <div>
      <div class="a">
        <div class="b">
          <div class="c" style="--i: 0"></div>
          <div class="d" style="--i: 1"></div>
          <div class="e" style="--i: 2"></div>
          <div class="f" style="--i: 3"></div>
          <div class="g" style="--i: 4"></div>
        </div>
      </div>
    </div>
    <div class="table">
      <el-form size="bold">
        <el-form-item v-for="(item,index) in form" :key="index"><h2>{{item}}</h2></el-form-item>
      </el-form>
    </div>
    </div>
    <AwFooter style="margin-top: 80vh; height: 30vh"></AwFooter>
  </div>
</template>

<script>
import AwHeader from "@/components/web/public/Header";
import AwFooter from "../../../components/web/public/Footer";
export default {
  name: "joinus",
  components: {
    AwFooter,
    AwHeader,
    // CheckboxTransfer
  },
  data() {
    return {
      form:[
        'Micro SaaS开发者公会',
        '东莞理工学院量子力学算力组',
        '西南财经大学大数据研究院',
        '阳明心（深圳）文化产业有限公司'
      ]
    }
  },
};
</script>

<style lang="less" scoped>


.box{
  padding-top: 15vh;
  text-align: center;
}
.joinus_header {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  margin-top: 0;
  //border-bottom: 1px solid #eff0f1;
}

.a {
  position: relative;
  perspective: 1600px;
  top: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.b {

  width: 400px;
  height: 250px;
  position: absolute;
  transform-style: preserve-3d;
  animation: a 8s infinite cubic-bezier(0.7, 0, 0.17, 1);
}
.b div {
  
  position: absolute;
  background-size: 100%;
  opacity: 0.9;
  width: 400px;
  height: 250px;
  transform: rotateY(calc(var(--i) * 72deg)) translateZ(600px);
}
@keyframes a {
    0% {
    transform: translateZ(-100px) rotateY(0);
  }
  20% {
    transform: translateZ(-100px) rotateY(-72deg);
  }
  40% {
    transform: translateZ(-100px) rotateY(-144deg);
  }
  60% {
    transform: translateZ(-100px) rotateY(-216deg);
  }
  80% {
    transform: translateZ(-100px) rotateY(-288deg);
  }
  100% {
    transform: translateZ(-100px) rotateY(-360deg);
  }
  // 0% {
  //   transform: translateZ(-100px) rotateY(0);
  // }
  // 33% {
  //   transform: translateZ(-100px) rotateY(-120deg);
  // }
  // 66% {
  //   transform: translateZ(-100px) rotateY(-240deg);
  // }
  // 100% {
  //   transform: translateZ(-100px) rotateY(-360deg);
  // }
}
.c {
  background-image: url("../../../assets/img/carousel/app1.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  // width: auto;
}
.d {
  background-image: url("../../../assets/img/carousel/app2.png");
    background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
.e {
  background-image: url("../../../assets/img/carousel/app3.png");
    background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
.f{
  background-image: url("../../../assets/img/carousel/app4.png");
    background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
.g{
  background-image: url("../../../assets/img/carousel/app5.png");
    background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
.website{
  font-weight:400 ;
  font-family: 'PingFangSC-Regular,PingFang SC';
  font-size:18px;
  color:rgb(184, 176, 19)
  // margin-top: 10vh;
}

.table{
  margin-top: 80vh;
}

</style>