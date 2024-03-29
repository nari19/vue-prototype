// https://rara-world.com/vue-cli-router-vuex/
const state = {
    isShow: false
}
  
const mutations = {
    show (state) {
        state.isShow = true
    },
    hide (state) {
        state.isShow = false
    }
}

export default {
    namespaced: true,
    state,
    mutations
}