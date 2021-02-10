<template>
  <div>
    <quill-editor
      class="rich-text-editor"
      v-model="value"
      ref="myQuillEditor"
      :options="options"
      @change="updateRichText($event)"
    ></quill-editor>
    <!-- <el-upload
      class="hidden"
      action="/imgs/upload"
      :on-success="uploadSuc"
      accept=".jpg,.jpeg,.JPG,.JPEG,.png,.PNG"
    >
      <div ref="hiddenUpload"></div>
    </el-upload> -->
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
// import { imgDec } from "@/lib/config.js";

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
    this.$refs.myQuillEditor.quill
      .getModule("toolbar")
      .addHandler("image", this.imgHandler);
    this.$refs.myQuillEditor.quill.root.dataset.placeholder = this.placeHolder;
  },
  methods: {
    imgHandler(image) {
      if (image) {
        console.log("hidden");
        this.$refs.hiddenUpload.click();
      }
    },
    updateContent(content) {
      this.$refs.myQuillEditor.quill.root.innerHTML = content;
    },
    updateRichText(content) {
      this.$emit("updateContent", content.html, content.text);
    },
    uploadSuc(/*response*/) {
      // const url = `${imgDec}${response.fileName}`;
      const fake =
        "https://pic3.zhimg.com/80/v2-92ad52700c8ea35256fa74d2ad3a54ee_720w.jpg";
      this.$refs.myQuillEditor.quill.insertEmbed(
        this.$refs.myQuillEditor.quill.getSelection(),
        "image",
        fake
      );
    },
  },
};
</script>

<style scoped lang="scss">
</style>
