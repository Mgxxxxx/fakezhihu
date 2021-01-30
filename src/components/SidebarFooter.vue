<template>
  <footer>
    <a href="javascript:;" target="_blank" class="footer-item">Mx</a>
    <span class="footer-dot"></span>
    <a href="javascript:;" target="_blank" class="footer-item">知乎指南</a>
    <span class="footer-dot"></span>
    <a href="javascript:;" target="_blank" class="footer-item">知乎协议</a>
    <span class="footer-dot"></span>
    <a href="javascript:;" target="_blank" class="footer-item"
      >知乎隐私保护指引</a
    >
    <br />
    <a href="javascript:;" target="_blank" class="footer-item">应用</a>
    <span class="footer-dot"></span>
    <a href="javascript:;" target="_blank" class="footer-item">工作</a>
    <span class="footer-dot"></span>
    <a href="javascript:;" target="_blank" class="footer-item"
      >申请开通知乎机构号</a
    >
    <br />
    <a href="javascript:;" target="_blank" class="footer-item">侵权举报</a>
    <span class="footer-dot"></span>
    <a href="javascript:;" target="_blank" class="footer-item"
      >网上有害信息举报专区</a
    >
    <br />
    <a href="javascript:;" target="_blank" class="footer-item"
      >违法和不良信息举报：010-82716601</a
    >
    <br />
    <a href="javascript:;" target="_blank" class="footer-item"
      >儿童色情信息举报专区</a
    >
    <br />
    <a href="javascript:;" target="_blank" class="footer-item"
      >电信与服务业务经营许可证</a
    >
    <br />
    <a href="javascript:;" target="_blank" class="footer-item"
      >网络文化经营许可证</a
    >
    <br />
    <a href="javascript:;" target="_blank" class="footer-item">联系我们</a>
    <span> © 2021 知乎</span>
  </footer>
</template>

<script>
export default {
  name: "SidebarFooter",
};
</script>

<style scoped lang="scss">
footer {
  padding: 0 5px;
  .footer-item {
    display: inline-block;
    margin-top: 8px;
    color: black;
    text-decoration: none;
    font-size: 12px;
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
</style>
