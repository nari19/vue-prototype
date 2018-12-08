<template>
  <div class="subObject">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "subObject",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./style.scss";
</style>