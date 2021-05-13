import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var Config = {
  apiKey: "AIzaSyD2nG2fyHFgklzMyM_-hUDmxmmZj-9I-KI",
  authDomain: "image-gallery-59de5.firebaseapp.com",
  projectId: "image-gallery-59de5",
  storageBucket: "image-gallery-59de5.appspot.com",
  messagingSenderId: "340549539966",
  appId: "1:340549539966:web:57dc1fcb9bcf60236ca02f",
};

firebase.initializeApp(Config);
const storage = firebase.storage();
const fireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, fireStore,timestamp, firebase as default };
