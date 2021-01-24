<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>h2</h2>
    <div class="item-1">item-1</div>
    <div class="item-2">item-2</div>
    <div class="item-3">item-3</div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style scoped lang="scss">
.about {
  h1 {
    color: pink;
  }
}
@for $i from 1 through 3 {
  .item-#{$i} {
    font-size: 2rem * $i;
  }
}
</style>

