// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Add the import for Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyCwfhTMZAZvhtL9WTXrxkDv6YObQlyXKdo",
  authDomain: "learnfirebase-2c766.firebaseapp.com",
  projectId: "learnfirebase-2c766",
  storageBucket: "learnfirebase-2c766.firebasestorage.app",
  messagingSenderId: "779367326886",
  appId: "1:779367326886:web:eeaaf3238f8b0212d80067",
  measurementId: "G-4L3F63QGW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth }; // Only export the necessary parts (auth in this case)
