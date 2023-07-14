import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import axios from "axios";

export default async function getUserOnReload(setWallet) {
    try {
        onAuthStateChanged(auth, async function (user) {
            if (user !== null && user.uid !== 'undefined') {
                try {
                    const user2 = await axios.get(
                        `/api/manage-user?name=${user.displayName === 'null' ? 'User' : user.displayName}&email=${user.email}&image=${user.providerData[0].photoURL !== 'null' ? user.providerData[0].photoURL : '/_next/static/media/profile.56462009.png'}&password=${user.reloadUserInfo.passwordHash ? user.reloadUserInfo.passwordHash : 'test1'}`
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
