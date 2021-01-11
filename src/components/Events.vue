<template>
  <div class='events'>
    <h2>Here are your events</h2>
    <h3> {{message}} </h3>
    <EventCreator> </EventCreator>
      <button v-on:click="getAllEvents">Load Events</button>
      <ul id="event-list">
        <Event v-for="event in events" :key="event.id" 
          :id="event.id" :description="event.description" :timestamp="event.timestamp">
        </Event>
      </ul>
  </div>
</template>

<script>
import {firebaseApp, firestore} from '../../firebase/firebase'
import Event from "@/components/Event.vue"
import EventCreator from "@/components/EventCreator.vue"

export default {
  name: 'Events',
  components: {
    Event,
    EventCreator,
  },
  data () {
    return {
      events: [],
      message: "",
    }
  },
  methods: {
    getAllEvents () {
      var self = this;
      firestore.collection("events").get().then(function(querySnapshot) {
        self.message = "";
        self.events = [];
        querySnapshot.forEach(function(doc) {
          const data = doc.data();
          self.events.push({
            id: data.id,
            description: data.description,
            timestamp: data.timestamp,
          });
        })
      }).catch(err => {
        self.message = err;
      });
    },
  },
}
  
</script>
