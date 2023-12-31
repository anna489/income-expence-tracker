import React, { useContext, useState } from "react";
import Add from "./add/add";
import CategoryIcon from "./add/categoryIcon";
import CategoryIcons from "./icon/CategoryIcons";
import MenuCategory from "../MenuCategory";

const Menu = () => {
  return (
    <div>
      <div className="lg:drawer-open flex ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
        <div className="drawer-side">
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
                <button className="px-2 py-1 w-full border rounded bg-[#0166FF] text-white hover:bg-[#c1c1c3]">
                  All
                </button>
              </div>
              <div className="mt-2">
                <button
                  className={`px-2 py-1 w-full border rounded bg-[#0166FF] text-white hover:bg-[#c1c1c3]
                `}
                >
                  Income
                </button>
              </div>
              <div className="mt-2">
                <button className="px-2 py-1 w-full border rounded bg-[#0166FF] text-white hover:bg-[#c1c1c3]">
                  Expence
                </button>
              </div>
            </div>

            {/* Sidebar content here */}
            <div>
              <div className="flex justify-between items-center mt-6">
                <h1 className="text-lg font-medium ">Category</h1>
                <button className="text-base-400">clear</button>
              </div>
              <button className=" p-3 items-center w-full">
                <MenuCategory />
              </button>
            </div>

            <button
              className="border rounded py-2  border-[#0166FF] mt-3 text-lg"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <span className="text-[#0166FF] text-xl mr-2">+</span> Add
              Category
            </button>

            <dialog id="my_modal_3" className="modal z-0 ">
              <div className="modal-box  ">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Add Category</h3>
                <p className="border mt-2"></p>
                <div className="flex gap-4 mt-4 justify-center items-center">
                  <div className="dropdown bg-blue ">
                    <div
                      tabIndex={1}
                      role="button"
                      className="btn m-3 border bg-base-300  "
                    >
                      <CategoryIcon />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] mt-2 menu p-2 shadow bg-base-200  border rounded-box w-[400px]"
                    >
                      <CategoryIcons />
                    </ul>
                  </div>
                  <input
                    type="text"
                    className="border px-4 bg-base-300 h-[50px] text-black rounded w-full"
                    placeholder="Name..."
                  />
                </div>
                <div className="flex justify-center items-center mt-10">
                  <button className="bg-[#0166FF] text-white rounded-lg border p-4 w-full font-bol text-[20px] ">
                    Add Category
                  </button>
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
