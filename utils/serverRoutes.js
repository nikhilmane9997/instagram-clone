import * as admin from "firebase-admin/app";

const serviceAccount = JSON.parse(process.env.ADMIN);
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;
