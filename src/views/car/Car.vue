<template>
  <div class="car">
    <!-- 导航区域 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ getCarLength }})</div>
    </nav-bar>
    <!-- 商品列表区域 -->
    <car-list></car-list>
    <!-- 计算价格区域 -->
    <car-computed></car-computed>
  </div>
</template>

<script>
// 子组件
import NavBar from 'components/common/navbar/NavBar.vue'
import CarList from './childComponents/CarList'
import CarComputed from './childComponents/CarComputed'

import { mapGetters } from 'vuex'

export default {
  components: {
    NavBar,
    CarList,
    CarComputed
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'getCarLength',
    ])
  }
}
</script>

<style scoped>
/* .car {
  height: 100vh;
} */
.nav-bar {
  text-align: center;
  line-height: 44px;
  color: #fff;
  font-weight: 600;
  background-color: var(--color-tint);
}
</style>
