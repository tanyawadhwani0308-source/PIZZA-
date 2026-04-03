// Firebase configuration — Tenya's Pizza (project: tenya-pizza)
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCkFN-EgG3HO2UZQ9mgvjeFv6IggPeXFwk",
  authDomain: "tenya-pizza.firebaseapp.com",
  projectId: "tenya-pizza",
  storageBucket: "tenya-pizza.firebasestorage.app",
  messagingSenderId: "485847030144",
  appId: "1:485847030144:web:af333101f38427827e4965",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
