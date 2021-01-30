<template>
  <div class="answer-main">
    <div class="title" v-if="showPart.indexOf('title') >= 0">
      <h2>{{ transtedInfo.title }}</h2>
    </div>
    <div class="creater-info" v-if="showPart.indexOf('creator') >= 0">
      <div class="avatar">
        <img :src="item.author.avatarUrl" alt="Here is authorimg" />
      </div>
      <div class="userinfo">
        <p class="username">
          {{ item.author.name }}
        </p>
        <p class="headline">
          {{ item.author.headline }}
        </p>
      </div>
    </div>
    <div class="vote" v-if="showPart.indexOf('votes') >= 0">
      <span>
        {{ JSON.parse(item.status.voteUp).length }}
      </span>
    </div>
    <div class="content-wrapper clearfix mb-1">
      <div class="shortCut" v-if="showType === 'experct'">
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
        <span v-html="item.content"></span>
        <el-button
          class="btn-no-padding"
          type="text"
          @click="showType = 'experct'"
          >收起<i class="el-icon-arrow-up"></i
        ></el-button>
      </div>
    </div>
    <list-item-actions
      :thanks_count="22"
      :comment_count="33"
      :voteup_count="44"
      :showActionItems="[
        'vote',
        'thanks',
        'comment',
        'share',
        'favorite',
        'more',
      ]"
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
      showType: "experct",
    };
  },
  components: {
    ListItemActions,
  },
  computed: {
    transtedInfo() {
      if (this.type === "article") {
        return {
          title: this.item.title,
          cover: this.item.image.url || "",
        };
      } else {
        return {
          title: this.item.question.title,
          cover: this.item.thumbnail || "",
        };
      }
    },
  },
};
</script>

<style scoped lang="scss">
.answer-main {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ececec;
  padding: 0 20px 20px 20px;
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
  &:first-child {
    margin-top: -20px;
  }
}
</style>
