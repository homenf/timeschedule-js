<template>
  <div>
    <h1>Main Page</h1>
    <DrawingBoard> </DrawingBoard>
    <h2> Functionality 2: Get and Set Firestore</h2>
    <button v-on:click="getName"> Get Name</button>
    <button v-on:click="setName"> Set Name </button>
  </div>
</template>

<script>
import {firebaseApp, firestore} from '../../firebase/firebase'
import DrawingBoard from "@/components/DrawingBoard.vue"
export default {
  name: 'MainPage',
  components: {
    DrawingBoard,
  },
  methods: {
    getName () {
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

<style>
</style>
