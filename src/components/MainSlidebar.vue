<template>
  <div>
    <el-card class="no-padding mb-1">
      <icon-buttons :exists="['question', 'article', 'thinking']" />
      <div class="draft nav-link">
        <a href="javascript:;">
          <span class="text">
            <span class="iconfont icon-drafts middle-icon"></span>
            我的草稿
          </span>
          <span class="num">2</span>
        </a>
      </div>
    </el-card>
    <el-card class="no-padding mb-1">
      <icon-buttons :exists="['live', 'book', 'desk', 'expert', 'consult']" />
    </el-card>
    <el-card class="no-padding mb-1">
      <div class="nav-link">
        <a href="javascript:;">
          <span class="text">
            <i class="el el-icon-star-on middle-icon"></i>
            我的收藏
          </span>
        </a>
      </div>
      <div class="nav-link">
        <a href="javascript:;">
          <span class="text">
            <span class="iconfont icon-question middle-icon"></span>
            我关注的问题
          </span>
          <span class="num">320</span>
        </a>
      </div>
      <div class="nav-link">
        <a href="javascript:;">
          <span class="text">
            <span class="iconfont icon-personadd middle-icon"></span>
            我的邀请
          </span>
          <span class="num">21</span>
        </a>
      </div>
      <div class="nav-link">
        <a href="javascript:;">
          <span class="text">
            <span class="iconfont icon-xiaoxi middle-icon"></span>
            站务中心
          </span>
        </a>
      </div>
      <div class="nav-link">
        <a href="javascript:;">
          <span class="text">
            <span class="iconfont icon-banquan middle-icon"></span>
            版权中心
          </span>
        </a>
      </div>
    </el-card>
    <sidebar-footer />
  </div>
</template>

<script>
import IconButtons from "@/components/IconButtons.vue";
import SidebarFooter from "@/components/SidebarFooter.vue";

export default {
  name: "MainSlidebar",
  components: {
    IconButtons,
    SidebarFooter,
  },
};
</script>

<style scoped lang="scss">
.no-padding {
  .nav-link:first-child {
    margin-top: 0px;
  }
  .nav-link:last-child {
    margin-bottom: 0px;
  }
}

.nav-link {
  cursor: pointer;
  margin: 20px 14px;
  // padding: 10px 0;
  a {
    text-decoration: none;
    color: black;
    .text {
      font-size: 14px;
      & + span {
        float: right;
      }
    }
  }
}
</style>
