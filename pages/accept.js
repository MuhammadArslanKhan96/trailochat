import { useRouter } from "next/router";
import React, { useContext } from "react";
import { db } from "../libs/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { UserContext } from "./_app";

export default function Accept() {
  const router = useRouter();
  const {user} = useContext(UserContext);

  const acceptInvitation = async () => {
    const doc2 = await getDoc(doc(db, "trellotickets", router.query.id));
    await updateDoc(doc(db, "trellotickets", router.query.id), {
      ...doc2.data(),
      users: [...doc2.data().users, user.email],
    });
    window.location.href = '/mindmap';
  };
  
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
