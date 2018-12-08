<template>
  <div class="formInfo">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "formInfo",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./style.scss";

</style>