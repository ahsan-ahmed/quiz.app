import firebase from 'firebase';
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDlYRKWFeEDPOnC46YvnZ_D5WJHv5ptTYo",
    authDomain: "muhammadahsanquizapp.firebaseapp.com",
    databaseURL: "https://muhammadahsanquizapp.firebaseio.com",
    projectId: "muhammadahsanquizapp",
    storageBucket: "muhammadahsanquizapp.appspot.com",
    messagingSenderId: "770776023740"
  };
var fire = firebase.initializeApp(config);
export default fire;
