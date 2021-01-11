<template>
  <div class='event'>
    <div> {{message}} </div>
    <input type="text" v-model="name" placeholder="Event name">
    <input type="text" v-model="description" placeholder="Description">
    <h3> Participants: </h3>
    <div class="participants">
      <div class="participant" v-for="(p, idx) in participants" :key="p.email || 1">
        <div v-if="!p.hide">
          <input v-model.lazy="p.email" v-on:blur="lookForUserName(idx)"> 
          <span> {{p.name}} </span>
          <button v-if="participants.length > 1" @click="deleteParticipant(idx)">Delete</button>
        </div>
      </div>
    </div>
    <button @click="addParticipant">Add participant</button>
    <button v-on:click="addEvent">Create</button>
  </div>
</template>

<script>
import {firebaseApp, firestore, emailsCollection} from '../../firebase/firebase'

export default {
  name: 'EventCreator',
  data () {
    return {
      name: "",
      description: "",
      message: "",
      participants: [{
        email: "",
        name: "",
        hide: false
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
    addParticipant() {
      this.participants.push({email: ""});
    },
    deleteParticipant (idx) {
      this.participants[idx].hide = true;
    },
    lookForUserName(idx) {
      if (!this.participants[idx].email) {
        return;
      }
      emailsCollection.doc(this.participants[idx].email).get().then(snapshot => {
        if (snapshot.data()) {
          this.participants[idx].name = snapshot.data().name;
        } else {
          this.participants[idx].name = "new user";
        }
      }).catch(err => {
        console.log(err);
      })
    }
  },
}
  
</script>
