import {fireAuth} from "./firebase"
import {store} from '../src/main'

export const createUser = (email, password) => {
  return fireAuth.createUserWithEmailAndPassword(email, password)
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
