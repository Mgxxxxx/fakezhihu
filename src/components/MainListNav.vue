<template>
  <el-card class="list-nav-card">
    <el-menu class="listNav" :default-active="activeIndex" mode="horizontal">
      <el-menu-item index="1" v-if="type === 'main'">
        <router-link :to="{ name: 'Home' }">推荐</router-link>
      </el-menu-item>
      <el-menu-item index="2" v-if="type === 'main'">
        <router-link :to="{ name: 'Hot' }">热榜</router-link>
      </el-menu-item>
    </el-menu>
  </el-card>
</template>

<script>
export default {
  name: "MainListNav",
  props: ["type"],
  data() {
    return {
      routerNametoIndex: {
        Home: "1",
        Hot: "2",
      },
      activeIndex: "1",
    };
  },
  mounted() {
    this.activeIndex = this.routerNametoIndex[this.$route.name];
  },
};
</script>

<style scoped lang="scss">
.el-menu {
  margin-bottom: -20px;
  margin-top: -20px;
  border: transparent !important;
}
</style>
