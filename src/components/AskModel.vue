<template>
  <div class="ask-model">
    <el-input
      type="text"
      v-model="title"
      placeholder="写下你的问题，准确地描述问题更容易得到解答"
    />
    <rich-text-editor
      class="with-border mt-1"
      ref="richtext"
      :content="discription"
      :placeHolder="placeHolder"
      @updateContent="updateContent"
    />
    <div class="footer mt-1">
      <el-button @click="$emit('changeAskModelVisiable', false)"
        >取消</el-button
      >
      <el-button type="primary" @click="relaseQuestion">确定</el-button>
    </div>
  </div>
</template>

<script>
import RichTextEditor from "./RichTextEditor";
import request from "@/service";
import { getCookies } from "@/lib/utils";
import _ from "lodash";

export default {
  name: "AskModel",
  props: ["oldItem"],
  components: {
    RichTextEditor,
  },
  data() {
    return {
      title: "",
      discription: "",
      excerpt: "",
      placeHolder: "输入问题背景、条件等详细信息(选填)",
    };
  },
  mounted() {
    if (!_.isEmpty(this.oldItem)) {
      this.title = this.oldItem.title;
      this.discription = this.oldItem.discription;
      this.$refs.richtext.updateContent(this.discription);
    }
  },
  methods: {
    updateContent(content, contentText) {
      this.discription = content;
      this.excerpt =
        contentText.length > 100 ? contentText.slice(0, 100) : contentText;
    },
    relaseQuestion() {
      if (!_.isEmpty(this.oldItem)) {
        this.updateQuestion();
      } else {
        this.createQuestion();
      }
    },
    async createQuestion() {
      await request
        .post("/questions", {
          title: this.title,
          excerpt: this.excerpt,
          discription: this.discription,
          userId: getCookies("id"),
        })
        .then((res) => {
          if (res.data.status === 201) {
            this.$Message.success("问题创建成功");
            this.$emit("changeAskModelVisiable", false);
          } else {
            this.$Message.error("问题创建失败，请稍后再试");
          }
        });
    },
    async updateQuestion() {
      await request
        .put("/questions", {
          questionId: this.oldItem.id,
          title: this.title,
          excerpt: this.excerpt,
          discription: this.discription,
          userId: getCookies("id"),
        })
        .then((res) => {
          if (res.data.status === 202) {
            this.$Message.success("问题修改成功");
            this.$emit("changeAskModelVisiable", false);
            this.$emit("updateQuestion");
          } else {
            this.$Message.error("问题修改失败，请稍后再试");
          }
        });
    },
  },
};
</script>

<style scoped lang="scss">
.ask-model {
  .footer {
    text-align: center;
  }
}
</style>
