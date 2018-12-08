<template>
  <div class="subObject">
    <h1>{{ msg }}</h1>
    <object type="image/svg+xml" data="https://af.nari19.me/box_logo/BoxLogo2.svg" width="70%"></object>
    <object type="image/svg+xml" data="https://af.nari19.me/one_line/OneLine7.svg" width="70%"></object>
    <object type="image/svg+xml" data="https://af.nari19.me/one_line/OneLine5.svg" width="70%"></object>
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