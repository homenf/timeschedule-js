<template>
  <div>
    <div>
      <h2>Sign in Page</h2>
      <form class="register">
        <input type="text" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Password">
        <button @click="userSignIn">Sign In</button>
        <p class="error">{{message}}</p>
      </form>
    </div>
    <!-- <div v-else>
      <h2>Sign in with Google</h2>
      <form class="register">
        <input type="text" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Password">
        <button @click="signUserIn">Sign In</button>
      </form>
    </div> -->
    <!-- <button v-if="useGoogle" @click="switchToGoogle(false)">Sign in with Email</button>
    <button v-else @click="switchToGoogle(true)">Sign in with Google </button> -->
  </div>
</template>

<script>
import {signUserIn} from "../../firebase/fireauth"
import {store} from '../main'

export default {
  name: 'Login',
  data () {
    return {
      email: "",
      password: "",
      message: "",
    }
  },
  methods: {
    userSignIn () {
      signUserIn(this.email, this.password).then(credential => {
        this.message = "";
      }).catch(err => {
        this.message = err.message;
      })
    },
  },
}
</script>

<style scoped>
.error{
  color: red;
}
</style>
