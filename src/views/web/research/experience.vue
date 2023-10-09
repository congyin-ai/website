<template>
  <div class="exp">
    <AwHeader class="exp_header" ref="exp_header"></AwHeader>
    <div class="box">

      <h1 class="hint">请登录后查看</h1>
    </div>
    <AwFooter></AwFooter>
  </div>
</template>

<script>
import AwHeader from "../../../components/web/public/Header";
import AwFooter from "../../../components/web/public/Footer";



export default {
  name: "exp",
  components: {

    AwFooter,
    AwHeader,
  },

  
  

};
</script>

<style lang = "less" scoped>
@hover_color: #3370ff;
* {
  margin: 0;
  padding: 0;
}


.exp_header {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  //border-bottom: 1px solid #eff0f1;
}

.box {
  padding-top: 60px;
  min-height: 70vh;
  //background-size: cover;
}


</style>
<style lang = "less">
.hint{
  margin-top: 20vh;
  margin-left: 40%;
}
</style>
