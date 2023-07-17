import Image from "next/image";
import React, { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { UserContext } from "@/pages/_app";
import { useEffect } from "react";
import { auth } from "@/libs/firebase";
import login from "@/libs/login";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import Profile from "@/public/images/profile.png";
import Link from "next/link";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    if (user) {
      router.replace(
        router.query.accept ? `/accept?id=${router.query.accept}` : "/mindmap"
      );
    }
    // eslint-disable-next-line
  }, [user]);
  const signinWithGoogle = async () => {
    let provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = await result.user;
        setUser({
          email: user.email,
          image: user.providerData[0].photoURL,
          id: user.uid,
          name: user.displayName,
        });
        login({ ...user, password: "test1" });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const signinWithEmail = async () => {
    if (email && password) {
      if (router.query.signup) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            setUser({
              email,
              image: Profile.src,
              id: user.uid,
              name: "User",
              password: user.reloadUserInfo.passwordHash,
            });
            login({
              ...user,
              displayName: "User",
              password: user.reloadUserInfo.passwordHash,
              providerData: [{ photoURL: Profile.src }],
            });
          })
          .catch((error) => {
            if (
              error.message === "Firebase: Error (auth/email-already-in-use)."
            ) {
              setError("Email Already in use!");
            }
          });
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            setUser({
              email,
              image: Profile.src,
              id: user.uid,
              name: "User",
              password: user.reloadUserInfo.passwordHash,
            });
            login({
              ...user,
              displayName: "User",
              password: user.reloadUserInfo.passwordHash,
              providerData: [{ photoURL: Profile.src }],
            });
          })
          .catch((error) => {
            if (error.message === "Firebase: Error (auth/wrong-password).") {
              setError("Invalid Credentials!");
            } else if (
              error.message === "Firebase: Error (auth/user-not-found)."
            ) {
              setError("User Not Found!");
            }
            console.log(error);
          });
      }
      setError("");
    } else {
      setError("Fill the form first!");
    }
  };

  return (
    <>
      <section
        className="flex justify-center relative"
        style={{
          backgroundImage: `url('/images/Pattern.svg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex  flex-col items-center justify-center   mx-auto md:h-screen lg:py-0">
          {error && (
            <div className="bg-red-500 px-4 py-2 text-white flex self-end absolute right-4 rounded top-2 z-10">
              {error}
            </div>
          )}
          <div className=" px-[48px]  py-[50px] absolute bg-[#FFFFFF] shadow-[0px_6px_8px_rgba(0,0,0,0.05)] rounded-[5px] ">
            <div className="flex">
              <p className="text-[#757575] text-[14px] font-normal">
                Welcome back!
              </p>
              <p className="text-[#333333]">👋</p>
            </div>
            <div className="text-black font-bold text-[24px] pt-[5px]">
              Sign in to your account
            </div>
            <div className="text-black  text-[18px] pt-[16px] font-bold">
              Email address or username
            </div>
            <div className="flex items-center gap-x-2 my-[12px] bg-[#FFFFFF] border border-[#EAEBF6] rounded-full py-[12px] px-[24px]">
              <div className="text-[#C0C3D0] ">
                <Image src="/images/user.svg" width={24} height={24} alt="" />
              </div>
              <input
                placeholder="Type here"
                onClick={() => setError("")}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="text-[#C0C3D0] outline-none w-full px-4 py-2 border-none"
              />
            </div>
            <div className="text-black  text-[18px] pt-[12px] font-bold">
              Password
            </div>
            <div className="flex justify-between items-center gap-x-2 my-[12px] bg-[#FFFFFF] border border-[#EAEBF6] rounded-full py-[12px] px-[24px]">
              <div className="text-[#C0C3D0] ">
                <Image src="/images/Lock.svg" width={20} height={20} alt="" />
              </div>
              <input
                placeholder="******"
                onClick={() => setError("")}
                type={show ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="text-[#C0C3D0] outline-none w-full px-4 py-2 border-none items-center"
              />
              <div className="text-[#C0C3D0] cursor-pointer">
                <Image
                  src={show ? "/images/eye-slash.svg" : "/images/eye.svg"}
                  width={24}
                  height={24}
                  alt=""
                  onClick={() => setShow(!show)}
                />
              </div>
            </div>
            <div
              onClick={signinWithEmail}
              className="flex text-[#FFFFFF] font-bold text-center justify-center items-center gap-x-2 my-[20px] bg-[#625BF7]  rounded-[10px] py-[12px] px-[24px] cursor-pointer"
            >
              CONTINUE
            </div>
            <div className="flex text-[#625BF7] text-[12px] mt-[14px] justify-center items-center   cursor-pointer mb-4">
              Forget your password?
            </div>

            <div
              onClick={signinWithGoogle}
              className="flex justify-center gap-x-2 px-[55px] py-[18px] items-center 
                             rounded-[50px] shadow-[0px_15px_50px_rgba(222,95,143,0.12)] bg-gradient-to-r from-[#E5E3E0]  to-[#625BF7] cursor-pointer"
            >
              <div className="text-white items-center text-[16px]">
                <BsGoogle />
              </div>
              <div className="text-[#FFFFFF] text-[16px] font-medium">
                Sign in with Google Account
              </div>
            </div>
            <Link
              href={
                router.query.accept
                  ? `/signup?accept=${router.query.accept}`
                  : "/signup"
              }
              className="flex justify-center gap-x-2 px-[55px] py-[18px] items-center mt-4
                             rounded-[50px] shadow-[0px_15px_50px_rgba(222,95,143,0.12)] bg-[#625BF7] cursor-pointer"
            >
              <div className="text-[#FFFFFF] text-[16px] font-medium">
                Sign Up For New Account
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
