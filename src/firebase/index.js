import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcbXCqG8DOK5X18-73Se0BZfSgsC51iKI",
    authDomain: "twitter-clone-inflearn-b945f.firebaseapp.com",
    projectId: "twitter-clone-inflearn-b945f",
    storageBucket: "twitter-clone-inflearn-b945f.appspot.com",
    messagingSenderId: "144745629731",
    appId: "1:144745629731:web:f275a4c0bebe81ced80996",
    measurementId: "G-YJLEKJ7J11"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()