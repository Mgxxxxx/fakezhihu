<template>
  <div class="editor">
    <editor-header @relaseArticles="relaseArticles" />
    <div class="content mt-5">
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

export default {
  name: "Editor",
  components: { EditorHeader, RichTextEditor },
  data() {
    return {
      title: "",
      content: "",
      contentText: "",
      placeHolder: "请输入正文",
    };
  },
  methods: {
    updateContent(content, contentText) {
      this.content = content;
      this.contentText = contentText;
    },
    relaseArticles() {},
  },
};
</script>

<style scoped lang="scss">
.content {
  width: 660px;
  margin: 0 auto;
}
</style>
