<template>
  <div class='event'>
    <div> {{message}} </div>
    <input type="text" v-model="name" placeholder="Event name">
    <input type="text" v-model="description" placeholder="Description">
    <button v-on:click="addEvent">Create</button>
  </div>
</template>

<script>
import {firebaseApp, firestore} from '../../firebase/firebase'

export default {
  name: 'EventCreator',
  data () {
    return {
      name: "",
      description: "",
      message: "",
    }
  },
  methods: {
    addEvent () {
      // Add a new document in collection "events"
      const self = this;
      const currentDate = new Date()
      var time = currentDate.getTime()
      time = time.toString()
      time = time.slice(0, -3)
      time = parseInt(time)
      firestore.collection('events').doc(this.name).set({
        description: this.description,
        timestamp: time // UNIX time stamp (UTC)
      })
      .then(function() {
        self.message = "Document successfully written!";
      })
      .catch(function(error) {
        self.message = error;
      });
    },
  },
}
  
</script>
