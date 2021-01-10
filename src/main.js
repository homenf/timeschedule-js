// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currUser: "",
  },
  mutations: {
    setUser (state, newUser) {
      console.log("::store::setUser is called", state)
      state.currUser = newUser
    }
  },
  getters: {
    currUser(state) {
      console.log("::store::getter::currUser is called", state)
      return state.currUser;
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})