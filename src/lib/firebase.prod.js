import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed'

const config = {
  apiKey: 'AIzaSyBlpTYRb2qsaYsBddhvIgtBspfLsqYiVNk',
  authDomain: 'netflix-538c4.firebaseapp.com',
  databaseURL: 'https://netflix-538c4.firebaseio.com',
  projectId: 'netflix-538c4',
  storageBucket: 'netflix-538c4.appspot.com',
  messagingSenderId: '894298107376',
  appId: '1:894298107376:web:bf0c00fd6d2452b485c135',
}

const firebase = Firebase.initializeApp(config)
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase)
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase }
