import admin from '../../libs/firebaseAdmin';
import { db } from '../../libs/firebaseAdmin';




const addUser = async (
    user
) => {
    try {
        const document = await db.collection('users').doc(user.id).set({
            ...user, tier: 'Free'
        })
        return document;
    } catch (e) {
        console.log(e.message)
        throw new Error(`Error while signing up`)
    }
};



const getUser = async (uid) => {
    const docRef = db.collection('users').doc(uid).get();
    return docRef;
};





export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const { id, image, name, email, password } = req.query;
            const user = { id, image, name, email, password }
            const token = await admin.auth().createCustomToken(id);

            const docSnap = await getUser(user.id);
            if (docSnap.exists) {
                return res.status(200).send({ ...docSnap.data(), token });

            } else {
                await addUser(
                    user
                );
                const docSnap = await getUser(user.id);
                return res.status(201).send({ ...docSnap.data(), token });

            }
        } catch (err) {
            console.log(err.message)
            res.status(500).send(err.message);
        }
    } else {
        res.status(500).send(`Cannot use ${req.method} method on this url`);
    }
}
