import { initializeApp, getApps, cert, App, getApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const serviceKeyBase64 = process.env.FIREBASE_SERVICE_KEY;
if (!serviceKeyBase64) {
  throw new Error("Missing Firebase service key");
}

const serviceKey = JSON.parse(Buffer.from(serviceKeyBase64, "base64").toString("utf8"));

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
  const apps = getApps();
  let app: App;

  if (!apps.length) {
    app = initializeApp({
      credential: cert(serviceKey)
    });
  } else {
    app = getApp()
  }

  return {
    auth: getAuth(app),
    db: getFirestore(app),
  };
}

export const { auth, db } = initFirebaseAdmin();