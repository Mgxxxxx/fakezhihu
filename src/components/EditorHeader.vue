<template>
  <header class="editor-header px-1">
    <router-link class="mr-2 logo-wrapper" :to="{ name: 'Home' }">
      <img src="~@/assets/images/logo.png" alt="logo.png" class="logo" />
    </router-link>
    <div class="header-content">
      <span class="title">写文章</span>
    </div>
    <div class="functions">
      <el-dropdown class="publish mr-2" placement="bottom">
        <el-button
          type="primary"
          plain
          size="small"
          @click="$emit('relaseArticles')"
          >发布<i class="el-icon-arrow-down el-icon--right"></i
        ></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>测试内容</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="more mr-2" placement="bottom-end">
        <i class="el-icon-more-outline"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>草稿</el-dropdown-item>
          <el-dropdown-item>我的文章</el-dropdown-item>
          <el-dropdown-item>专栏 · 发现</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import request from "@/service";

export default {
  name: "EditorHeader",
  data() {
    return {
      name: "",
      isLogin: false,
    };
  },
  mounted() {
    this.checkLogin();
  },
  methods: {
    async checkLogin() {
      await request.get("/users/checkLogin").then((res) => {
        if (res.status === 200) {
          this.name = res.data.name;
          this.isLogin = true;
        } else {
          this.$router.push({ name: "signup" });
          this.isLogin = false;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.editor-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ececec;
  box-shadow: 0 1px 1px #ececec;
  height: 49px;
  .logo {
    width: 34px;
    vertical-align: middle;
  }
  .header-content {
    flex: 1;
    .title {
      font-weight: bold;
    }
  }
}
</style>
