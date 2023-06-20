import Image from "next/image";
import React, { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { UserContext } from '@/pages/_app'
import { useEffect } from "react";
import { auth } from "@/libs/firebase";
import login from "@/libs/login";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";


const Signin = () => {
    const router = useRouter()
    const { user, setUser } = useContext(UserContext)
    useEffect(() => {
        if (user) {
            router.replace(`/mindmap`)
        }
    }, [user])
    const signin = async () => {
        let provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const user = await result.user;
                setUser({ email: user.email, image: user.providerData[0].photoURL, id: user.uid, name: user.displayName })
                login(user)
            }).catch((error) => {
                console.error(error)
            });
    }

    return (
        <>
            <section className="flex justify-center relative"
                style={{
                    backgroundImage: `url('/images/Pattern.svg')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",

                }}
            >
                <div className="flex  flex-col items-center justify-center   mx-auto md:h-screen lg:py-0">
                    <div className=" px-[48px]  py-[50px] absolute bg-[#FFFFFF] shadow-[0px_6px_8px_rgba(0,0,0,0.05)] rounded-[5px] ">
                        <div className="flex" >
                            <p className="text-[#757575] text-[14px] font-normal">Welcome back!</p>
                            <p className="text-[#333333]">👋</p>
                        </div>
                        <div className="text-black font-bold text-[24px] pt-[5px]">Sign in to your account</div>
                        <div className="text-black  text-[18px] pt-[16px] font-bold">Email address or username</div>
                        <div className="flex items-center gap-x-2 my-[12px] bg-[#FFFFFF] border border-[#EAEBF6] rounded-full py-[12px] px-[24px]">
                            <div className="text-[#C0C3D0] ">
                                <Image src="/images/user.svg" width={24} height={24} alt="" />
                            </div>
                            <input placeholder="Type here" className="text-[#C0C3D0] outline-none border-none" />

                        </div>
                        <div className="text-black  text-[18px] pt-[12px] font-bold">Password</div>
                        <div className="flex justify-between items-center gap-x-2 my-[12px] bg-[#FFFFFF] border border-[#EAEBF6] rounded-full py-[12px] px-[24px]">
                            <div className="text-[#C0C3D0] ">
                                <Image src="/images/Lock.svg" width={20} height={20} alt="" />
                            </div>
                            <input placeholder="******" type="password" className="text-[#C0C3D0] outline-none border-none items-center" />
                            <div className="text-[#C0C3D0] ">
                                <Image src="/images/eye-slash.svg" width={24} height={24} alt="" />
                            </div>
                        </div>
                        <div className="flex text-[#FFFFFF] font-bold text-center justify-center items-center gap-x-2 my-[20px] bg-[#625BF7]  rounded-[10px] py-[12px] px-[24px]">
                            CONTINUE
                        </div>
                        <div className="flex text-[#625BF7] text-[12px] mt-[14px] justify-center items-center   ">
                            Forget your password?
                        </div>

                        <div onClick={signin} className="flex justify-center gap-x-2 px-[55px] py-[18px] items-center 
                             rounded-[50px] shadow-[0px_15px_50px_rgba(222,95,143,0.12)] bg-gradient-to-r from-[#E5E3E0]  to-[#625BF7] ">
                            <div className="text-white items-center text-[16px]">
                                <BsGoogle />
                            </div>
                            <div className="text-[#FFFFFF] text-[16px] font-medium">Sign in with Google Account</div>
                        </div>


                    </div>

                </div>
            </section>
        </>
    );
};

export default Signin;
