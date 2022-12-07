// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpNktBQJekMeCsDPC83fG8Su0mNUtIl-4",
    authDomain: "fir-login-5ec1f.firebaseapp.com",
    projectId: "fir-login-5ec1f",
    storageBucket: "fir-login-5ec1f.appspot.com",
    messagingSenderId: "311849439279",
    appId: "1:311849439279:web:e1eb46522f42fcd60ff6da",
    measurementId: "G-PYQCLY0JPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app