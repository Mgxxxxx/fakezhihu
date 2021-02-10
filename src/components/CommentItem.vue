<template>
  <div>
    <div class="comment-item">
      <div class="header clearfix">
        <div class="user-info">
          <span class="avatar">
            <img :src="item.author.avatarUrl" alt="item.author" />
          </span>
          <span class="username">{{ item.author.name }}</span>
        </div>
        <span class="created-item">{{ item.createdAt | dateFilter }}</span>
      </div>
      <span class="content">{{ item.content }}</span>
      <comment-item-actions :item="item" v-bind="$attrs" v-on="$listeners" />
    </div>
    <hr class="hr mb-1" color="#dcdfe6" size="1" />
  </div>
</template>

<script>
import moment from "moment";
import CommentItemActions from "@/components/CommentItemActions.vue";

export default {
  name: "CommentItem",
  props: ["item"],
  components: { CommentItemActions },
  filters: {
    dateFilter: (date) => {
      moment.locale("zh-cn");
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
  },
};
</script>

<style scoped lang="scss">
.comment-item {
  &:hover {
    .hover-hidden {
      visibility: visible;
    }
  }
  .header {
    height: 24px;
    line-height: 24px;
    .user-info {
      float: left;
      img {
        width: 24px;
        vertical-align: middle;
      }
      .username {
        line-height: 24px;
        padding-left: 5px;
      }
    }
    .created-item {
      float: right;
    }
  }
  .content {
    margin-left: -8px;
    display: inline-block;
    margin-top: 10px;
  }
}
.hr {
  margin-top: 0px;
}
</style>
