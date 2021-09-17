<template>
  <div class="detail">
    <!-- 导航栏 -->
    <detail-nav-bar
      class="detail-nav"
      @itemClick="itemClick"
      ref="nav"
    ></detail-nav-bar>
    <scroll
      class="wrapper"
      ref="scroll"
      @showBackTop="contentClick"
      :probe-type="3"
    >
      <!-- 轮播图区域 -->
      <detail-swiper :imgData="topImages"></detail-swiper>
      <!-- 商品基本信息区域 -->
      <detail-base-message
        :good-base-message="baseMessageData"
      ></detail-base-message>
      <!-- 商家基本信息区域 -->
      <detail-shop-message :shop-info="shopInfo"></detail-shop-message>
      <!-- 商品详细信息区域 -->
      <detail-good-message
        :detail-good-message="detailGoodMessage"
        @imgLoad="imgLoad"
      ></detail-good-message>
      <!-- 商品参数信息区域 -->
      <detail-good-params
        :good-params="goodParams"
        ref="params"
      ></detail-good-params>
      <!-- 评论信息区域 -->
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <!-- 推荐信息区域 -->
      <good-list
        :good-list="recommendData"
        class="recommend"
        ref="recomment"
      ></good-list>
    </scroll>
    <detail-bottom-bar @addCar="addCar"></detail-bottom-bar>
    <scroll-top
      @click.native="scrollTopClick"
      v-show="isShowBackTop"
    ></scroll-top>
  </div>
</template>
<script>
// 子组件
import DetailNavBar from 'views/detail/childComponents/DetailNavBar.vue'
import DetailSwiper from 'views/detail/childComponents/DetailSwiper.vue'
import DetailBaseMessage from 'views/detail/childComponents/DetailBaseMessage.vue'
import DetailShopMessage from 'views/detail/childComponents/DetailShopMessage.vue'
import DetailGoodMessage from 'views/detail/childComponents/DetailGoodMessage.vue'
import DetailGoodParams from 'views/detail/childComponents/DetailGoodParams'
import DetailCommentInfo from 'views/detail/childComponents/DetailCommentInfo.vue'
import DetailBottomBar from 'views/detail/childComponents/DetailBottomBar.vue'


// 公共组件
import Scroll from "components/common/scroll/Scroll.vue";
import GoodList from "components/content/goodlist/GoodList.vue"

// 导入混入的数据
import { backTop } from "../../common/mixin"

// 导入网络请求
import { getDetailData, Goods, ShopInfo, Goodparams, CommentInfo, getRecommendData } from 'network/detail.js'

export default {
  name: 'Detail',
  mixins: [backTop],
  data() {
    return {
      // 传过来的每一个商品的id
      id: null,
      // 轮播图数据
      topImages: [],
      // 商品基本信息数据
      baseMessageData: null,
      // 商家基本数据
      shopInfo: null,
      // 商品详情数据
      detailGoodMessage: null,
      // 商品的参数信息
      goodParams: null,
      // 评论相关信息
      commentInfo: null,
      // 推荐相关数据信息
      recommendData: null,
      // 记录每个组件到顶部的距离
      TableContorlOffsetTop: [],
      // 当前滚动位置每个 tabControl 的索引
      currentIndex: 0,
    }
  },
  created() {
    // 保存每一个商品的id
    this.id = this.$route.params.iid
    // 请求详情页数据
    this.getDetailData(this.id)
    // 获取推荐区域的数据
    this.getRecommendData()
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseMessage,
    DetailShopMessage,
    DetailGoodMessage,
    DetailGoodParams,
    DetailCommentInfo,
    GoodList,
    Scroll,
    DetailBottomBar,

  },
  methods: {
    // 封装请求详情页数据方法
    getDetailData(id) {
      getDetailData(id)[1].then((res) => {
        // 获取轮播图的数据
        this.topImages = res.data.result.itemInfo.topImages
        // 获取基本信息的数据
        // console.log(res)
        const result = res.data.result
        this.baseMessageData = new Goods(result.itemInfo, result.columns, result.shopInfo.services)
        // console.log(this.baseMessageData)
        //商家的基本信息
        this.shopInfo = new ShopInfo(result.shopInfo)
        // console.log(this.shopInfo)
        // 商品的详情数据
        this.detailGoodMessage = result.detailInfo
        // console.log(this.detailGoodMessage)
        // 获取商品参数
        this.goodParams = new Goodparams(result.itemParams)
        // console.log(this.goodParams)
        // 获取评论相关信息
        this.commentInfo = new CommentInfo(result.rate)
        // console.log(this.commentInfo)
      })
    },
    // 封装推荐相关数据方法
    getRecommendData() {
      getRecommendData()[1].then(res => {
        // console.log(res)
        this.recommendData = res.data.data.list
        // console.log(this.recommendData)
      })
    },
    // 图片加载完毕刷新
    imgLoad() {
      this.$refs.scroll.scroll.refresh()
      // this.$nextTick(() => {
      // 监听每个 tableControl 到顶部的高度
      this.TableContorlOffsetTop = []
      this.TableContorlOffsetTop.push(0)
      this.TableContorlOffsetTop.push(this.$refs.params.$el.offsetTop)
      this.TableContorlOffsetTop.push(this.$refs.comment.$el.offsetTop)
      this.TableContorlOffsetTop.push(this.$refs.recomment.$el.offsetTop)
      this.TableContorlOffsetTop.push(Number.MAX_VALUE)
      // console.log(this.TableContorlOffsetTop)
      // })
    },
    // 监听每个 tabControl 的点击
    itemClick(index) {
      this.$refs.scroll.scrollTop(0, -this.TableContorlOffsetTop[index], 1000)
    },
    // 监听滚动
    contentClick(position) {
      console.log()
      let length = this.TableContorlOffsetTop.length
      let height = -this.$refs.scroll.getScrollY()
      // console.log(height)
      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex !== i && (height >= this.TableContorlOffsetTop[i] && height < this.TableContorlOffsetTop[i + 1])) {
          this.currentIndex = i
          // console.log(this.currentIndex)
        }
      }
      this.$refs.nav.currentIndex = this.currentIndex

      // 控制回到顶部的显示和隐藏
      this.isShowBackTop = -position.y > 1000;
    },
    // 添加到购物车
    addCar() {
      const addCarInfo = {}
      addCarInfo.id = this.id
      addCarInfo.img = this.topImages[0]
      addCarInfo.title = this.baseMessageData.title
      addCarInfo.desc = this.baseMessageData.desc
      addCarInfo.lowNowPrice = this.baseMessageData.lowNowPrice
      // 记录当前加入购物车的东西是否选中
      addCarInfo.check = false
      this.$store.dispatch('addCar', addCarInfo)
    }
  }
}
</script>
  
<style scoped>
.detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.wrapper {
  height: calc(100% - 44px);
}
.detail-nav {
  position: relative;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: #fff;
}
.back {
  position: absolute;
  right: 15px;
  bottom: 15px;
}
.recommend {
  margin-top: 10px;
  background-color: rgb(245, 245, 245);
}
</style>