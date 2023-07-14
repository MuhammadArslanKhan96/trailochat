import { signInWithCustomToken } from 'firebase/auth'
import { auth } from './firebase';
import axios from 'axios';

export default async function login(user) {
    const api = await axios.get(
        `/api/manage-user?name=${user.displayName}&email=${user.email}&image=${user.providerData[0].photoURL}&password=${user.password}`
    );
    const u = await api.data;

    await signInWithCustomToken(auth, u.token);
}
