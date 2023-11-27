import React from "react";
import Eye from "@/components/Logo/Eye";
import Leading from "@/components/Logo/Leading";
import Add from "./add";

const Menu = () => {
  const Categorys = [
    { name: "Food & Drinks" },
    { name: "Shopping" },
    { name: "Housing" },
    { name: "Transportation" },
    { name: "Vehicle" },
    { name: "Life & Entertainment" },
    { name: "Communication" },
    { name: "Financial expenses" },
    { name: "Investments" },
    { name: "Income" },
    { name: "Others" },
  ];

  return (
    <div>
      <div className="drawer lg:drawer-open flex ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content flex flex-col items-center justify-center ">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay "
          ></label>
          <ul className="menu p-4 w-[90%] min-h-full bg-state-400 border rounded-lg mt-10 text-base-content bg-white ">
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
              className="p-1 mt-4 border rounded-lg "
            />

            {/* Type */}
            <div className="mt-4">
              <h1 className="text-lg font-medium">Type</h1>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox h-4 w-4"
                  />{" "}
                  <span className="label-text">All</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox h-4 w-4"
                  />{" "}
                  <span className="label-text">Income</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox h-4 w-4"
                  />{" "}
                  <span className="">Expence</span>
                </label>
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
            <button className="flex justify-center items-center mt-3 text-lg">
              <span className="text-[#0166FF] text-xl mr-2">+</span> Add
              Category
            </button>
            <h1 className="text-lg font-medium mt-6">Amount Range</h1>
            <div className="flex justify-center items-center gap-3 mt-6">
              <input
                type="text"
                className="border border-black w-[50%] p-3 rounded bg-[#F3F4F6]"
                placeholder="0"
              />
              <input
                type="text"
                placeholder="100"
                className="border border-black w-[50%] p-3 rounded bg-[#F3F4F6]"
              />
            </div>
            <input
              type="range"
              min={0}
              max="100"
              value="40"
              className="range mt-6 "
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
