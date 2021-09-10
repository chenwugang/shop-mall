<template>
  <div class="nav-bar">
    <div class="nav-bar-left"><slot name="left"></slot></div>
    <div class="nav-bar-center"><slot name="center"></slot></div>
    <div class="nav-bar-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
</script>

<style scoped>
.nav-bar {
  display: flex;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
}
.nav-bar-left,
.nav-bar-right {
  width: 66px;
}
.nav-bar-center {
  flex: 1;
}
</style>
