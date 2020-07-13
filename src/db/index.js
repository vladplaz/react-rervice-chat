import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyATJc9rw4_lytjhmm6jUlI3E48Uy2LGKtE',
  authDomain: 'services-react.firebaseapp.com',
  databaseURL: 'https://services-react.firebaseio.com',
  projectId: 'services-react',
  storageBucket: 'services-react.appspot.com',
  messagingSenderId: '367078791988',
  appId: '1:367078791988:web:2561a5c5c13915500c6361',
  measurementId: 'G-ZJWS7G0BJZ'
}

const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

export default db

const {Timestamp} = firebase.firestore
export {Timestamp}
