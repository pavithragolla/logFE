import { initializeApp, getApps } from 'firebase/app'
import { getMessaging } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: "AIzaSyBEn2e0V2LkZPrKIjVvs-2MLCrk2gIjSi4",
  authDomain: "logappp-6a8a2.firebaseapp.com",
  projectId: "logappp-6a8a2",
  storageBucket: "logappp-6a8a2.appspot.com",
  messagingSenderId: "783838753260",
  appId: "1:783838753260:web:e443a1d4d684ff65a390c9"
};

const apps = getApps()
const app = !apps.length ? initializeApp(firebaseConfig) : apps[0]

export const messaging = getMessaging(app)



