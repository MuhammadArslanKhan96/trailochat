import admin from '../../libs/firebaseAdmin';
import { db } from '../../libs/firebaseAdmin';




const addUser = async (
    user
) => {
    try {
        const document = await db.collection('users').doc(user.email).update(user)
        return document;
    } catch (e) {
        console.log(e.message)
    }
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {

            await addUser(
                req.body
            );
            res.status(200).send('Done');

        } catch (err) {
            console.log(err.message)
            res.status(400).send(err.message);
        }
    } else {
        res.status(500).send(`Cannot use ${req.method} method on this url`);
    }
}
