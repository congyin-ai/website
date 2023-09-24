<template>
  <div>
    <AwHeader class="productDetail_header"></AwHeader>
    <div class="box">
      <div class="container">
        <div class="item content-1">pic</div>
        <div class="item content-2">header</div>
        <div class="item sidebar">LLM简介</div>
      </div>
    </div>
    <AwFooter></AwFooter>
  </div>
</template>

<script>
import AwHeader from "@/components/web/public/Header.vue";
import AwFooter from "@/components/web/public/Footer.vue";
export default {
  name: "productsDetail",
  components: { AwHeader, AwFooter },
  mounted() {
    console.log(`output->`, this.$route);
  },
};
</script>

<style scoped>
.box {
  padding-top: 60px;
  /* background-color: #3b404e; */
  display: flex;
  justify-content: center;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  height: 100vh;
}

.productDetail_header {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  //border-bottom: 1px solid #eff0f1;
}

/*container css*/
.container {
  display: grid;
  width: 1300px;
  height: 800px;
  grid-template-columns: 20px 0.3fr 1fr;
  grid-template-rows: 80px 1fr 1fr 100px;
  grid-gap: 1rem;
  grid-template-areas:
    "header header header"
    " content-1 content-1 sidebar"
    " content-2 content-2 sidebar";
}

.sidebar {
  grid-area: sidebar;
}

.content-1 {
  grid-area: content-1;
}

.content-2 {
  grid-area: content-2;
}

.content-3 {
  grid-area: content-3;
}

/* OTHER STYLES */

.item {
  background-color: #1eaafc;
  background-image: linear-gradient(
    130deg,
    #6c52d9 0%,
    #1eaafc 85%,
    #3edfd7 100%
  );
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  color: #ffffff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
}

.sidebar {
  background-image: linear-gradient(203deg, #3edfd7 0%, #29a49d 90%);
}

.content-1,
.content-2,
.content-3 {
  background-image: linear-gradient(
    130deg,
    #6c52d9 0%,
    #1eaafc 85%,
    #3edfd7 100%
  );
}
</style>