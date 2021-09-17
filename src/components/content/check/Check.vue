<template>
  <div class="icon">
    <img src="~assets/img/cart/tick.svg" :class="{ active: isActive }" />
  </div>
</template>
<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
.icon {
  width: 20px;
  height: 20px;
}
img {
  width: 100%;
  height: 100%;
  border: 2px solid #ccc;
  vertical-align: top;
  border-radius: 50%;
  background-color: #fff;
}
.active {
  background-color: red;
}
</style>