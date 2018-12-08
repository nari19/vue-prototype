<template>
  <div class="about">
    <MainObject msg="MainObject"/>
    <SubObject msg="SubObject"/>
    <FormInfo msg="FormInfo"/>
    <TextInfo msg="TextInfo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainObject from "@/components/mainObject/about.vue";
import SubObject from "@/components/subObject/about.vue";
import FormInfo from "@/components/formInfo/about.vue";
import TextInfo from "@/components/textInfo/about.vue";

export default {
  name: "about",
  components: {
    MainObject,
    SubObject,
    FormInfo,
    TextInfo
  }
};
</script>

<style lang="scss">

</style>
