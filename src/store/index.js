import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null
  },
  getters: {
    getUserInfo(s) {
      return s.userInfo;
    }
  },
  mutations: {
    setUserInfo(s, userInfo) {
      s.userInfo = userInfo;
    }
  },
  actions: {},
  modules: {}
})