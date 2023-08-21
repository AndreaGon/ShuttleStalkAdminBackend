import admin from 'firebase-admin';
import serviceAccount from '../../env/serviceAccountKey.json' assert { type: "json" };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://shuttle-stalk-default-rtdb.asia-southeast1.firebasedatabase.app"
});

export default admin;