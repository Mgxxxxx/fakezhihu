<template>
  <div class="signup">
    <div class="signup-wrapper">
      <sign-up-core />
      <el-button class="download mt-2" type="primary"
        >下载Fake知乎App</el-button
      >
    </div>
    <footer class="signup-footer mb-1">
      <div class="ZhihuLinks">
        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
          知乎专栏
        </a>
        <span class="footer-dot"></span>
        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
          圆桌
        </a>
        <span class="footer-dot"></span>
        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
          发现
        </a>
        <span class="footer-dot"></span>
        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
          移动应用
        </a>
        <span class="footer-dot"></span>
        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
          联系我们
        </a>
        <span class="footer-dot"></span>
        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
          来知乎工作
        </a>
        <span class="footer-dot"></span>
        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
          注册机构号
        </a>
        <br />
        <span> © 2021 知乎</span>
        <span class="footer-dot"></span>
        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
          闲 ICP 证 110711 号
        </a>
        <span class="footer-dot"></span>
        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
          出版物经营许可证
        </a>
        <span class="footer-dot"></span>
        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
          互联网药品信息 服务资格证书 (闲) - 非经营性 - 2020 - 0022
        </a>
        <br />
        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
          侵权举报
        </a>
        <span class="footer-dot"></span>
        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
          网上有害信息举报区
        </a>
        <span class="footer-dot"></span>
        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
          儿童色情信息举报区
        </a>
        <span class="footer-dot"></span>
        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
          非法和不良信息举报：010-82336602
        </a>
        <span class="footer-dot"></span>
      </div>
    </footer>
  </div>
</template>

<script>
import SignUpCore from "@/components/SignUpCore.vue";

export default {
  name: "SignUp",
  components: {
    SignUpCore,
  },
};
</script>

<style scoped lang="scss">
footer {
  padding: 0 5px;
  font-size: 12px;
  text-align: center;
  a {
    display: inline-block;
    margin-top: 8px;
    color: black;
    text-decoration: none;
    & + span {
      display: inline-block;
      margin-top: 8px;
      font-size: 12px;
    }
  }
  .footer-dot {
    &::after {
      content: "·";
      margin: 0 5px;
    }
  }
}
.signup-wrapper {
  min-height: 688px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .download {
    width: 400px;
  }
}
</style>
