<template>
  <div>
    <div class="comment-actions">
      <el-button class="btn-text-gray" size="medium" type="text">
        <span class="iconfont icon-zantongfill"></span>
        {{ JSON.parse(item.status.voteUp).length }}
      </el-button>
      <el-button
        class="btn-text-gray"
        size="medium"
        type="text"
        v-show="item.comment.length !== 0"
        @click="commentListShow = true"
      >
        <span class="iconfont icon-chat"></span>查看回复
      </el-button>
      <el-button
        class="btn-text-gray hover-hidden"
        size="medium"
        type="text"
        @click="replyShow = true"
        v-show="!replyShow"
        v-if="!deleteShow"
      >
        <span class="iconfont icon-reply"></span>回复
      </el-button>
      <el-button
        class="btn-text-gray"
        size="medium"
        type="text"
        @click="replyShow = false"
        v-show="replyShow"
        v-if="!deleteShow"
      >
        <span class="iconfont icon-reply"></span>取消回复
      </el-button>
      <el-button
        class="btn-text-gray hover-hidden"
        size="medium"
        type="text"
        v-show="deleteShow"
        @click="deleteComment()"
      >
        <i class="el-icon-delete"></i>删除
      </el-button>
      <el-button class="btn-text-gray hover-hidden" size="medium" type="text">
        <span class="iconfont icon-dislike"></span>
        {{ JSON.parse(item.status.voteDown).length }}
      </el-button>
      <el-button class="btn-text-gray hover-hidden" size="medium" type="text">
        <span class="iconfont icon-Flag"></span>举报
      </el-button>
      <el-card class="comment" v-if="commentListShow">
        <comment-list :targetId="item.id" :targetType="3" />
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
    </div>
    <div class="reply clearfix" v-show="replyShow">
      <el-input class="input" type="text" v-model="replyContent" size="small" />
      <el-button size="mini" type="primary" @click="createComment()"
        >发布</el-button
      >
    </div>
  </div>
</template>

<script>
import { getCookies } from "@/lib/utils";
import request from "@/service";

export default {
  name: "CommentItemActions",
  props: ["item"],
  data() {
    return {
      replyShow: false,
      replyContent: "",
      commentListShow: false,
    };
  },
  computed: {
    deleteShow() {
      return this.item.author
        ? this.item.author.id === parseFloat(getCookies("id"))
        : false;
    },
  },
  methods: {
    async createComment() {
      await request
        .post("/comments", {
          targetId: this.item.id,
          targetType: 3,
          content: this.replyContent,
          creatorId: getCookies("id"),
        })
        .then((res) => {
          if (res.data.status === 201) {
            this.$Message.success("评论成功");
            this.$emit("getComments");
            this.replyShow = false;
            this.replyContent = "";
          }
        });
    },
    async deleteComment() {
      await request
        .delete("/comments", {
          data: {
            id: this.item.id,
            creatorId: getCookies("id"),
          },
        })
        .then((res) => {
          if (res.data.status === 202) {
            this.$Message.success("删除成功");
            this.$emit("getComments");
          }
        });
    },
  },
};
</script>

<style scoped lang="scss">
.hover-hidden {
  visibility: hidden;
}
.comment-actions {
  &:hover .hover-hidden {
    visibility: visible;
  }
  margin-left: 28px;
}
.btn-text-gray {
  color: #8590a6;
}
.reply {
  margin-bottom: 10px;
  margin-left: 28px;
  .input {
    margin-bottom: 5px;
  }
  .el-button {
    float: right;
  }
}
</style>
