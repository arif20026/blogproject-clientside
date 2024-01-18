// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh1kMeqPDe45LUqAHj2wskPebpJO1SAB8",
  authDomain: "assignment-11-blog-client.firebaseapp.com",
  projectId: "assignment-11-blog-client",
  storageBucket: "assignment-11-blog-client.appspot.com",
  messagingSenderId: "65250338283",
  appId: "1:65250338283:web:be5417ed067619ebdaa5ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app