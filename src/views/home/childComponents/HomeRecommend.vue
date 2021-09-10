<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend.list" :key="index">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Object,
      default() {
        return null;
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  justify-content: space-around;
  padding: 10px 0 20px 0;
  text-align: center;
  font-size: 12px;
  border-bottom: 8px solid #eee;
}
img {
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
</style>
