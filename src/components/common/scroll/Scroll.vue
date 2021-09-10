<template>
  <div class="wraper" ref="wraper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import ObserveDOM from "@better-scroll/observe-dom";
import ObserveImage from "@better-scroll/observe-image";

BScroll.use(Pullup);
BScroll.use(ObserveDOM);
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wraper, {
      probeType: this.probeType,
      // 上拉加载更多
      pullUpLoad: this.pullUpLoad,
      observeDOM: true,
      observeImage: true,
      // BetterScroll 默认会阻止浏览器的原生 click 事件，如果不阻止，需要给这个属性值设置为 true
      click: true,
    });
    // 可以实时监听当前滚到什么位置，但必设置 probeType 值
    // 传入值为 0、1 时不侦测实时位置 传入值为 2 时惯性后面的不侦测 传入值为 3 时 惯性后面的页侦测
    this.scroll.on("scroll", (position) => {
      this.$emit("showBackTop", position);
    });
    // 监听上拉加载更多， 但必须设置 pullUpLoad 值
    this.scroll.on("pullingUp", () => {
      // console.log('加载下一页')
      this.$emit("loadNextPage");
    });
  },
  methods: {
    // 回到顶部
    scrollTop(x, y, time) {
      this.scroll.scrollTo(x, y, time);
    },
    // 进行上拉加载更多
    finishPullUp() {
      //  监听多次上拉加载更多，默认只监听一次
      this.scroll.finishPullUp();
      // 重新计算可滚动的区域的高度
      this.scroll.refresh();
    },
    // 获取当前滚动的高度
    getScrollY() {
      return this.scroll.y
    }
  },
};
</script>

<style scoped>
</style>
