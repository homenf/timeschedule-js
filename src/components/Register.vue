<template>
  <div class='register'>
    <div>
      <h2>Registration Form</h2>
      <form class="register">
        <input type="text" v-model="email" placeholder="Email">
        <br>
        <input type="password" v-model="password" placeholder="Password">
        <br>
        <input type="text" v-model="firstName" placeholder="first name">
        <br>
        <input type="password" v-model="lastName" placeholder="last name">
        <br>
        <!-- <input type="password" v-model="confirmpassword" placeholder="Confirm password">
        <br> -->
        <button @click="registerUser">Register</button>
        <p class="error">{{message}}</p>
        Got an account? <button @click="signInInstead">Sign in instead!</button>
      </form>
    </div>
  </div>
</template>

<script>
import {createUser} from "../../firebase/fireauth"

export default {
  name: 'Register',
  data () {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      message: "",
      firebaseData: null,
    }
  },
  methods: {
    async registerUser () {
      createUser(this.email, this.password, this.firstName, this.lastName).then((user) => {
        // Signed in 
        this.message = "Welcome :)";
        this.$router.push('/')
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
      // register(this.email, this.password).then(res => {
      //   this.success = true
      //   this.$router.push({ name: 'Main'})
      // }).catch(e => {
      //   this.failure = true
      // })
    },
    signInInstead () {
      this.$router.push('/login')
    },
  }
}
</script>
