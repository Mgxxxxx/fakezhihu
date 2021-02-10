<template>
  <div class="question-details" v-loading="loading">
    <div class="question-header">
      <el-dialog
        title="修改问题"
        :visible.sync="askModelVisiable"
        :modal-append-to-body="false"
      >
        <ask-model
          @changeAskModelVisiable="changeAskModelVisiable"
          @updateQuestion="getQuestion"
          :oldItem="questionData"
        />
      </el-dialog>
      <div class="question-header-content">
        <div class="question-header-main">
          <h1 class="question-title">
            {{ questionData.title }}
            <el-button
              size="small"
              class="gray ml-2"
              @click="changeAskModelVisiable(true)"
            >
              <i class="el-icon-edit el-icon--left"></i>
              编辑
            </el-button>
          </h1>
          <div class="question-header-details" v-show="showType === 'excerpt'">
            <span>{{ questionData.excerpt }}</span>
            <el-button
              class="btn-no-padding ml-1"
              type="text"
              icon="el-icon-arrow-down"
              @click="showType = 'all'"
            >
              阅读全文
            </el-button>
          </div>
          <div class="question-header-details" v-show="showType === 'all'">
            <div v-html="questionData.discription"></div>
            <el-button
              class="btn-no-padding"
              type="text"
              icon="el-icon-arrow-up"
              @click="showType = 'excerpt'"
              >收起</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="question-header-footer">
      <div class="question-header-footer-inner">
        <div class="question-header-footer-main">
          <div class="question-header-btnGroup">
            <el-button type="primary" size="small">关注问题</el-button>
            <el-button
              size="small"
              type="primary"
              plain
              icon="el-icon-edit"
              @click="showAnswerPart()"
              :disabled="false"
              >写回答</el-button
            >
          </div>
          <div class="question-header-actions">
            <el-button size="small" class="button" type="info" plain>
              <span class="iconfont icon-personadd">邀请回答</span>
            </el-button>
            <list-item-actions
              class="actions"
              :itemId="questionData.id"
              :type="1"
              :showActionItems="['comment', 'share', 'more']"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="question-main">
      <div class="question-main-clo">
        <el-card class="mb-2" v-show="!currentAnswerEmpty">
          <list-item
            class="without-border no-padding"
            :item="currentAnswer"
            :showPart="['creator', 'votes']"
            :type="2"
          />
        </el-card>
        <el-card v-show="allAnswerLength === 0">
          <div class="no-answer my-2">当前问题没有人回答</div>
        </el-card>
        <el-card
          v-show="questionData.answer ? questionData.answer.length > 0 : false"
        >
          <div class="list">
            <div class="list-header">
              <span
                >共有{{
                  questionData.answer ? questionData.answer.length : 0
                }}个回答</span
              >
            </div>
            <div
              class="list-item"
              v-for="(answer, index) in questionData.answer"
              :key="index"
            >
              <list-item
                :item="answer"
                :index="index"
                :showPart="['creator', 'votes']"
                :type="2"
              />
            </div>
          </div>
        </el-card>
        <el-card class="mb-1" v-loading="authorLoading" v-show="answerVisiable">
          <div class="author-info">
            <div class="avatar">
              <img :src="authorInfo.avatarUrl" alt="authorInfo.avatar" />
            </div>
            <div class="userInfo">
              <p class="username">{{ authorInfo.name }}</p>
              <p class="headline">{{ authorInfo.headline }}</p>
            </div>
          </div>
          <rich-text-editor
            class="with-border mt-2 mb-1"
            ref="richText"
            :content="answerContent"
            :placeHolder="placeHolder"
            @updateContent="updateContent"
          />
          <div>
            <el-button size="small" type="primary" @click="createAnswer"
              >提交回答</el-button
            >
            <el-button
              size="small"
              type="default"
              @click="answerVisiable = false"
              >取消</el-button
            >
          </div></el-card
        >
      </div>
      <div class="question-main-siderbar">
        <siderbar-footer />
      </div>
    </div>
  </div>
</template>

<script>
import ListItemActions from "@/components/ListItemActions.vue";
import SiderbarFooter from "@/components/SidebarFooter.vue";
import AskModel from "@/components/AskModel.vue";
import RichTextEditor from "@/components/RichTextEditor.vue";
import ListItem from "@/components/ListItem.vue";
import request from "@/service";
import { getCookies } from "@/lib/utils";
import _ from "lodash";

