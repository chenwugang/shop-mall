<template>
  <div class="bottom-bar">
    <div class="left">
      <div>
        <span></span>
        <span>客服</span>
      </div>
      <div>
        <span></span>
        <span>店铺</span>
      </div>
      <div>
        <span></span>
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div @click="addCar">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    addCar() {
      this.$emit('addCar')
    }
  }
}
</script>
<style scoped>
.bottom-bar {
  width: 100vw;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 44px;
  background-color: #fff;
}
.left {
  display: flex;
  width: 50%;
  height: 100%;
  font-size: 14px;
}
.right {
  width: 50%;
  height: 100%;
}
.left > div {
  flex: 1;
  text-align: center;
}
.left > div span:first-child {
  display: block;
  width: 20px;
  height: 20px;
  margin: 5px auto;
}
.left > div:nth-child(1) span:first-child {
  background: url(~assets/img/detail/detail_bottom.png) no-repeat 0px -47px;
  background-size: 100%;
}
.left > div:nth-child(2) span:first-child {
  background: url(~assets/img/detail/detail_bottom.png) no-repeat 0px -89px;
  background-size: 100%;
}
.left > div:nth-child(3) span:first-child {
  background: url(~assets/img/detail/detail_bottom.png) no-repeat 0px 2px;
  background-size: 100%;
}
.right {
  display: flex;
  text-align: center;
  line-height: 44px;
}
.right div {
  flex: 1;
}
.right div:first-child {
  background-color: rgb(255, 138, 0);
  color: #333;
}
.right div:last-child {
  background-color: var(--color-high-text);
  color: #fff;
}
</style>
