<template>
  <div class="editor">
    <editor-header @relaseArticles="relaseArticles" />
    <div class="content mt-5">
      <el-upload
        class="img-upload mb-1"
        v-if="imgUrl === ''"
        drag
        action="/imgs/upload"
        :on-success="uploadSuc"
        accept=".jpg,.jpeg,.JPG,.JPEG,.png,.PNG"
      >
        <i class="el-icon-upload"></i>
        <div>添加题图</div>
      </el-upload>
      <img
        :src="imgUrl"
        alt="题图"
        v-if="imgUrl !== ''"
        class="oldImg mb-1"
        @click="$refs.hiddenUpload.click()"
      />
      <el-input
        class="mb-1"
        v-model="title"
        size="medium"
        placeholder="请输入标题（最多50个字）"
      />
      <rich-text-editor
        ref="textEditor"
        :content="content"
        :placeHolder="placeHolder"
        @updateContent="updateContent"
      />
    </div>
  </div>
</template>

<script>
import EditorHeader from "@/components/EditorHeader.vue";
import RichTextEditor from "@/components/RichTextEditor";
import request from "@/service";
import { getCookies } from "@/lib/utils";
import { imgDec } from "@/lib/config.js";

export default {
  name: "Editor",
  components: { EditorHeader, RichTextEditor },
  data() {
    return {
      title: "",
      content: "",
      contentText: "",
      placeHolder: "请输入正文",
      imgUrl: "",
    };
  },
  methods: {
    updateContent(content, contentText) {
      this.content = content;
      this.contentText = contentText;
    },
    relaseArticles() {
      if (parseFloat(this.$route.params.articleId) !== 0) {
        console.log("");
      } else {
        this.createArticle();
      }
    },
    async createArticle() {
      await request
        .post("/articles", {
          content: this.content,
          excerpt:
            this.contentText.length > 100
              ? this.contentText.slice(0, 100)
              : this.contentText,
          title: this.title,
          userId: getCookies("id"),
        })
        .then((res) => {
          if (res.data.status === 201) {
            this.$Message.success("文章新建成功！");
          } else {
            this.$Message.error(res.error);
          }
        });
    },
    uploadSuc(response) {
      this.imgUrl = `${imgDec}${response.fileName}`;
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  width: 660px;
  margin: 0 auto;
}
</style>
