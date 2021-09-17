<template>
  <div v-if="shopInfo !== null" class="shop-message">
    <div class="header">
      <img :src="shopInfo.logo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="center">
      <div class="left">
        <ul>
          <li class="sell">
            <span>{{ shopInfo.sells }}</span>
            <span>总销量</span>
          </li>
          <li>
            <span class="count">{{ shopInfo.goodCount }}</span
            ><span>全部宝贝</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <div v-for="(item, index) in shopInfo.score" :key="index">
          <span>{{ item.name }}</span>
          <span :class="{ height: item.isBetter, low: !item.isBetter }">
            {{ item.score }}</span
          >
          <span :class="{ height: item.isBetter, low: !item.isBetter }">{{
            item.isBetter ? "高" : "低"
          }}</span>
        </div>
      </div>
    </div>
    <div class="bottom">进店逛逛</div>
  </div>
</template>
<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      score: null
    }
  }
}
</script>
<style scoped>
ul li {
  float: left;
  list-style: none;
}
.shop-message {
  margin-top: 5px;
  padding: 30px 0px;
  background-color: rgb(245, 245, 245);
}
.header {
  margin-bottom: 35px;
  font-size: 18px;
  color: #aaa;
}
.header img {
  height: 60px;
  height: 60px;
  margin: 0px 6px 0px 6px;
  vertical-align: middle;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
}
.center {
  overflow: hidden;
}
.center .left {
  width: 50%;
  border-right: 1px solid #ddd;
}
.center .left span:last-child {
  display: block;
}
.sell {
  margin: 0px 15px 0px 18px;
}
.left li {
  text-align: center;
}
.left li span:first-child {
  font-size: 20px;
  line-height: 2;
}
.left li span:last-child {
  font-size: 14px;
}
.right div span {
  font-size: 14px;
  margin-right: 8px;
}
.right div {
  margin-bottom: 10px;
}
.right div span:last-child {
  float: right;
}
.height {
  color: red;
}
.low {
  color: green;
}
.bottom {
  width: 120px;
  height: 25px;
  text-align: center;
  margin: 0 auto;
  margin-top: 10px;
  line-height: 25px;
  border-radius: 5px;
  background-color: #ddd;
}
</style>