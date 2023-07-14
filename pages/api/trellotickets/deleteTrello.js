import { db } from "../../../libs/firebaseAdmin";

export default async function handler(
    req,
    res
) {
    try {
        await db.collection('trellotickets').doc(req.query.id).delete();
        res.status(200).send("Deleted");
    } catch (error) {
        res.status(400).json(error)
    }
}
