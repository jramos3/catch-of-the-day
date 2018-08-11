import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCI38iquLBu5C-b5bkyQxqQmLn5GsrTxRQ",
  authDomain: "catch-of-the-day-jeff-ramos.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jeff-ramos.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
