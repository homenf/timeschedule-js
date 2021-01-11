import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/views/MainPage'
import Login from '@/views/Login'
import Register from '@/components/Register'
import EventSlot from '@/views/EventSlot'

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
    },  {
      path: "/register",
      name: 'Register',
      component: Register
    }, {
      path: '/eventslot', 
      name: 'EventSlot',
      component: EventSlot, 
      props: true
    },
  ]
})
