import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
import { getAuth } from "firebase/auth";

const initializeAuth = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuth;

const auth = getAuth();

export {auth}
