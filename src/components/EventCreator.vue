<template>
  <div class='event'>
    <div> {{message}} </div>
    <input type="text" v-model="name" placeholder="Event name">
    <input type="text" v-model="description" placeholder="Description">
    <h3> Participants: </h3>
    <div class="participants">
      <div class="participant" v-for="(p, idx) in participants" :key="p.email || 1">
        <input v-model.lazy="p.email"> 
        <button v-if="participants.length > 1" @click="deleteParticipant(idx)">Delete</button>
      </div>
    </div>
    <button @click="addParticipant">Add participant</button>
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
      participants: [{
        email: "",
      }],
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
    addParticipant () {
      this.participants.push({email: ""});
    },
    deleteParticipant (idx) {
      this.participants.splice(idx, 1);
    }
  },
}
  
</script>
