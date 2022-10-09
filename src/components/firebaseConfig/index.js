import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getAnalytics } from 'firebase/analytics'

function StartFirebase() {
  const firebaseConfig = {
    apiKey: 'AIzaSyA-9PFiIzDs6P3TO4iB_ex3OuEueTRi2v0',
    authDomain: 'fir-react-18a57.firebaseapp.com',
    databaseURL: 'https://fir-react-18a57-default-rtdb.firebaseio.com',
    projectId: 'fir-react-18a57',
    storageBucket: 'fir-react-18a57.appspot.com',
    messagingSenderId: '75115380430',
    appId: '1:75115380430:web:baf8b3e591c1da213ada9f',
    measurementId: 'G-2QLXMXNQWN'
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)

  return getDatabase(app)
}

export default StartFirebase
