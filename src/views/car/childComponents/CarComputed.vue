<template>
  <div class="car-computed">
    <div class="check-all">
      <check
        class="check"
        :is-active="isActive"
        @click.native="allCheck"
      ></check>
      <span>全选</span>
    </div>
    <div class="total">
      <span>合计&nbsp;</span>
      <span>{{ total }}</span>
    </div>
    <div class="pay">结算({{ checkLength }})</div>
  </div>
</template>
<script>
import Check from 'components/content/check/Check.vue'

import { mapGetters } from 'vuex'
export default {
  components: {
    Check
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'getCarProduct',
    ]),
    // 选中的物品总的价格计算
    total() {
      return '￥' + this.getCarProduct.filter(item => {
        return item.check
      }).reduce((total, item) => {
        return total + item.lowNowPrice * item.count
      }, 0).toFixed(2)
    },
    // 结算物品的数量
    checkLength() {
      return this.getCarProduct.filter(item => {
        return item.check
      }).length
    },
    // 全选是否选中
    isActive() {
      if (this.getCarProduct.length === 0) {
        return false
      }
      else {
        return this.getCarProduct.every(item => {
          return item.check === true
        })
      }
    }
  },
  methods: {
    allCheck() {
      if (this.isActive) {
        this.getCarProduct.forEach(item => item.check = false);
      }
      else {
        this.getCarProduct.forEach(item => item.check = true)
      }
    }
  }
}
</script>

<style scoped>
.check {
  width: 15px;
  height: 15px;
}
.car-computed {
  position: relative;
  bottom: 0;
  height: 35px;
  font-size: 12px;
  line-height: 35px;
  background-color: #ddd;
}
.check-all {
  float: left;
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 8px;
}
.check-all span {
  margin-left: 3px;
  color: #666;
}
.total {
  float: left;
  margin-left: 10px;
  color: #666;
}
.total span:last-child {
  font-size: 14px;
  color: rgb(255, 83, 0);
}
.pay {
  float: right;
  height: 100%;
  padding: 0px 20px;
  line-height: 35px;
  color: #fff;
  background-color: rgb(255, 83, 0);
}
</style>