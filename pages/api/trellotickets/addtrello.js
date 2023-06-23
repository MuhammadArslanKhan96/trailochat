import { db } from "../../../libs/firebaseAdmin";
import { v4 as uuidv4 } from "uuid";

export default async function handler(
    req,
    res
) {
    if (req.method === 'POST') {
        try {
            const citiesRef = db.collection('trellotickets').where('user', '==', req.query.user);
            const collection = db.collection('trellotickets');
            const snapshot = (await citiesRef.get()).docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            const snapshot2 = (await collection.get()).docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            for (var doc2 of snapshot) {
                await db.collection('trellotickets').doc(doc2.id).delete();
            }
            for (var doc2 of (req.body)) {
                await collection.doc(uuidv4()).set({
                    ...doc2,
                    created_at:
                        snapshot2.filter(i => (i.topic === doc2.topic)).length ?
                            snapshot2.filter(i => (i.topic === doc2.topic))[0].created_at
                            :
                            new Date().getTime(),
                    updated_at:
                        new Date().getTime(),
                });
            }
            res.status(200).json(snapshot)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    } else {
        res.status(500).send(`Method not Allowed`)
    }
}
