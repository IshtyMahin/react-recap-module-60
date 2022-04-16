// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEzvPs08jjjk0aGEnFfecbW9OF5yX5Nhw",
  authDomain: "genius-car-services-6772c.firebaseapp.com",
  projectId: "genius-car-services-6772c",
  storageBucket: "genius-car-services-6772c.appspot.com",
  messagingSenderId: "265824033085",
  appId: "1:265824033085:web:71e71e098a7c6588a50d54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;