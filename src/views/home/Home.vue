<template>
  <div id="home">
    <!-- 导航栏区域 -->
    <nav-bar class="nav-bar">
      <div slot="center" class="nav-bar-center">购物街</div>
    </nav-bar>
    <tab-control
      :tabControlData="tabControlData"
      @tabControlClick="tabControlClick"
      ref="tabControl1"
      v-show="isShow"
      class="tab-control"
    ></tab-control>
    <!-- 滚动区域 -->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @showBackTop="showBackTop"
      @loadNextPage="loadNextPage"
    >
      <!-- 轮播图区域 -->
      <home-swiper
        :banner="banner"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <!-- 推荐区域 -->
      <home-recommend :recommend="recommend"></home-recommend>
      <!-- 流行区域 -->
      <feature></feature>
      <!-- 控制区域 -->
      <tab-control
        :tabControlData="tabControlData"
        @tabControlClick="tabControlClick"
        ref="tabControl2"
      ></tab-control>
      <!-- 商品列表区域 -->
      <good-list :goodList="showGoods"></good-list>
    </scroll>
    <!-- 组件要监听事件要加上 .native修饰符 -->
    <scroll-top
      @click.native="scrollTopClick"
      v-show="isShowBackTop"
    ></scroll-top>
  </div>
</template>

<script>
// 子组件
import HomeSwiper from "./childComponents/HomeSwiper.vue";
import HomeRecommend from "./childComponents/HomeRecommend.vue";
import Feature from "./childComponents/feature.vue";

// 公共组件
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabcontrol/TabControl.vue";
import GoodList from "components/content/goodlist/GoodList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import ScrollTop from "components/content/scrolltop/ScrollTop.vue";

// 获取数据
import { getHomeMultiData, getHomeGoodList } from "network/home.js";

export default {
  created() {
    // 请求首页顶部数据
    this.getHomeMultiData();
    // 请求首页商品列表数据
    this.getHomeGoodList("pop");
    this.getHomeGoodList("new");
    this.getHomeGoodList("sell");
  },
  // 路由处于活跃状态调用该函数
  activated() {
    // 最好进行刷新
    this.$refs.scroll.scroll.refresh()
    // 滚到原先的位置
    switch (this.currentTabControl) {
      case 'pop':
        this.$refs.scroll.scrollTop(0, this.PopsaveY, 0)
        break
      case 'new':
        this.$refs.scroll.scrollTop(0, this.NewSaveY, 0)
        break
      case 'sell':
        this.$refs.scroll.scrollTop(0, this.SellSaveY, 0)
        break
    }
  },
  // 路由处于不活跃活跃状态调用该函数
  deactivated() {
    switch (this.currentTabControl) {
      case 'pop':
        this.PopsaveY = this.$refs.scroll.getScrollY()
        break
      case 'new':
        this.NewSaveY = this.$refs.scroll.getScrollY()
        break
      case 'sell':
        this.SellSaveY = this.$refs.scroll.getScrollY()
        break
    }
    // 记录原先滚动的位置
    // this.saveY = this.$refs.scroll.getScrollY()
    console.log(this.PopsaveY)
    console.log(this.NewSaveY)
    console.log(this.SellSaveY)
    console.log('------------------')
  },
  data() {
    return {
      // 轮播图数据
      banner: {},
      // 推荐信息数据
      recommend: {},
      // 控制栏数据
      tabControlData: ["流行", "新款", "精选"],
      // 商品列表数据
      goodList: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      // 控制区域当前点击的是谁
      currentTabControl: "pop",
      // 是否显示返回顶部图标
      isShowBackTop: false,
      // 控制区域到顶部的距离
      tabControlOffsetTop: null,
      // 开始是否显示顶部的tabControl
      isShow: false,
      //记录滚动的高度
      PopsaveY: 0,
      NewSaveY: 0,
      SellSaveY: 0
    };
  },
  computed: {
    showGoods() {
      return this.goodList[this.currentTabControl].list;
    },
  },
  methods: {
    // 数据请求代码
    getHomeMultiData() {
      getHomeMultiData()[0].then((res) => {
        // console.log(res)
        this.banner = res.data.data.banner;
        this.recommend = res.data.data.recommend;
      });
    },
    getHomeGoodList(type) {
      const page = this.goodList[type].page + 1;
      getHomeGoodList(type, page)[1].then((res) => {
        // console.log(res)
        this.goodList[type].list.push(...res.data.data.list);
        this.goodList[type].page = page;
      });
    },
    // 事件监听代码

    // 不同控制栏的对应不同的商品
    tabControlClick(index) {
      // console.log(index)

      switch (index) {
        case 0:
          this.currentTabControl = "pop";
          break;
        case 1:
          this.currentTabControl = "new";
          break;
        case 2:
          this.currentTabControl = "sell";
          break;
      }
      this.$refs.tabControl1.current = index
      this.$refs.tabControl2.current = index
    },
    // 点击回到顶部
    scrollTopClick() {
      // 父组件拿子组件的对象的方法回到顶部
      this.$refs.scroll.scrollTop(0, 0, 1000);
    },
    // 控制显示和隐藏
    showBackTop(position) {
      // 回到顶部的显示和隐藏
      this.isShowBackTop = -position.y > 1000;
      // 控制
      this.isShow = -position.y > this.tabControlOffsetTop;
      // console.log(position.y)
      // console.log(this.tabControlOffsetTop)
    },
    // 加载下一页
    loadNextPage() {
      this.getHomeGoodList(this.currentTabControl);
      // 父组件拿子组件的对象的方法，监听多次上拉加载更多，默认只监听一次
      this.$refs.scroll.finishPullUp();
    },
    // 图片加载完毕后拿到 tabControl距离顶部的高度
    swiperImgLoad() {
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      // console.log(this.tabControlOffsetTop)
    },
  },
  components: {
    HomeSwiper,
    HomeRecommend,
    Feature,
    NavBar,
    TabControl,
    GoodList,
    Scroll,
    ScrollTop,
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.nav-bar-center {
  text-align: center;
}
.tab-control {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 60px;
  left: 0;
  right: 0;
  background-color: #fff;
  overflow: hidden;
}
</style>
