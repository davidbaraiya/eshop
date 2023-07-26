import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtqEz9MLjs0TNN_RieAN8dQNghh0yOBco",
  authDomain: "eshop-7e255.firebaseapp.com",
  projectId: "eshop-7e255",
  storageBucket: "eshop-7e255.appspot.com",
  messagingSenderId: "681198849248",
  appId: "1:681198849248:web:9d736f0189ed263e275485",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
