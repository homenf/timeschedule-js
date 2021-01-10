<template>
  <div class="Topbar">
    <ul>
      <li> About </li>
      <li> {{currUser || "Not Signed In"}} </li>
      <li v-if="!atSignInRoute">
        <button @click="userSignIn" v-if="!currUser">Sign in</button>
        <button @click="userSignOut" v-else>Sign Out</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {signUserOut} from "../../firebase/fireauth"
import {store} from '../main'

export default {
  name: 'Topbar',
  data () {
    return {
    }
  },
  methods: {
    userSignIn () { // user going to sign in page
      if (!this.atSignInRoute) {
        this.$router.push('/login')
      }
    },
    userSignOut () {
      signUserOut();
    }
  },
  computed: {
    currUser() {
      return store.getters.currUser;
    },
    //Check if we are at the Login route
    atSignInRoute() {
      console.log("topbar::atSignInRoute")
      return this.$route.path == "/login"
    }    
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  display: inline;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li:hover {
  background-color: #111;
}
</style>
