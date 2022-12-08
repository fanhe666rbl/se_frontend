import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageNow:'classes'
  },
  getters: {
  },
  mutations: {
    setPageNow(state, pageNow){
      state.pageNow = pageNow
    },
  },
  actions: {
  },
  modules: {
  }
})
