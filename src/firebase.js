import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyCf4phHro__keisZ-fyHubfT1RVQog0t94",
  authDomain: "medifind-1254d.firebaseapp.com",
  projectId: "medifind-1254d",
  storageBucket: "medifind-1254d.firebasestorage.app",
  messagingSenderId: "412295585179",
  appId: "1:412295585179:web:fff68e8055c443c5aa553e",
  measurementId: "G-G2K2Z2CQVW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

let analytics;
isSupported().then(() => {
    analytics = getAnalytics(app);
}).catch(error => {
    console.error("Error initializing analytics:", error);
});

const storage = getStorage(app);

export { db, auth,storage }; // Correct export statemen