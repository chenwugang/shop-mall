<template>
  <div class="detail-base-message" v-if="goodBaseMessage !== null">
    <div class="title">{{ goodBaseMessage.title }}</div>
    <div class="price">
      <span
        class="newPrice"
        :style="{ color: goodBaseMessage.discountBgColor }"
        >{{ goodBaseMessage.price }}</span
      >
      <div class="low" v-if="goodBaseMessage.discountDesc !== ''">
        <span class="oldPrice">{{ goodBaseMessage.oldPrice }}</span>
        <span
          :style="{
            backgroundColor: goodBaseMessage.discountBgColor,
            color: '#ffffff',
          }"
          >{{ goodBaseMessage.discountDesc }}</span
        >
      </div>
    </div>
    <div class="services">
      <span>{{ goodBaseMessage.columns[0] }}</span>
      <span>{{ goodBaseMessage.columns[1] }}</span>
      <span>{{ goodBaseMessage.services[0].name }}</span>
    </div>
    <div class="services-other">
      <span class="left">
        <img :src="goodBaseMessage.services[1].icon" alt="" />
        <span>{{ goodBaseMessage.services[1].name }}</span>
      </span>
      <span class="right">
        <img :src="goodBaseMessage.services[2].icon" alt="" />
        <span>{{ goodBaseMessage.services[2].name }}</span>
      </span>
      <span></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props: {
    goodBaseMessage: {
      type: Object,
      default() {
        return null
      }
    }
  },
}
</script>
<style scoped>
.detail-base-message {
  padding: 15px 5px;
  background-color: rgb(245, 245, 245);
}
.title {
  margin-bottom: 15px;
  text-indent: 15px;
  color: #222;
}
.price {
  overflow: hidden;
  text-align: center;
}
.newPrice {
  float: left;
  margin-right: 7px;
  font-size: 24px;
}
.low {
  float: left;
}
.oldPrice {
  float: left;
  margin-right: 5px;
  margin-top: 9px;
  color: #bbb;
  text-decoration: line-through;
}
.low span:last-child {
  float: left;
  height: 20px;
  padding: 0px 7px;
  line-height: 20px;
  font-size: 12px;
  border-radius: 12.5px;
}
.services {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding-bottom: 10px;
  font-size: 15px;
  color: #bbb;
  border-bottom: 1px solid #ccc;
}
.services-other {
  overflow: hidden;
  margin-top: 10px;
  padding: 10px 0px;
  font-size: 15px;
}
.services-other img {
  width: 15px;
  height: 15px;
  vertical-align: middle;
}
.services-other .left {
  float: left;
}
.services-other .right {
  float: right;
}
</style>