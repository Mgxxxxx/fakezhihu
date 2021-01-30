<template>
  <div class="main-content">
    <div class="list">
      <main-list-wrapper />
    </div>
    <div class="slidebar">
      <main-slidebar />
    </div>
  </div>
</template>

<script>
import MainListWrapper from "../components/MainListWrapper.vue";
import MainSlidebar from "../components/MainSlidebar.vue";
export default {
  components: { MainListWrapper, MainSlidebar },
  name: "Main",
};
</script>
    

<style scoped lang="scss">
.main-content {
  width: 1000px;
  display: flex;
  margin: 10px auto;
  .list {
    margin-right: 10px;
    flex-shrink: 0;
    width: 694px;
  }
  .slidebar {
    flex: 1 1;
  }
}
</style>
