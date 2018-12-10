<template>
  <div id="app">
    <div id="nav">
        <router-link to="/">ACTIVE-FRAME</router-link>
        <router-link to="/about">About</router-link>
        <img src="./assets/images/menu.svg" alt="menu" id="rightMenu"/>
    </div>
    <div id="content">
        <router-view/>
    </div>

  </div>
</template>

<style lang="scss">
#app {
  height: 100vh;
  text-align: center;
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  z-index: 20;
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
  #rightMenu {
    width: 24px;
    height: 24px;
    float: right;
    margin-right: 30px;
    position: relative;
    top: 4px;
  }
  @media screen and (min-width:768px) { // custom
    #rightMenu {
      display: none;
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
