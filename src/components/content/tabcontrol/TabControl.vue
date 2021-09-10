<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in tabControlData"
      :key="index"
      :class="{ active: index === current }"
      class="tab-control-item"
    >
      <span @click="itemClick(index)">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabControlData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.current = index;
      this.$emit("tabControlClick", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px 3px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>
