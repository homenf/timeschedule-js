<template>
  <div class='events'>
    <div>
      <h2>Here are your events</h2>
        <button v-on:click="getAllEvents">Load Events</button>
        <nav class="event-list"></nav>
        <input type="text" v-model="name" placeholder="Event name">
        <input type="text" v-model="description" placeholder="Description">
        <button v-on:click="addEvent">New Event</button>
    </div>
  </div>
</template>

<script>

import {firebaseApp, firestore} from '../../firebase/firebase'
import Event from "@/components/Event.vue"

export default {
  name: 'Events',
  components: {
    Event,
  },
  data () {
    return {
      name: '',
      description: '',
      timestamp: '',
    }
  },
  methods: {
    addEvent () {
      // Add a new document in collection "events"
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
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
    },
    getAllEvents () {
      var output =
      // [START get_multiple_all]
      firestore.collection("events").get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              const eventList = document.querySelector('.event-list')
              const event = document.createElement("button")
              event.onclick = displayEvent(); 
              const e = document.createElement("div")
              e.innerHTML = doc.id
              const des = document.createElement("div")
              des.innerHTML = doc.data().description
              const timeCreated = document.createElement("div")
              timeCreated.innerHTML = doc.data().timestamp
              event.appendChild(e)
              event.appendChild(des)
              event.appendChild(timeCreated)
              eventList.appendChild(event)
              console.log(doc.id, " => ", doc.data());
          });
      });
      // [END get_multiple_all]
      return output;
    },
    displayEvent () {

    }
  },
}
  
</script>
