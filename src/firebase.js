import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyACr9U6fd3aeaz21gy-UFV2MzjOUPGatoI",
  authDomain: "manager-notify-test.firebaseapp.com",
  projectId: "manager-notify-test",
  storageBucket: "manager-notify-test.appspot.com",
  messagingSenderId: "930188761326",
  appId: "1:930188761326:web:484eb055eaf3269d573bff",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
  return messaging
    .getToken({
      vapidKey:
        "BI-3BYjpXoDqFlTi3793Tv70HZ2MqXN580mz9uR_KTtLxkX-j5efz4w-W6Sfyu33a9k4FZax8hUtvT5lp6GKO5w",
    })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
