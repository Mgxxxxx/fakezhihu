<template>
  <header class="main-header">
    <div class="header-content">
      <router-link :to="{ name: 'Home' }" class="mr-2">
        <span><img src="~@/assets/images/logo.png" alt="主页" /></span>
      </router-link>
      <el-menu
        class="mr-2 header-menu"
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">发现</el-menu-item>
        <el-menu-item index="3">话题</el-menu-item>
      </el-menu>
      <el-input class="search mx-2" placeholder="请输入内容" v-model="keywords">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="primary" size="small" class="mr-2">提问</el-button>
      <div class="user-info" v-if="!isLogin">
        <router-link to="{name: 'signup}">登录</router-link>
      </div>
      <div class="user-info" v-if="isLogin">
        <i class="el-icon-bell mr-1 icon-item"></i>
        <i class="el-icon-message mr-1 icon-item"></i>
        <el-dropdown class="hand-click" placement="bottom" trigger="click">
          <span
            ><img
              class="avatar"
              src="~@/assets/images/userhead2.jpg"
              alt="头像"
          /></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div @click="goToPersonalPage">
                <span class="iconfont icon-personage_p">主页</span>
              </div>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <span class="iconfont icon-outline">设置</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <div @click="logout">
                <span class="iconfont icon-power-off">退出</span>
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHearder",
  data() {
    return {
      activeIndex: "1",
      keywords: "",
      isLogin: true,
    };
  },
  methods: {
    logout() {
      console.log("logout");
    },
    handleSelect(key) {
      console.log(key);
    },
    goToPersonalPage() {
      console.log("跳转用户主页");
    },
  },
};
</script>

<style scoped lang="scss">
.header-content {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 3px #90939980;
  img {
    height: 34px;
  }
  .search {
    max-width: 500px;
  }
  .header-menu {
    border-bottom: transparent;
    .el-menu-item {
      height: 49px;
    }
  }
  .user-info {
    display: flex;
    align-items: center;
    .icon-item {
      font-size: 24px;
    }
    .avatar {
      border-radius: 50%;
      cursor: pointer;
    }
  }
}
</style>
