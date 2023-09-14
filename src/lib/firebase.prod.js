import Firebase from "firebase/compat/app";

import "firebase/compat/firestore";

import "firebase/compat/auth";

// import { seedDatabase } from "../seed";

// we need to somehow seed the database

// we need a config here

const config = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
