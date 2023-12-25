import React, { useContext } from "react";
import Eye from "@/components/Logo/Eye";
import Leading from "@/components/Logo/Leading";
import Add from "./add";

import { UserContext } from "../../context/UserProvider";

const Menu = () => {
  const Categorys = [
    { name: "Food & Drinks" },
    { name: "Shopping" },
    { name: "Housing" },
    { name: "Transportation" },
    { name: "Vehicle" },
  ];
  const { user } = useContext(UserContext);

  return (
    <div>
      <div className="lg:drawer-open flex ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
        <div className="drawer-side">
          {/* <h1>{user.name}</h1> */}
          <ul className="menu w-[300px] p-4 bg-state-400 border rounded-lg mt-10 text-base-content bg-white ">
            <h2 className="text-2xl font-semibold">Records</h2>
            <button
              className="btn bg-[#0166FF] text-white mt-2"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              +Add
            </button>
            <Add />
            <input
              type="text"
              placeholder="Search"
              className="p-3 mt-4 border rounded-lg bg-[#dfdfe2] "
            />

            {/* Type */}
            <div className="mt-4 p-2">
              <h1 className="text-lg font-medium">Type</h1>
              <div className="mt-2">
                <button className="px-2 py-1 w-full border rounded bg-[#0166FF] text-white">
                  All
                </button>
              </div>
              <div className="mt-2">
                <button className="px-2 py-1 w-full border rounded bg-[#0166FF] text-white">
                  Income
                </button>
              </div>
              <div className="mt-2">
                <button className="px-2 py-1 w-full border rounded bg-[#0166FF] text-white">
                  Expence
                </button>
              </div>
            </div>

            {/* Sidebar content here */}
            <div>
              <h1 className="text-lg font-medium mt-6">Category</h1>
              {Categorys.map((Category) => {
                return (
                  <li>
                    <a>
                      <Eye />
                      {Category.name}
                      <Leading />
                    </a>
                  </li>
                );
              })}
            </div>
            <button
              className="border rounded py-2  border-[#0166FF] mt-3 text-lg"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <span className="text-[#0166FF] text-xl mr-2">+</span> Add
              Category
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Add Category</h3>
                <p className="border mt-2"></p>
                <div className="flex gap-4 mt-4 justify-center items-center">
                  <div className="dropdown dropdown-hover bg-blue ">
                    <div tabIndex={0} role="button" className="btn m-1">
                      <Eye />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </div>
                  <input
                    type="text"
                    className="border px-4 bg-[#e0e0e0] h-[50px] text-black rounded w-full"
                    placeholder="Name..."
                  />
                </div>
              </div>
            </dialog>
            <h1 className="text-lg font-medium mt-6">Amount Range</h1>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
