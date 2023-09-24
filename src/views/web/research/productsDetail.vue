<template>
  <div>
    <AwHeader class="productDetail_header"></AwHeader>
    <div class="box">123123</div>
    <AwFooter></AwFooter>
  </div>
</template>

<script>
import AwHeader from "@/components/web/public/Header.vue";
import AwFooter from "@/components/web/public/Footer.vue";
export default {
  name: "productsDetail",
  components: { AwHeader, AwFooter },
  mounted(){
    console.log(`output->`,    this.$route)

  }
};
</script>

<style>
.box {
  height: 100vh;
}
.productDetail_header{
  background-color: rgba(255, 255, 255, .5);
  backdrop-filter: blur(10px);
  //border-bottom: 1px solid #eff0f1;
}

.box {
  padding-top: 60px;
}


</style>