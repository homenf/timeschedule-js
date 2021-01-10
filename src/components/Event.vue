<template>
  <div class='register'>
    <div>
      <h2 id='eNH'>Event Name Here</h2>
      <div onload=getEvent()></div>
      <!-- <p id=my-element></p> -->
      <!-- <form class="register">
        <input type="text" v-model="email" placeholder="Email">
        <br>
        <input type="password" v-model="password" placeholder="Password">
        <br>
        <input type="password" v-model="confirmpassword" placeholder="Confirm password">
        <br>
        <p class="error">{{message}}</p>
      </form> -->
    </div>
  </div>
</template>

<script>
import {firebaseApp, firestore} from '../../firebase/firebase'

export default {
  name: 'Register',
  data () {
    return {
    }
  },
  methods: {
    // async getEvents() {
    //     const snapshot = await firestore.collection('events').get()
    //     let html ='';
    //     snapshot.docs.map(doc => doc.data()).forEach( eventDatas => {
    //         eventData = eventDatas.data();
    //         console.log(eventData);
    //         // Create your element's HTML inside the loop
    //         html += 
    //         '<div>${eventData.description}</div>';
    //     });
    //     document.getElementById('my-element').innerHTML = html;
    // },
    // getEvent () {
        // const snapshot = await firestore.collection('events').get();
        // print snapshot.docs.map(doc => doc.data());
    //   var eventsCollect = firestore.collection('events')
    //   event
    // },
    getEvent () {
      var namesCollect = firestore.collection('names')
      namesCollect.doc("testDoc").get().then(snapshot => {
        if (snapshot.exists) {
          console.log(snapshot.data());
        } else {
          console.log("no such document");
        }
      }).catch(err => {
        console.log("error occurred when fetching document");
      })
    },
    setName () {
      var namesCollect = firestore.collection('names')
      namesCollect.doc("testDoc2").set({
        first: "harry",
      }).catch(err => {
        console.log("error occurred when fetching document");
      })
    },
  }
}
</script>
