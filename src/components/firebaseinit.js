
import 'firebase/firestore'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp
(firebaseConfig)
export default firebaseApp.firestore()

