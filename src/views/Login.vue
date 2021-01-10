<template>
  <div>
    <div>
      <h2>Sign in Page</h2>
      <form class="register">
        <input type="text" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Password">
        <button @click="userSignIn">Sign In</button>
        <!-- <button @click="schedulerSignIn">Sign In</button> -->
        <p class="error">{{message}}</p>
        Not registered yet? 
        <button type="submit" @click="userRegister">Register</button>
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
import VueForm from 'vue-form';
import {signUserIn} from "../../firebase/fireauth"
import {store} from '../main'
import Register from "@/components/Register.vue"

const documentPath = 'users/'

export default {
  name: 'Login',
  components: {
    Register,
  },
  data () {
    return {
      email: "",
      password: "",
      message: "",
      firebaseData: null,
    }
  },
  methods: {
    userSignIn () {
      signUserIn(this.email, this.password).then(credential => {
        this.message = "Welcome :)";
      }).catch(err => {
        this.message = err.message;
      })
    },
    userRegister () {
      this.$router.push('/register')
      //this.regNeeded=true;
    },

  },
}
</script>

<style scoped>
.error{
  color: red;
}
</style>
