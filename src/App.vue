<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 标签栏区域 -->
    <main-tabbar></main-tabbar>
  </div>
</template>
<script type="text/javascript">
import mainTabbar from "components/content/maintabbar/MainTabBar.vue";
export default {
  components: {
    mainTabbar,
  },
};
</script>
<style>
@import url("assets/css/base.css");
</style>
