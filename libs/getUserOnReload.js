import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import axios from "axios";

export default async function getUserOnReload(setWallet) {
    try {
        onAuthStateChanged(auth, async function (user) {
            if (user !== null && user.uid !== 'undefined') {
                try {
                    const user2 = await axios.get(
                        `/api/manage-user?id=${user?.uid}}&name=${user.displayName}&email=${user.email}&image=${user.providerData[0].photoURL}`
                    );
                    setWallet(user2.data)
                } catch (error) {
                    console.log(error.message)
                }
            }
        });
    } catch (error) {
        console.log(error.message);
    }
}
