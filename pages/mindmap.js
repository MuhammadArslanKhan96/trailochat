import { Inter } from "next/font/google";
import Image from "next/image";
import Header from "./Header";
import Search from "./Search";
import Side from "./Side";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { UserContext } from "@/pages/_app";
import { useRouter } from "next/router";
const Mindmap = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    if (router.query.redirect && user) {
      router.push("/" + router.query.redirect);
    }
  }, [router, user]);
  return (
    <div className="flex">
      <Side />
      <div className="w-[80%] flex flex-col">
        <Header />

        <div className="flex flex-col justify-center gap-y-[30px] h-[85vh] items-center">
          <div className="flex items-center gap-x-[23px]">
            <Image
              src="/images/fxemoji_moyai.svg"
              width={50}
              height={50}
              alt=""
            />
            <div className="text-[16px] font-bold align-middle text-black">
              What do you want me to do?
            </div>
          </div>

          <div className="flex justify-center max-lg:flex-col items-center">
            <Link href={user.email ? "/chart" : "/signin"}>
              <div className="flex flex-col gap-y-[16px] rounded-[20px] shadow-[0px_18px_32px_rgba(208,210,218,0.15)] bg-[#FFFFFF] w-[361px] text-center px-[20px] py-[20px]">
                <div className="flex justify-center">
                  <Image
                    src="/images/icon-park-outline_mindmap-list.svg"
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
                <div className="text-[16px] font-Roboto text-black font-bold ">
                  MindMap
                </div>
                <div className="text-[16px] font-Roboto text-black text-center font-light">
                  Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et{" "}
                </div>
              </div>
            </Link>

            <div className="flex justify-center align-middle px-[40px] text-[24px] font-bold text-black">
              OR
            </div>
            <Link href={user.email ? "/project" : "signin"}>
              <div className="flex flex-col gap-y-[16px] rounded-[20px] shadow-[0px_18px_32px_rgba(208,210,218,0.15)] bg-[#FFFFFF] w-[361px] text-center px-[20px] py-[20px]">
                <div className="flex justify-center">
                  <Image
                    src="/images/trail.png"
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
                <div className="text-[16px] font-Roboto text-black font-bold ">
                  Trello
                </div>
                <div className="text-[16px] font-Roboto text-black text-center font-light">
                  Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et{" "}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mindmap;
