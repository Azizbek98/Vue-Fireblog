import firebase from "firebase/app"; // import { initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQMPeazmVmzhyuHZZxGbCFJLkGkd2Y6eo",
  authDomain: "vue-fireblog-11dca.firebaseapp.com",
  projectId: "vue-fireblog-11dca",
  storageBucket: "vue-fireblog-11dca.appspot.com",
  messagingSenderId: "478114510034",
  appId: "1:478114510034:web:be7f7d8f97a27182a4a90b",
};

const app = firebase.initializeApp(firebaseConfig); // const app = initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebase.firestore();
