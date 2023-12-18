import React from "react";
import Logo from "@/components/Logo/Logo";
import { useRouter } from "next/router";
import Good from "@/components/Logo/Good";

const Finish = () => {
  const router = useRouter();
  return (
    <div className=" flex justify-center h-screen   bg-white">
      <div>
        <div className="flex justify-center p-6">
          <Logo />
        </div>
        <div className=" flex justify-center ">
          <ul className="steps">
            <li
              onClick={() => {
                router.push("/step-one");
              }}
              className="step pr-4 step-primary text-black"
            >
              Currency
            </li>
            <li
              onClick={() => {
                router.push("/step-two");
              }}
              className="step step-primary pr-4 text-black"
            >
              Balance
            </li>
            <li
              onClick={() => {
                router.push("/step-three");
              }}
              className="step step-primary text-black"
            >
              Finish
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center p-4">
          <div className="h-12 w-12 justify-center mt-16 bg-[#0166FF] flex items-center rounded-full">
            <Good />
          </div>
        </div>
        <div className="flex justify-center">
          <h1 className="text-2xl text-black">Good Job</h1>
        </div>

        <div className="flex justify-center p-6  ">
          <p className="text-[#A9A9A9] justify-center ">
            Your very first account has been created. <br />
            Now continue to dashboard and start tracking
          </p>
        </div>
        <div className="flex justify-center ">
          <button
            className="text-white bg-primary rounded-2xl p-2 w-[100%]"
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finish;
