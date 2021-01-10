import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/views/MainPage'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    }, {
      path: "/login",
      name: 'Login',
      component: Login
    }
  ]
})
