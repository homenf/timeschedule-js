<template>
  <div>
    <h2> Functionality 3: Calling the backend API </h2>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    <button @click="submitMessage"> Submit </button>
    <button @click="getUser"> Test </button>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'APIcaller',
  data () {
    return {
      message: "",
    }
  },
  methods: {
    submitMessage() {
      console.log(this.message);
    },
    async getUser() {
      try {
        const response = await axios.get('http://localhost:8081/api/customers');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

<style scoped>
canvas {
  border: 1px black solid;
}
</style>
