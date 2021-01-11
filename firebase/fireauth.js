import {fireAuth, firestore} from "./firebase"
import {store} from '../src/main'

export const createUser = async (email, password, firstName, lastName) => {
  const {user} = await fireAuth.createUserWithEmailAndPassword(email, password);
  return firestore.collection("users").doc(user.uid).set({
    uid: user.uid,
    email: user.email,
    firstName: firstName,
    lastName: lastName,
  })
}

export const signUserIn = (email, password) => {
  return fireAuth.signInWithEmailAndPassword(email, password);
}

export const signUserOut = () => {
  fireAuth.signOut().then(credential => {
    console.log("::signUserOut")
  }).catch(err => {
    console.log("sign out error")
  })
}

fireAuth.onAuthStateChanged(user => {
  console.log("::onAuthStateChanged")
  if (user) {
    store.commit('setUser', user.email);
  } else {
    store.commit('setUser', "");
  }
});
