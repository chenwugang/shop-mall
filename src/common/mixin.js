// 回到顶部相关数据
import ScrollTop from "components/content/scrolltop/ScrollTop.vue";
export let backTop = {
  components: {
    ScrollTop
  },
  data() {
    return {
      // 是否显示返回顶部图标
      isShowBackTop: false,
    }
  },
  methods: {
    // 点击回到顶部
    scrollTopClick() {
      // 父组件拿子组件的对象的方法回到顶部
      this.$refs.scroll.scrollTop(0, 0, 1000);
    }
  }
}