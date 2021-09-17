<template>
  <div class="good-params" v-if="goodParams !== null">
    <div class="size">
      <table>
        <tr v-for="(item, index) in goodParams.tables" :key="index">
          <td v-for="(item2, index) in item" :key="index">{{ item2 }}</td>
        </tr>
      </table>
    </div>
    <div class="info" v-for="(item, index) in goodParams.infoSet" :key="index">
      <span>{{ item.key }}</span>
      <span>{{ item.value }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodParams: {
      type: Object,
      default() {
        return null
      }
    }
  }
}
</script>
<style scoped>
.good-params {
  padding: 40px 10px 0px 5px;
  background-color: rgb(245, 245, 245);
}
table {
  width: 100%;
  font-size: 14px;
  border-bottom: 4px solid #fff;
}
.size table tr {
  width: 25%;
  height: 40px;
}
.info {
  width: 100%;
  font-size: 14px;
}
.info span {
  display: inline-block;
  padding: 10px 10px 10px 0px;
  vertical-align: middle;
}
.info span:first-child {
  width: 30%;
}
.info span:last-child {
  width: 70%;
  color: var(--color-high-text);
}
</style>