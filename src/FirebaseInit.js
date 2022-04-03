import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from './FirebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)

const timestamp = firebase.firestore.FieldValue.serverTimestamp
export { timestamp }

export const db = firebaseApp.firestore()

export default firebaseApp
