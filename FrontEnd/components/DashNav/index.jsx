import React, { useContext } from "react";
import { useRouter } from "next/router";

const DashNav = () => {
  const router = useRouter();

  return (
    <div className="navbar bg-base-100 px-[100px]">
      {/* Logo */}
      <div className="flex-1 ">
        <a className="btn btn-ghost text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
          >
            <path
              d="M18.8297 9.36772V0.300781H9.56526V9.36772H0.300781V18.6322H9.56526V27.6991H18.8297V18.6322H28.0942V9.36772H18.8297ZM18.8297 18.4347H9.56526V9.56665H18.8297V18.4347Z"
              fill="#0166FF"
            />
          </svg>
        </a>
        <button
          onClick={() => router.push("/dashboard")}
          className="mr-4 font-semibold text-[16px]"
        >
          Dashboard
        </button>
        <button
          onClick={() => router.push("/records")}
          className=" font-semibold"
        >
          Record
        </button>
      </div>
      <div className="flex-none gap-4 ">
        <button
          className=" font-semibold  bg-[#0166FF] py-2 px-4 text-white rounded-3xl "
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          + Record
        </button>

        <button>
          <img src="./images/Avatar.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default DashNav;
