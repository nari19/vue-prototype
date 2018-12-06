<template>
  <div id="app">

    <div id="nav">
      <div style="float:left;margin-left:10px;">
        <img alt="Vue logo" src="./assets/logo.png" width="33px">
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <div id="content">
      <router-view/>
    </div>

  </div>
</template>

<style lang="scss">
#app {
  height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  z-index: 20;
  padding: 10px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #d7f7f5;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  a {
    font-weight: bold;
    font-size: 23px;
    color: #444;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#content {
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  min-height: 700px;
  height: 100vh;
}
</style>
