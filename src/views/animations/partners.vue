<template>
<div>nihao</div>
  <!-- <div id="app">
    <ul id="banner" ref="banner">
      <li v-for="(image, index) in images" :key="index" @mouseover.native="stop" @mouseleave.native="start">
        <img :src="image.src" :style="{width: '400px', height: '200px'}">
      </li>
    </ul>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: './1.jpg' },
        { src: './2.jpg' },
        { src: './3.jpg' },
        { src: './4.jpg' },
        { src: './5.jpg' },
      ],
      sz:[],
      szdiv:[],
      timer:null
    }
  },
  mounted() {
    // this.start()
  },
  beforeDestroy() {
    // this.stop()
  },
  methods: {
    // start() {
    //   this.timer = setInterval(this.get_next, 3000)
    // },
    // stop() {
    //   clearInterval(this.timer)
    // },
    // get_next() {
    //     let give_up = this.sz[len];
    //     sz.pop();
    //     sz.unshift(give_up);
    //     for (let i = 0; i < sz.length; i++) {
    //       sz[i].style.zIndex = i;
    //       sz[i].style.transform = "scale(1)";
    //     }
    //     sz[len - 2].style.left = "0px";
    //     sz[len - 1].style.zIndex = 100;
    //     sz[len - 1].style.left = "200px";
    //     sz[len - 1].style.transform = "scale(1.3)";
    //     sz[len - 1].style.opacity = 1;
    //     sz[len].style.left = "400px";
    //     sync_szdiv();
    // },
    // get_pre() {
    //   let give_up = sz[0];
    //   sz.shift();
    //   sz.push(give_up);
    //   for (let i = 0; i < sz.length; i++) {
    //     sz[i].style.zIndex = i;
    //     sz[i].style.transform = "scale(1)";
    //   }
    //   sz[len - 2].style.left = "0px";
    //   sz[len - 1].style.zIndex = 100;
    //   sz[len - 1].style.left = "200px";
    //   sz[len - 1].style.transform = "scale(1.3)";
    //   sz[len - 1].style.opacity = 1;
    //   sz[len].style.left = "400px";

    //   sync_szdiv();
    // },
  }
}
</script>

<style scoped>
/* #app {
  font-family: Arial, sans-serif;
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

#banner {
  list-style-type: none;
} */
</style>
