<template>
  <div class="people" v-loading="userLoading">
    <el-card class="profile">
      <div class="profile-header-cover">
        <img src="~@/assets/images/bg16.jpg" alt="backgroundImg" />
      </div>
      <div class="profile-header-wrapper">
        <img :src="userInfo.avatarUrl" alt="userInfo.avatarUrl" />
        <div class="content">
          <p class="username">{{ userInfo.name }}</p>
          <div class="content-header" v-show="!userInfoEditorShow">
            <p class="introuduce">{{ userInfo.headline }}</p>
          </div>
          <div class="details" v-if="!detailsShow">个人信息的静态展示</div>
          <el-button
            class="btn-text-gray"
            icon="el-icon-arrow-down"
            type="text"
            v-if="detailsShow"
            @click="detailsShow = true"
            >查看详细资料</el-button
          >
          <el-button
            class="btn-text-gray"
            icon="el-icon-arrow-up"
            type="text"
            v-if="detailsShow"
            @click="detailsShow = false"
            >收起详细资料</el-button
          >
          <div class="btn-group">
            <div class="notActiveUser" v-show="!activeUser">
              主页用户非当前登录用户展示静态内容
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <div class="profile-main" v-loading="loading">
      <div class="profile-content">列表主要内容</div>
      <div class="profile-sidebar">
        <sidebar-footer />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarFooter from "@/components/SidebarFooter.vue";
import request from "@/service";
import { getCookies } from "@/lib/utils";

export default {
  name: "People",
  components: { SidebarFooter },
  mounted() {
    this.getUser();
  },
  computed: {
    activeUser() {
      return this.userInfo.id === parseFloat(getCookies("id"));
    },
  },
  data() {
    return {
      userInfo: {},
      userLoading: false,
      detailsShow: false,
      loading: false,
      userInfoEditorShow: true,
    };
  },
  methods: {
    async getUser() {
      this.userLoading = true;
      await request
        .get("/users", {
          params: { id: getCookies("id") },
        })
        .then((res) => {
          if (res.data.status === 200) {
            this.userInfo = res.data.content;
            this.userLoading = false;
          } else {
            this.$Message.error("获取用户信息失败，请稍后再试");
            this.$router.push({ name: "home" });
          }
        });
    },
  },
};
</script>

<style scoped lang="scss">
.people {
  .profile {
    .profile-header-cover {
      img {
        width: 100%;
      }
    }
  }
}
</style>
