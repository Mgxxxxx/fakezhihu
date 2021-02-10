<template>
  <div class="article-details" v-loading="loading">
    <div class="article-wrapper">
      <div class="cover mt-2">
        <img :src="articleData.cover" alt="articleData.cover" />
      </div>
      <h1 class="title">{{ articleData.title }}</h1>
      <div class="author-info" v-if="articleData.author">
        <div class="avatar">
          <img
            :src="articleData.author.avatarUrl"
            alt="articleData.author.avatarUrl"
          />
        </div>
        <div class="userinfo">
          <p class="username">{{ articleData.author.name }}</p>
          <p class="headline">{{ articleData.author.headline }}</p>
        </div>
      </div>
      <div class="content" v-html="articleData.content"></div>
      <list-item-actions
        class="list-actions"
        v-if="articleData.status"
        :itemId="articleData.id"
        :thanks_count="JSON.parse(articleData.status.thanks).length"
        :voteup_count="JSON.parse(articleData.status.voteUp).length"
        :comment_count="articleData.comment.length"
        :relationship="33"
        :showActionItems="showActionItems"
      ></list-item-actions>
    </div>
  </div>
</template>

<script>
import ListItemActions from "@/components/ListItemActions";
import request from "@/service";

export default {
  name: "DetailsArticle",
  components: { ListItemActions },
  data() {
    return {
      showActionItems: [
        "vote",
        "thanks",
        "comment",
        "share",
        "favorite",
        "more",
      ],
      loading: true,
      articleData: {},
    };
  },
  created() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      await request
        .get("/articles", {
          params: {
            articleId: this.$route.params.id,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.status === 200) {
            this.articleData = res.data.content;
            this.loading = false;
          } else {
            this.$Message.error("获取文章失败，请稍后再试");
            this.$router.go(-1);
          }
        });
    },
  },
};
</script>

<style scoped lang="scss">
.article-wrapper {
  min-width: 1000px;
  padding-bottom: 60px;
  .cover img,
  .title,
  .author-info,
  .content {
    width: 690px;
    margin: 0 auto 20px auto;
  }
  .cover {
    text-align: center;
  }
  .author-info {
    display: flex;
    .avatar img {
      width: 49px;
      border-radius: 50%;
    }
    .userinfo {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .username,
      .headline {
        margin: 0;
      }
      .username {
        font-weight: bold;
      }
    }
  }
  .list-actions {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    padding: 10px 0;
    width: 690px;
    margin: 0 auto;
  }
}
</style>
