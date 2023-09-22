<template>
  <div class="carousel">
    <transition-group name="carousel-slide" tag="div">
      <div v-for="(item, index) in images" :key="item.id" v-show="currentIndex === index">
        <img :src="item.src" :alt="item.alt" class="current-slide">
      </div>
      <div v-for="(item, index) in images" :key="item.id" v-show="currentIndex !== index">
        <img :src="item.src" :alt="item.alt" class="other-slide">
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { id: 1, src: '@/assets/img/focus/bilibili.png', alt: 'Image 1' },
        { id: 2, src: '@/assets/img/focus/bilibili.png', alt: 'Image 2' },
        { id: 3, src: '@/assets/img/focus/bilibili.png', alt: 'Image 3' }
      ],
      currentIndex: 0,
      timer: null
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeDestroy() {
    this.stopCarousel();
  },
  methods: {
    startCarousel() {
      this.timer = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
    stopCarousel() {
      clearInterval(this.timer);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  }
};
</script>

<style>
.carousel {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.carousel-slide-enter-active,
.carousel-slide-leave-active {
  transition: all 0.5s;
}

.carousel-slide-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.carousel-slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.current-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.other-slide {
  position: absolute;
  top: 0;
  width: 70%;
  height: 70%;
  opacity: 0.5;
  pointer-events: none;
}

.other-slide:nth-child(1) {
  transform: translateX(-30%);
  z-index: -1;
}

.other-slide:nth-child(3) {
  transform: translateX(30%);
  z-index: -1;
}
</style>