import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";

// initial code
// import { SET_DATA } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: null
  },

  getters: {
    getData: state => state.list,

    // initial code
    // getData: (state) => {
    //   return state.lists;
    // },
    // getCountData: () => {
    //   return 0
    // }
  },

  mutations: {
    setData(state, data) {
      state.lists = data
    },

    // initial code
    // [SET_DATA](state, data) {
    //   state.lists = data
    // },
  },

  actions: {
    setDatas: async function ({ commit }) {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        // console.log(response.data)
        commit('setData', response.data)

        return response
      } catch (err) {
        console.log(err)
      }

      // initial code
      // context.commit('setData', data);
    },
  },
});
