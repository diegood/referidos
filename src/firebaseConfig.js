import firebase from 'firebase/app'
import 'firebase/auth'
import 'Firebase/firestore'

let config = {
  apiKey: 'AIzaSyDPgZh1kgW2oaP1WMa9CDFumtvf-oQBVok',
  authDomain: 'web4partners.firebaseapp.com',
  databaseURL: 'https://web4partners.firebaseio.com',
  projectId: 'web4partners',
  storageBucket: 'web4partners.appspot.com',
  messagingSenderId: '431503121350'
}
// let ftSettings = {timestampsInSnapshots: true}
// let firestore = firebase.firestore()
// firestore.settings(ftSettings)

firebase.initializeApp(config)
export default {
  db: firebase.firestore(),
  auth: firebase.auth()
}

