// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVszQzaw0lUIvY4pPF_vJm-m0MHlrNs04",
    authDomain: "my-bages.firebaseapp.com",
    projectId: "my-bages",
    storageBucket: "my-bages.appspot.com",
    messagingSenderId: "869855561494",
    appId: "1:869855561494:web:21c690197ed7c36852f237",
    measurementId: "G-W4GSCNX81Q"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()

export { app, auth };