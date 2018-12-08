<template>
  <div class="mainObject">
    <h1>{{ msg }}</h1>
    <object type="image/svg+xml" data="https://af.nari19.me/one_line/OneLine5.svg" width="60%"></object>
  </div>
</template>

<script>
export default {
  name: "mainObject",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./style.scss";
</style>