<template>
  <div>
    <AwHeader class="joinus_header" ref="joinus_header"></AwHeader>
    <div class="box">
      <div>
      <h1 style="font-size:38px;font-weight:400;font-family: 'PingFangSC-Regular,PingFang SC'">合作伙伴</h1>
      <h2 style="font-size:16px;font-weight:300;">欢迎各位开发者、企业和机构与我们一起开创人工智能新时代</h2>
      <h2 style="font-size:16px;font-weight:300;">商务合作邮箱 <span class="website">cooperate@aicongin.com </span>开发者申请邮箱 <span class="website">opensource@aicongin.com</span></h2>
    </div>
    <div>
      <div class="a">
        <div class="b">
          <div class="c" style="--i: 0"></div>
          <div class="d" style="--i: 1"></div>
          <div class="e" style="--i: 2"></div>
        </div>
      </div>
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
body {
  background-color: rgb(154, 133, 250);
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
  background-size: cover;
  opacity: 0.9;
  width: 400px;
  height: 250px;
  transform: rotateY(calc(var(--i) * 120deg)) translateZ(600px);
}
@keyframes a {
  0% {
    transform: translateZ(-100px) rotateY(0);
  }
  33% {
    transform: translateZ(-100px) rotateY(-120deg);
  }
  66% {
    transform: translateZ(-100px) rotateY(-240deg);
  }
  100% {
    transform: translateZ(-100px) rotateY(-360deg);
  }
}
.c {
  background-image: url("xipu.png");
}
.d {
  background-image: url("app1.jpg");
}
.e {
  background-image: url("app1.jpg");
}
.website{
  font-weight:400 ;
  font-family: 'PingFangSC-Regular,PingFang SC';
  font-size:18px;
  color:rgb(184, 176, 19)
  // margin-top: 10vh;
}
</style>