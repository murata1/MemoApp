import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebaseの設定情報（Firebase Consoleから取得）
const firebaseConfig = {
  apiKey: process.env.EXPORT_PUBLIC_FB_API_KEY,
  authDomain: process.env.EXPORT_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.EXPORT_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.EXPORT_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPORT_PUBLIC_FB_MESSAGING_SENDER_ID,
  appId: process.env.EXPORT_PUBLIC_FB_APP_ID
};

// Firebaseアプリを初期化
const app = initializeApp(firebaseConfig);

// Authの初期化
const auth = getAuth(app);

// Firestoreの初期化
const db = getFirestore(app);

export { app, auth, db };
