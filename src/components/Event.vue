<template>
  <div>
    <div class="event" @click="goToEventSlot"> 
      <h2>Id: {{id}}</h2>
      <h2>Time: {{timestamp}} </h2>
      <h2>Description: {{description}} </h2>
    </div>
  </div>
</template>

<script>
import {firebaseApp, firestore} from '../../firebase/firebase'

export default {
  name: 'Event',
  data () {
    return {
    }
  },
  props: {
    id: String,
    timestamp: Number,
    description: String,
  },
  methods: {
    goToEventSlot() {
      this.$router.push({
        name: 'EventSlot',
        path: 'eventslot',
        params: { 
          id: this.id,
          timestamp: this.timestamp,
          description: this.description
        }
      })
    }
  }
}
</script>

<style >
.event {
  width: 400px;
  border: 2px solid #000;
  margin: 0 auto 15px;
  text-align: center;
  padding: 20px;
  font-weight: bold;
  border-radius: 10px;
}

.event:hover {
  background-color: lightblue;
}
</style>
