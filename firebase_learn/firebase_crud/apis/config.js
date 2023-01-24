import { initializeApp, firestore } from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBgu-nQjStxa7rXzvyLn24K9wlfCaswzqg",
    authDomain: "test-tube-56dbd.firebaseapp.com",
    projectId: "test-tube-56dbd",
    storageBucket: "test-tube-56dbd.appspot.com",
    messagingSenderId: "578538983190",
    appId: "1:578538983190:web:6d33d047821cbdd01f0a37"
};

initializeApp(firebaseConfig);
const db = firestore();

const User = db.collections("Users");
export default User;