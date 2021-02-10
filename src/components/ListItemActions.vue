<template>
  <div>
    <div class="actions">
      <el-button
        v-if="showActionItems.indexOf('hot') >= 0"
        class="btn-text-gray"
        size="medium"
        type="text"
      >
        <span class="iconfont icon-fire"></span>
        {{ metrics_area.text }}
      </el-button>
      <el-button
        v-if="showActionItems.indexOf('vote') >= 0"
        size="small"
        type="primary"
        :plain="JSON.parse(activeStatus.voteUp).indexOf(userId) < 0"
        icon="el-icon-caret-top"
        @click="
          updateStatus(
            'voteUp',
            JSON.parse(activeStatus.voteUp).indexOf(userId) < 0 ? 'add' : 'pull'
          )
        "
        >赞同{{
          activeStatus ? JSON.parse(activeStatus.voteUp).length : 0
        }}</el-button
      >
      <el-button
        v-if="showActionItems.indexOf('vote') >= 0"
        size="small"
        :plain="JSON.parse(activeStatus.voteDown).indexOf(userId) < 0"
        type="primary"
        icon="el-icon-caret-bottom"
        @click="
          updateStatus(
            'voteDown',
            JSON.parse(activeStatus.voteDown).indexOf(userId) < 0
              ? 'add'
              : 'pull'
          )
        "
      ></el-button>
      <el-button
        v-if="showActionItems.indexOf('comment') >= 0"
        size="medium"
        type="text"
        class="btn-text-gray ml-2"
        @click="displayComments()"
      >
        <span class="iconfont icon-comment"></span>
        {{ comment_count }}条评论
      </el-button>
      <el-button
        v-if="showActionItems.indexOf('thanks') >= 0"
        size="medium"
        type="text"
        class="btn-text-gray ml-2"
        @click="
          updateStatus(
            'thanks',
            JSON.parse(activeStatus.thanks).indexOf(userId) < 0 ? 'add' : 'pull'
          )
        "
      >
        <span class="iconfont icon-heart"></span>
        {{ JSON.parse(activeStatus.thanks).indexOf(userId) &lt; 0?`${JSON.parse(activeStatus.thanks).length}个感谢`:'取消感谢' }}
      </el-button>
      <el-button
        v-if="showActionItems.indexOf('share') >= 0"
        size="medium"
        type="text"
        class="btn-text-gray ml-2"
        icon="el-icon-share"
        >分享
      </el-button>
      <el-button
        v-if="showActionItems.indexOf('favorite') >= 0"
        size="medium"
        type="text"
        class="btn-text-gray ml-2"
        icon="el-icon-star-on"
        >收藏
      </el-button>
      <el-dropdown
        v-if="showActionItems.indexOf('more') >= 0"
        placement="bottom"
        class="ml-2"
      >
        <el-button
          size="medium"
          type="text"
          class="btn-text-gray"
          icon="el-icon-more"
        >
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>没有帮助</el-dropdown-item>
          <el-dropdown-item>举报</el-dropdown-item>
          <el-dropdown-item>申请授权</el-dropdown-item>
          <el-dropdown-item>不感兴趣</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-card class="comment" v-if="commentListShow">
      <comment-list :targetId="itemId" :targetType="type" />
      <hr class="hr my-1" color="#dcdfe6" size="1" />
      <el-button
        class="block-center mb-1"
        type="info"
        size="mini"
        plain
        @click="commentListShow = false"
        >收起评论</el-button
      >
    </el-card>
    <el-dialog
      class="no-title-dialog"
      title=""
      :visible.sync="commentDialogShow"
      :modal-append-to-body="false"
    >
      <comment-list :targetId="itemId" :targetType="type" />
    </el-dialog>
  </div>
</template>

<script>
import request from "@/service";
import _ from "lodash";
import { getCookies } from "@/lib/utils";

export default {
  name: "ListItemActions",
  props: [
    "status",
    "commentShowType",
    "comment_count",
    "thanks_count",
    "voteup_count",
    "metrics_area",
    "showActionItems",
    "itemId",
    "type",
  ],
  inheritAttrs: false,
  data() {
    return {
      commentListShow: false,
      commentDialogShow: false,
      updatedStatus: {},
      userId: 0,
    };
  },
  methods: {
    displayComments() {
      if (this.commentShowType === "excerpt") {
        this.commentListShow = true;
      } else {
        this.commentDialogShow = true;
      }
    },
    async updateStatus(colName, opreation) {
      await request
        .put("/status", {
          statusId: this.status.id,
          colName,
          opreation,
          value: this.userId,
        })
        .then((res) => {
          if (res.data.status === 201) {
            this.$Message.success("修改成功");
            this.updatedStatus = res.data.content;
          }
        });
    },
  },
  computed: {
    activeStatus() {
      return _.isEmpty(this.updatedStatus) ? this.status : this.updatedStatus;
    },
  },
  mounted() {
    this.userId = parseFloat(getCookies("id"));
  },
};
</script>

<style scoped lang="scss">
.btn-text-gray {
  color: #8590a6;
}
.no-title-dialog {
  .comment-list {
    margin-top: -30px;
  }
}
</style>
