<template>
  <div class="wrapper">
    <div class="icon-item" v-if="exists.indexOf('question') >= 0">
      <router-link :to="{ name: 'detailsQuestion', params: { id: 5 } }">
        <i class="el-icon-tickets big-icon"></i>
        <p>写回答</p>
      </router-link>
    </div>
    <div class="icon-item" v-if="exists.indexOf('article') >= 0">
      <router-link :to="{ name: 'editor', params: { articleId: 0 } }">
        <i class="el-icon-edit-outline big-icon"></i>
        <p>写文章</p>
      </router-link>
    </div>
    <div class="icon-item" v-if="exists.indexOf('thinking') >= 0">
      <i class="iconfont icon-Thinking big-icon"></i>
      <p>写想法</p>
    </div>
    <div class="icon-item" v-if="exists.indexOf('live') >= 0">
      <i class="iconfont icon-thunder big-icon"></i>
      <p>Live</p>
    </div>
    <div class="icon-item" v-if="exists.indexOf('book') >= 0">
      <i class="iconfont icon-book big-icon"></i>
      <p>书店</p>
    </div>
    <div class="icon-item" v-if="exists.indexOf('desk') >= 0">
      <i class="iconfont icon-flower big-icon"></i>
      <p>圆桌</p>
    </div>
    <div class="icon-item" v-if="exists.indexOf('expert') >= 0">
      <i class="iconfont icon-pen big-icon"></i>
      <p>专栏</p>
    </div>
    <div class="icon-item" v-if="exists.indexOf('consult') >= 0">
      <i class="iconfont icon-money big-icon"></i>
      <p>付费咨询</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconButtons",
  props: ["exists"],
};
</script>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 30%);
  justify-content: space-between;
  .icon-item {
    text-align: center;
    cursor: pointer;
  }
  a {
    color: black;
  }
}
</style>
