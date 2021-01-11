<template>
  <div>
    <div class="event" @click="goToEventSlot"> 
      <h2>Id: {{id}}</h2>
      <h2>Time: {{timestamp}} </h2>
      <h2>Description: {{description}} </h2>
      <button> Yes </button>
      <button> No </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventSlot',
  data () {
    return {
      email: "",
      password: "",
      message: "",
      firebaseData: null,
    }
  },
  props: {
    id: Number, //eventid,
    timestamp: Number,
    description: String,
  },
  methods: {
    
  },
}
</script>

<style scoped>
.error{
  color: red;
}
</style>