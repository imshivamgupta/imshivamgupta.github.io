import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from './FirebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp
