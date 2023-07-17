import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { db } from "../libs/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { UserContext } from "./_app";

export default function Accept() {
  const router = useRouter();
  const { user, getData } = useContext(UserContext);

  const acceptInvitation = async () => {
    const doc2 = await getDoc(doc(db, "trellotickets", router.query.id));
    if (!doc2.data().users.includes(user.email)) {

      await updateDoc(doc(db, "trellotickets", router.query.id), {
        ...doc2.data(),
        users: [...doc2.data().users, user.email],
      });
    }
    getData();
    router.push('/mindmap');
  };

  useEffect(() => {
    if (!user) {
      router.push(`/signin?accept=${router.query.id}`)
    }
  }, [router, user])

  return (
    <div className="flex justify-center">
      <button
        onClick={acceptInvitation}
        className="bg-[#625BF7] text-[#fff] px-4 py-2 text-[20px] font-bold mt-2 rounded-[10px]"
      >
        Accept Invitation
      </button>
    </div>
  );
}
