importScripts('https://www.gstatic.com/firebasejs/6.1.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.1.4/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCb1Jj8G9v8Hc7STXdVUIe9a__kfEQLru0",
    authDomain: "ionic-kickstart.firebaseapp.com",
    projectId: "ionic-kickstart",
    storageBucket: "ionic-kickstart.appspot.com",
    messagingSenderId: "774888753595",
    appId: "1:774888753595:web:d095b62a9902e909d95c9e",
    measurementId: "G-F4Y04L1LLY"
});

const messaging = firebase.messaging();