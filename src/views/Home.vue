<template>
  <div class="home">
    <MainObject msg="MainObject"/>
    <SubObject msg="SubObject"/>
    <FormInfo msg="FormInfo"/>
    <TextInfo msg="TextInfo" />
  </div>
</template>

<script>
// @ is an alias to /src
import MainObject from "@/components/mainObject/home.vue";
import SubObject from "@/components/subObject/home.vue";
import FormInfo from "@/components/formInfo/home.vue";
import TextInfo from "@/components/textInfo/home.vue";

export default {
  name: "home",
  components: {
    MainObject,
    SubObject,
    FormInfo,
    TextInfo
  }
}
</script>

<style lang="scss">

</style>