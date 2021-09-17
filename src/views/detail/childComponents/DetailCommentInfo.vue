<template>
  <div class="comment" v-if="commentInfo !== null">
    <div class="header">
      <span>用户评价({{ commentInfo.cRate }})条</span>
      <span>更多</span>
    </div>
    <div class="body">
      <div class="user">
        <img :src="commentInfo.img" alt="" />
        <span>{{ commentInfo.name }}</span>
      </div>
      <p class="content">{{ commentInfo.content }}</p>
      <div class="time">
        <span>{{ commentInfo.time | dateFormat("yyyy-mm-dd") }}</span>
        <span> {{ commentInfo.style }}</span>
      </div>
      <div class="images" v-if="commentInfo.images !== undefined">
        <img
          :src="item"
          alt=""
          v-for="(item, index) in commentInfo.images"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    commentInfo: {
      type: Object,
      defalut() {
        return null
      }
    }
  }
}
</script>
<style scoped>
.comment {
  margin-top: 4px;
  padding: 0px 5px;
  background-color: rgb(245, 245, 245);
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #ccc;
}
.header span:last-child::after {
  content: ">";
  margin-left: 5px;
  font-size: 14px;
}
.body {
  padding-bottom: 30px;
  border-bottom: 1px solid #ccc;
}
.user {
  margin-top: 10px;
  font-size: 16px;
  color: #333;
}
.user img {
  width: 40px;
  height: 40px;
  margin-right: 8px;
  vertical-align: middle;
  border-radius: 50%;
}
.content {
  margin-top: 10px;
  line-height: 1.5;
  font-size: 14px;
  color: #666;
}
.time {
  margin-top: 8px;
  font-size: 13px;
  color: #aaa;
}
.images {
  margin-top: 8px;
}
.images img {
  width: 80px;
  height: 80px;
  margin-right: 10px;
}
</style>