<template>
  <swiper>
    <swiper-item v-for="(item, index) in banner.list" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="swiperImgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  data() {
    return {
      isLoad: false,
    };
  },
  props: {
    // 父组件传过来的轮播图数据
    banner: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    swiperImgLoad() {
      // 发出事件一次就行
      if (!this.isLoad) this.$emit("swiperImgLoad");
      this.isLoad = true;
    },
  },
};
</script>

<style>
</style>
