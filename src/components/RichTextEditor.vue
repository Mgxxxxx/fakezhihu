<template>
  <div>
    <quill-editor
      class="rich-text-editor"
      v-model="value"
      ref="myQuillEditor"
      :options="options"
      @change="updateRichText($event)"
    ></quill-editor>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

export default {
  name: "RichTextEditor",
  props: ["content", "placeHolder"],
  components: { quillEditor },
  data() {
    return {
      value: "",
      options: {
        modules: {
          toolbar: [
            ["bold", "italic"],
            [
              { header: 2 },
              "blockquote",
              "code-block",
              { list: "ordered" },
              { list: "bullet" },
            ],
            ["link", "image"],
            ["clean"],
          ],
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false,
          },
        },
      },
    };
  },
  mounted() {
    this.$refs.myQuillEditor.quill.root.dataset.placeholder = this.placeHolder;
  },
  methods: {
    // updateContent(content) {
    //   this.$refs.myQuillEditor.quill.root.innerHTML = content;
    // },
    updateRichText(content) {
      this.$emit("updateContent", content.html, content.text);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
