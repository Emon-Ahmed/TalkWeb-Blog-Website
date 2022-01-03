import { initializeApp, firebase } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const initializeAuth = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuth;

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {auth, googleAuthProvider}
