<template>
  <div class="good-list-item">
    <img :src="imgShow" @click="imgClick" />
    <div>
      <p>{{ goodListItem.title }}</p>
      <div class="span-text">
        <span class="price">{{ goodListItem.price }}</span>
        <span><img src="../../../assets/img/common/collect.svg" /></span>
        <span class="cfav">{{ goodListItem.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodListItem: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  methods: {
    imgClick() {
      this.$router.push('/detail/' + this.goodListItem.iid)
    }
  },
  computed: {
    imgShow() {
      return this.goodListItem.image || this.goodListItem.show.img
    }
  }
};
</script>

<style scoped>
.good-list-item {
  width: 48%;
  margin-top: 10px;
}
.good-list-item img {
  width: 100%;
  border-radius: 5px;
}
.good-list-item p {
  /* 单行文本溢出隐藏显示省略号 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 5px;
}
.good-list-item .span-text {
  margin: 2px auto;
  text-align: center;
}
.good-list-item .span-text .price {
  margin-right: 10px;
  color: var(--color-high-text);
}
.good-list-item .span-text img {
  width: 14px;
  height: 14px;
}
</style>