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
                router.push("/Currency");
              }}
              className="step pr-4 step-primary text-black"
            >
              Currency
            </li>
            <li
              onClick={() => {
                router.push("/Balance");
              }}
              className="step step-primary pr-4 text-black"
            >
              Balance
            </li>
            <li
              onClick={() => {
                router.push("/Finish");
              }}
              className="step step-primary text-black"
            >
              Finish
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1>Good Job\\</h1>
      </div>
    </div>
  );
};

export default Finish;
