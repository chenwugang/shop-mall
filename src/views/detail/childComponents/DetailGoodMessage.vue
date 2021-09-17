<template>
  <div v-if="detailGoodMessage !== null" class="detail-good-message">
    <div class="desc">
      <span>{{ detailGoodMessage.desc }}</span>
      <div class="decoration1">
        <span class="left1"></span>
        <span class="right1"></span>
      </div>
      <div class="decoration2">
        <span class="right1"></span>
        <span class="left1"></span>
      </div>
    </div>
    <div class="detail-image-desc">
      {{ detailGoodMessage.detailImage[0].key }}
    </div>
    <div
      class="imgshow"
      v-for="(item, index) in detailGoodMessage.detailImage[0].list"
      :key="index"
    >
      <img :src="item" alt="" @load="imgload" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detailGoodMessage: {
      type: Object,
      defalut() {
        return null
      }
    }
  },
  data() {
    return {
      count: 0,
      imgLength: 0
    }
  },
  methods: {
    imgload() {
      // console.log('hah')
      // 判断图片是否加载完成
      if (++this.count === this.imgLength) {
        this.$emit('imgLoad')
      }
    }
  },
  watch: {
    detailGoodMessage() {
      this.imgLength = this.detailGoodMessage.detailImage[0].list.length
    }
  }
}
</script>
<style scoped>
.detail-good-message {
  overflow: hidden;
  margin-top: 5px;
  padding: 0px 10px;
  background-color: rgb(245, 245, 245);
}
.desc {
  position: relative;
  margin-top: 30px;
  font-size: 14px;
}
.decoration1 {
  position: absolute;
  display: flex;
  top: -18px;
  left: 0;
}
.decoration2 {
  position: absolute;
  display: flex;
  bottom: -10px;
  right: 0;
}
.desc .left1 {
  display: block;
  width: 5px;
  height: 5px;
  background-color: #000;
}
.desc .right1 {
  display: block;
  width: 100px;
  height: 1px;
  margin-top: 5px;
  background-color: #666;
}
.desc .decoration1 .left1 {
  display: block;
  width: 5px;
  height: 5px;
  background-color: #000;
}
.desc .decoration1 .right1 {
  display: block;
  width: 100px;
  height: 1px;
  background-color: #666;
}
.detail-image-desc {
  margin-top: 10px;
  height: 30px;
}
.detail-image-desc {
  margin-top: 20px;
  color: #000;
}
.imgshow img {
  width: 100%;
  height: 100%;
}
</style>