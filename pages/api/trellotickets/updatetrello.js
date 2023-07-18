import { db } from "../../../libs/firebaseAdmin";

export default async function handler(
    req,
    res
) {
    if (req.method === 'PUT') {
        try {
            const collection = db.collection('trellotickets');

            await collection.doc(req.query.mapId).set({
                ...req.body,
                created_at:
                    new Date().getTime(),
                updated_at:
                    new Date().getTime(),
            });
            res.status(200).json({ message: 'done' })
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    } else {
        res.status(500).send(`Method not Allowed`)
    }
}
