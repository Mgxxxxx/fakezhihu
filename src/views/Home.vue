<template>
  <div class="home">
    <main-header></main-header>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from "@/components/MainHeader.vue";

export default {
  name: "Home",
  components: {
    MainHeader,
  },
};
</script>
