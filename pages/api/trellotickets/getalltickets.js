import { db } from "../../../libs/firebaseAdmin";

export default async function handler(
    req,
    res
) {

    try {

        const citiesRef = db.collection('trellotickets');
        const snapshot = (await citiesRef.get()).docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        res.status(200).json(snapshot)
    } catch (error) {
        res.status(400).json(error)
    }
}
