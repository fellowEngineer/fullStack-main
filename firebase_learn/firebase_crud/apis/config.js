import { initializeApp, firestore } from "firebase";

const firebaseConfig = {};

initializeApp(firebaseConfig);
const db = firestore();

const User = db.collections("Users");
export default User;
