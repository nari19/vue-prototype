import Vue from "vue";
import Vuex from "vuex";
import basicModal from './modules/basicModal'

Vue.use(Vuex);

// https://qiita.com/RikutoYamaguchi/items/2fb1c1dc8be196dfc883
const state = {
}
const modules = {
  basicModal
}
const store = new Vuex.Store({
  state,
  modules
})

export default store
