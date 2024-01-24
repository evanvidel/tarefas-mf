import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoNlcSKJILMIzgOvHBgZF7yOzQUBr8nhE",
  authDomain: "tarefas-top.firebaseapp.com",
  projectId: "tarefas-top",
  storageBucket: "tarefas-top.appspot.com",
  messagingSenderId: "1079651900020",
  appId: "1:1079651900020:web:aa73d6626e431c7e514f21",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
export { db };
