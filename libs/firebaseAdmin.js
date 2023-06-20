import admin from 'firebase-admin'
import { getFirestore } from 'firebase-admin/firestore'

try {

    if (!admin.apps?.length) {
        if (process.env.NEXT_PUBLIC_FIREBASE_SERVICE_ACCOUNT !== undefined) {
            admin.initializeApp({
                credential: admin.credential?.cert(
                    JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_SERVICE_ACCOUNT)
                ),
                databaseURL: 'https://rich-inu-ai-default-rtdb.firebaseio.com'
            });
            console.log('Initialized.')
        }
    }




} catch (error) {
    /*
     * We skip the "already exists" message which is
     * not an actual error when we're hot-reloading.
     */
    if (!/already exists/u.test(error.message)) {
        console.error('Firebase admin initialization error', error.stack)
    }
}
const db = getFirestore()
export default admin
export { db }
