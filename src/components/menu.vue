<!-- https://www.nxworld.net/tips/12-css-hamburger-menu-active-effect.html -->
<template>
  <div id="menu" v-bind:class="{active:isActive}" v-on:click="isActive=!isActive" >
    <div class="menu-trigger">
        <span></span>
        <span></span>
        <span></span>
    </div>
  </div>
</template>


<script>
export default {
data(){
　  return {
  　   isActive:false
  　};
　}
};
</script>

<style lang="scss">
@media screen and (min-width:768px) { // custom
    #menu {
        display: none;
    }
}
.menu-trigger,
.menu-trigger span {
  display: inline-block;
  transition: all .4s;
  box-sizing: border-box;
}
.menu-trigger {
  z-index: 20;
  position: fixed;
  top: 17px;
  right: 20px;
  width: 30px;
  height: 24px;
}
.menu-trigger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #666;
  border-radius: 4px;
}
.menu-trigger span:nth-of-type(1) {
  top: 2px;
}
.menu-trigger span:nth-of-type(2) {
  top: 10px;
}
.menu-trigger span:nth-of-type(3) {
  bottom: 0;
}

.menu-trigger span:nth-of-type(2) {
  top: 54%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}
.active .menu-trigger span:nth-of-type(1) {
  -webkit-transform: translateY(10px) rotate(-315deg) scale(.8);
  transform: translateY(10px) rotate(-315deg) scale(.8);
}
.active .menu-trigger span:nth-of-type(2) {
  width: 35px;
  height: 35px;
  background-color: transparent;
  border: 3px solid #666;
  border-radius: 50%;
}
.active .menu-trigger span:nth-of-type(3) {
  -webkit-transform: translateY(-8px) rotate(315deg) scale(.8);
  transform: translateY(-8px) rotate(315deg) scale(.8);
}
</style>