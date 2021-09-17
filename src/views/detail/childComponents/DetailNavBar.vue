<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="container">
        <div
          class="item"
          v-for="(item, index) in titles"
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit("itemClick", index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  font-size: 14px;
}
.item {
  flex: 1;
  text-align: center;
}
.back {
  text-align: center;
}
.back img {
  vertical-align: middle;
}
.active {
  color: var(--color-high-text);
}
</style>