export default {
  name: "DetailsQuestion",
  components: {
    ListItemActions,
    SiderbarFooter,
    AskModel,
    RichTextEditor,
    ListItem,
  },
  computed: {
    currentAnswerEmpty() {
      return _.isEmpty(this.currentAnswer);
    },
    allAnswerLength() {
      const questionDataAnswerLength = this.questionData.answer
        ? this.questionData.answer.length
        : 0;
      return this.currentAnswerEmpty
        ? questionDataAnswerLength
        : questionDataAnswerLength + 1;
    },
  },
  data() {
    return {
      questionData: {},
      loading: true,
      authorLoading: false,
      answerVisiable: false,
      commentShowType: "all",
      showType: "excerpt",
      askModelVisiable: false,
      answerContent: "",
      answerExcerpts: "",
      placeHolder: "写回答",
      authorInfo: {},
      currentAnswer: {},
    };
  },
  created() {
    this.getQuestion();
  },
  methods: {
    async getQuestion() {
      this.loading = true;
      await request
        .get("/questions", {
          params: {
            questionId: this.$route.params.id,
          },
        })
        .then((res) => {
          // console.log(res);
          this.questionData = res.data.content;
          this.getAuthorInfo();
          this.questionData.answer = _.compact(
            _.map(this.questionData.answer, (item) => {
              if (item.creatorId === parseFloat(getCookies("id"))) {
                this.currentAnswer = item;
                return null;
              }
              return item;
            })
          );
        });
      if (!_.isEmpty(this.currentAnswer)) {
        let comment = await request.get("/comments", {
          params: {
            targetId: this.currentAnswer.id,
            targetType: this.currentAnswer.type,
          },
        });
        this.currentAnswer.comment = comment.data.list;
      }
      for (let i = 0; i < this.questionData.answer.length; i++) {
        let item = this.questionData.answer[i];
        let res = await request.get("/comments", {
          params: { targetId: item.id, targetType: item.type },
        });
        item.comment = res.data.list;
      }
      this.loading = false;
    },
    async getAuthorInfo() {
      const userId = getCookies("id");
      this.authorLoading = true;
      await request
        .get("/users", {
          params: {
            id: userId,
          },
        })
        .then((res) => {
          if (res.data.status === 200) {
            // console.log(res);
            this.authorInfo = res.data.content;
            this.authorLoading = false;
          }
        });
    },
    async createAnswer() {
      this.authorLoading = true;
      await request
        .post("/answers", {
          creatorId: getCookies("id"),
          content: this.answerContent,
          excerpt: this.answerExcerpt,
          targetId: this.questionData.id,
        })
        .then((res) => {
          if (res.data.status === 201) {
            this.$Message.success("回答成功");
            this.authorLoading = false;
            this.answerVisiable = false;
            this.$refs.richText.updateContent("");
            this.getQuestion();
          } else {
            this.$Message.error("回答失败，请稍后再试");
          }
        });
    },
    changeAskModelVisiable(status) {
      this.askModelVisiable = status;
    },
    updateContent(content, contentText) {
      this.answerContent = content;
      this.answerExcerpt =
        contentText.length > 100 ? contentText.slice(0, 100) : contentText;
    },
    showAnswerPart() {
      this.answerVisiable = true;
      // console.log(document.body.scrollHeight);
      window.scrollTo(0, document.body.scrollHeight);
    },
  },
};
</script>

<style scoped lang="scss">
.without-border {
  border: 0;
}
.question-details {
  box-shadow: 0 2px 2px 1px #ececec;
  padding-bottom: 10px;
  .question-header {
    width: 1000px;
    margin: 0 auto;
    .question-title {
      margin-bottom: 0;
    }
  }
  .question-header-footer-main {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    .question-header-actions {
      margin-left: 10px;
      display: flex;
      .button {
        height: 32px;
        .iconfont {
          font-size: 12px !important;
        }
      }
    }
  }
}
.question-main {
  width: 1000px;
  margin: 10px auto;
  display: flex;
  .question-main-clo {
    flex: 1;
    margin-right: 10px;
    .list-item {
      margin-top: 20px;
      .answer-main {
        padding-bottom: 20px;
      }
    }
  }
  .author-info {
    display: flex;
    .avatar {
      img {
        width: 49px;
        border-radius: 5px;
      }
    }
    .userInfo {
      display: flex;
      margin-left: 10px;
      flex-direction: column;
      justify-content: center;
      p {
        margin: 0;
      }
    }
  }
  .el-card:last-child {
    margin-top: 10px;
  }
}
</style>
