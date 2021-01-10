<template>
  <div id="app">
    <Topbar> </Topbar>
    <router-view/>
  </div>
</template>

<script>
import {firebaseApp, firestore} from '../firebase/firebase'
import {store} from './main'
import Topbar from './components/Topbar.vue'
import {performBlur} from "./stackBlur"
// import Register from './components/Register'
export default {
  name: 'App',
  components: {
    Topbar,
  },
  computed: {
    currUser() {
      return store? store.getters.currUser: "";
    },
  },
  watch: {
    currUser() {
      if (this.$route.path != "/") {
        this.$router.push("/");
      }
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
