<template>
  <div class="item">
    <div class="left">
      <check @click.native="checkClick" :is-active="carListItem.check"></check>
      <img :src="carListItem.img" alt="" />
    </div>
    <div class="right">
      <h3>{{ carListItem.title }}</h3>
      <p>{{ carListItem.desc }}</p>
      <div class="bottom">
        <span>&yen;{{ carListItem.lowNowPrice }}</span>
        <span>&times;{{ carListItem.count }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import Check from 'components/content/check/Check.vue'


export default {
  props: {
    carListItem: {
      typeof: Object,
      default() {
        return null
      }
    }
  },
  components: {
    Check
  },
  methods: {
    // 监听购物车列表项是否被选中
    checkClick() {
      this.carListItem.check = !this.carListItem.check
    }
  }

}
</script>
<style scoped>
.item {
  overflow: hidden;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.item img {
  width: 70px;
  height: 90px;
  margin-left: 2px;
  border-radius: 5px;
}
.left {
  width: 30%;
  display: flex;
  align-items: center;
}
.right {
  width: 70%;
}
.right h3,
p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
h3 {
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 18px;
}
p {
  font-size: 14px;
  color: #666;
}
.bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}
.bottom span:first-child {
  color: rgb(253, 63, 49);
}
</style>