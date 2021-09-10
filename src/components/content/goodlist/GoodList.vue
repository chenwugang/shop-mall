<template>
  <div class="good-list">
    <good-list-item
      v-for="(item, index) in goodList"
      :goodListItem="item"
      :key="index"
    />
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem.vue";
export default {
  props: {
    goodList: {
      type: Array,
      default() {
        return null;
      },
    },
  },
  components: {
    GoodListItem,
  },
};
</script>

<style scoped>
.good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
