<template>
  <div id="app">
    <div id="nav">
        <router-link to="/">ACTIVE-FRAME</router-link>
        <router-link to="/about">About</router-link>
        <Menu />
    </div>
    <div id="content">
        <router-view/>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/menu.vue";

export default {
  name: "app",
  components: {
    Menu
  }
}
</script>

<style lang="scss">
#app {
  height: 100vh;
  text-align: center;
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#content {
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  min-height: 700px;
  height: 100vh;
}

#nav {
  z-index: 15;
  padding: 12px 10px 10px 10px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #d7f7f5;
  box-shadow: 0 2px 3px rgba(0,0,0,0.2);
  text-align: left;
  a {
    font-weight: bold;
    font-size: 23px;
    color: #444;
    margin-left:15px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
