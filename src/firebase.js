import * as firebase from "firebase";
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBQsN-KZCWaN0O1LQtv9XOasfMmkYxHxzg",
    authDomain: "restaurantmetrics-8ece2.firebaseapp.com",
    databaseURL: "https://restaurantmetrics-8ece2.firebaseio.com",
    projectId: "restaurantmetrics-8ece2",
    storageBucket: "restaurantmetrics-8ece2.appspot.com",
    messagingSenderId: "596987006125",
    appId: "1:596987006125:web:d21841931009ab84afca24"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);
  
  export default fireDb.database().ref();