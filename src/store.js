import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';  //参考 https://qiita.com/sygnas/items/7eac9491b37a1bcba0cb

Vue.use(Vuex);

const URL_BASE = '/assets/dataJson/';

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},

  data: {
    search_list: []
  },
  methods: {
    get_ajax(url, name) {
      return axios.get(URL_BASE + url)
      .then((res) => {
        Vue.set(this, name, res.data);
        this.$emit('GET_AJAX_COMPLETE');
      });
    },
    get_data(name) {
      return this.$data[name];
    }
  }
});

