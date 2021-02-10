<template>
  <div class="comment-list" v-loading="loading">
    <p v-show="commentList.length === 0">当前没有评论</p>
    <p v-show="commentList.length !== 0">共{{ commentList.length }}条评论</p>
    <comment-item
      v-for="(comment, index) in commentList"
      :key="index"
      :item="comment"
      @getComments="getComments"
    />
    <div class="comment-part clearfix">
      <el-input class="comment-input" v-model="comment" />
      <el-button
        class="comment-btn"
        type="primary"
        @click="createComment()"
        size="small"
        >发布</el-button
      >
    </div>
  </div>
</template>

<script>
import request from "@/service";
import { getCookies } from "@/lib/utils";
import CommentItem from "@/components/CommentItem";

export default {
  name: "CommentList",
  props: ["targetId", "targetType"],
  data() {
    return {
      comment: "",
      loading: true,
      commentList: [],
    };
  },
  components: { CommentItem },
  mounted() {
    this.getComments();
  },
  methods: {
    async getComments() {
      this.loading = true;
      await request
        .get("/comments", {
          params: {
            targetId: this.targetId,
            targetType: this.targetType,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            this.commentList = res.data.list;
            this.loading = false;
          } else {
            this.$Message.error(res.error);
          }
        });
    },
    async createComment() {
      await request
        .post("/comments", {
          targetId: this.targetId,
          targetType: this.targetType,
          content: this.comment,
          creatorId: getCookies("id"),
        })
        .then((res) => {
          if (res.data.status === 201) {
            this.$Message.success("评论成功");
            this.comment = "";
            this.getComments();
          }
        });
    },
  },
};
</script>

<style scoped lang="scss">
.comment-part {
  .comment-btn {
    float: right;
  }
  .comment-input {
    margin-bottom: 5px;
  }
}
</style>
