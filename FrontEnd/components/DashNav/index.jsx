import React from "react";

const DashNav = () => {
  return (
    <div className="navbar bg-base-100 ">
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
        <a href="/dashboard" className="mr-4 font-semibold text-[16px]">
          Dashboard
        </a>
        <a href="/records" className=" font-semibold">
          Record
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1  flex justify-center items-center">
          <li className=" font-semibold  bg-[#0166FF]  text-white rounded-3xl ">
            <a>+ Record</a>
          </li>
          <li>
            <a href="./profile">
              <img src={"./images/Avatar.png"} className=" " />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashNav;
