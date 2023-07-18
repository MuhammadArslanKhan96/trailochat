import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { UserContext } from "@/pages/_app";
import Profile from "@/public/images/profile.png";
import { auth } from "@/libs/firebase";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className="flex justify-between  px-[90px] py-[10px]">
        {/* <div className='text-transparent'> john doe</div> */}

        {router.pathname === "/mindmap" ? (
          <div></div>
        ) : (
          <div className="flex justify-between gap-x-6">
            <Link
              href="/mindmap?redirect=chart"
              className="flex items-center text-[16px] font-bold bg-[#625BF7] text-[#fff] rounded-[10px] px-4 py-2"
            >
              Create a new MindMap
            </Link>

            <Link
              href="/mindmap?redirect=project"
              className="flex items-center text-[16px] font-bold bg-[#625BF7] text-[#fff] rounded-[10px] px-4 py-2"
            >
              Create a new Trello
            </Link>
          </div>
        )}

        {user.email ? (
          <div>
            <div
              className="flex gap-x-4 items-center"
              onClick={() => {
                auth.signOut();
                setUser(undefined);
              }}
            >
              <div className="text-black text-[16px] font-bold">
                {user.name === "null" ? "User" : user.name}
              </div>
              <Image
                src={user.image === "null" ? Profile.src : user.image}
                alt=""
                width={50}
                height={50}
                className="bg-[#D9D9D9] rounded-full w-[50px] h-[50px]"
              ></Image>
            </div>
          </div>
        ) : (
          <Link href="/signin">
            <div className="flex gap-x-4 items-center">
              <div className="text-black text-[20px] font-bold">SignIn</div>
              {/* <div className='bg-[#D9D9D9] rounded-full w-[50px] h-[50px]'></div> */}
            </div>
          </Link>
        )}
      </div>
      <div className="h-[1px] w-full text-transparent bg-[#a2a2a2bd] rounded-full"></div>
    </div>
  );
};

export default Header;
