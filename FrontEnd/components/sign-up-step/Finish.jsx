import React from "react";
import Logo from "../Logo/Logo";

const Finish = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Logo />
      <h2 className="font-semibold text-xl">Good Job</h2>
      <h3 className="text-xs text-[#334155]">
        Your very first account has been created. Now continue to dashboard and
        start tracking
      </h3>
    </div>
  );
};

export default Finish;
