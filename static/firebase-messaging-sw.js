importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");


const firebaseConfig = {
    apiKey: "AIzaSyBEn2e0V2LkZPrKIjVvs-2MLCrk2gIjSi4",
    authDomain: "logappp-6a8a2.firebaseapp.com",
    projectId: "logappp-6a8a2",
    storageBucket: "logappp-6a8a2.appspot.com",
    messagingSenderId: "783838753260",
    appId: "1:783838753260:web:e443a1d4d684ff65a390c9"
  };

  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging()
    messaging.onBackgroundMessage((payload) => {
        console.log(
            "[firebase-messaging-sw.js] Received background message ",
            payload
        )
    })