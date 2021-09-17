<template>
  <scroll class="wrapper">
    <car-list-item
      v-for="(item, index) in getCarProduct"
      :key="index"
      :car-list-item="item"
    >
    </car-list-item>
  </scroll>
</template>
<script>
import CarListItem from './CarListItem'

import Scroll from 'components/common/scroll/Scroll.vue'

import { mapGetters } from 'vuex'

export default {
  components: {
    CarListItem,
    Scroll
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'getCarProduct',
    ])
  }
}
</script>
<style scoped>
.wrapper {
  height: calc(100vh - 44px - 60px - 35px);
  overflow: hidden;
}
</style>