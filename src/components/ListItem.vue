<template>
  <div class="answer-main">
    <div class="title" v-if="showPart.indexOf('title') >= 0">
      <h2>
        <router-link
          :to="{
            name: type === 0 ? 'detailsArticles' : 'detailsQuestions',
            params: { id: item.id },
          }"
        >
          {{ transtedInfo.title }}
        </router-link>
      </h2>
    </div>
    <div class="creator-info clearfix" v-if="showPart.indexOf('creator') >= 0">
      <router-link
        :to="{
          name: 'people',
          params: { id: item.author ? item.author.id : 0 },
        }"
      >
        <div class="avatar">
          <img
            :src="item.author ? item.author.avatarUrl : ''"
            alt="Here is authorimg"
          />
        </div>
        <div class="userinfo">
          <p class="username">
            {{ item.author ? item.author.name : "" }}
          </p>
          <p class="headline">
            {{ item.author ? item.author.headline : "" }}
          </p>
        </div>
      </router-link>
    </div>
    <div class="vote" v-if="showPart.indexOf('votes') >= 0">
      <span> 莫名其妙的vote:{{ JSON.parse(status.voteUp).length }} </span>
    </div>
    <div class="content-wrapper clearfix mb-1">
      <div class="shortCut" v-if="showType === 'excerpt'">
        <div class="cover mr-1" v-if="transtedInfo.cover">
          <img :src="transtedInfo.cover" alt="transtedInfo.cover" />
        </div>
        <div class="experct">
          <span>
            <span v-html="item.excerpt"></span>
            <el-button
              class="btn-no-padding"
              type="text"
              @click="showType = 'all'"
              >阅读全文<i class="el-icon-arrow-down"></i
            ></el-button>
          </span>
        </div>
      </div>
      <div class="content" v-if="showType === 'all'">
        <router-link
          v-if="!showPart.includes('creator')"
          class="mini-creator-info clearfix"
          :to="{
            name: 'people',
            params: { id: item.author ? item.author.id : 0 },
          }"
        >
          <img
            :src="item.author ? item.author.avatarUrl : ''"
            alt="authorHeadImg"
            class="avatar"
          />
          <span class="username">{{
            item.author ? item.author.name : ""
          }}</span>
        </router-link>
        <span v-html="item.content"></span>
        <el-button
          class="btn-no-padding"
          type="text"
          @click="showType = 'excerpt'"
          >收起<i class="el-icon-arrow-up"></i
        ></el-button>
      </div>
    </div>
    <list-item-actions
      :commentShowType="showType"
      v-bind="$attrs"
      v-on="$listeners"
      :type="type"
      :itemId="item.id"
      :thanks_count="JSON.parse(status.thanks).length"
      :comment_count="item.comment ? item.comment.length : 0"
      :voteup_count="JSON.parse(status.voteUp).length"
      :relationship="33"
      :showActionItems="[
        'vote',
        'thanks',
        'comment',
        'share',
        'favorite',
        'more',
      ]"
      :status="item.status"
    />
  </div>
</template>

<script>
import ListItemActions from "@/components/ListItemActions";

export default {
  name: "ListItem",
  props: ["item", "showPart", "type"],
  data() {
    return {
      showType: "excerpt",
    };
  },
  components: {
    ListItemActions,
  },
  computed: {
    transtedInfo() {
      if (this.type === 0) {
        return {
          title: this.item.title,
          cover: this.item.cover || "",
        };
      } else if (this.type === 1) {
        return {
          title: this.item.question.title,
          cover: this.item.thumbnail || "",
        };
      } else {
        return {
          title: "",
          cover: "",
        };
      }
    },
    status() {
      return this.item.status
        ? this.item.status
        : { voteUp: "[]", thanks: "[]" };
    },
  },
};
</script>

<style scoped lang="scss">
.answer-main {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ececec;
  // padding: 20px;
  a {
    color: black;
  }
  .shortCut {
    display: flex;
    .cover {
      flex: 0 0 30%;
      img {
        width: 100%;
        border-radius: 5px;
      }
    }
    .experct {
      .btn-no-padding {
        padding: 0;
      }
    }
  }
  .creator-info {
    // display: flex;
    .avatar {
      float: left;
      img {
        width: 49px;
        border-radius: 5px;
        vertical-align: middle;
      }
    }
    .userinfo {
      float: left;
      display: flex;
      margin-left: 10px;
      flex-direction: column;
      justify-content: center;
      height: 49px;
      p {
        margin: 0;
      }
    }
  }
  .mini-creator-info {
    display: inline-block;
    img {
      width: 34px;
      vertical-align: middle;
    }
    .username {
      height: 34px;
      display: inline-block;
      margin-left: 5px;
    }
  }
}
</style>
