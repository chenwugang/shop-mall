<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
</script>

<style>
#tab-bar {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  bottom: 0;
  box-shadow: 0 -0.5px 3px rgba(100, 100, 100, 0.3);
}
</style>
