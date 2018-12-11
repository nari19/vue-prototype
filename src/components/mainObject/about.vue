<template>
  <div class="mainObject">
    <h1>{{ msg }}</h1>
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
.mainObject {
  height: 90.5%;
}
</style>
