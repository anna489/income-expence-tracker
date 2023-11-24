import React from "react";
import Eye from "@/components/Logo/Eye";
import Leading from "@/components/Logo/Leading";
import { MdHomeFilled } from "react-icons/md";
import { FaTaxi } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { PiWineFill } from "react-icons/pi";
import { FaTshirt } from "react-icons/fa";

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
    <div className="1">
      <div className="drawer lg:drawer-open flex ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
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
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-60 min-h-full bg-state-400 border rounded-lg mt-10 text-base-content">
            <h2 className="text-2xl font-semibold">Records</h2>
            <button
              className="btn bg-[#0166FF] text-white mt-2"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              +Add
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle "
            >
              <div className="modal-box w-[50%]">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">Add Record</h3>
                  <form method="dialog">
                    <button className=" bg-white">✕</button>
                  </form>
                </div>
                <div className="border border-full "></div>
                <div className="flex ">
                  <div className="mt-2">
                    <div>
                      <button className="border w-[50%] text-xl bg-[#0166FF] text-white rounded-3xl p-2 ">
                        Expence
                      </button>
                      <button className="border  w-[50%]  text-xl bg-[#F3F4F6] text-black rounded-3xl p-2 ">
                        Income
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Amount"
                      className="input input-bordered w-full max-w-xs mt-3"
                    />
                    {/* Add category */}
                    <div className="mt-2">
                      <p>Category</p>
                      <details className="dropdown w-full">
                        <summary className="m-1 btn flex p-1  ">
                          <p className="text-[#94A3B8]">
                            Find or choose category
                          </p>
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52">
                          <div className="flex ml-2 m-2">
                            <button
                              className="flex ml-2 m-2"
                              onClick={() =>
                                document
                                  .getElementById("my_modal_1")
                                  .showModal()
                              }
                            >
                              <img
                                src="./images/PlusCircle.png"
                                className="h-5 w-5"
                              />
                              <p className="ml-2">Add category</p>
                            </button>

                            {/* Add category */}
                            <dialog id="my_modal_1" className="modal">
                              <div className="modal-box">
                                <div className="flex justify-between items-center">
                                  <h3 className="font-bold text-lg">
                                    Add category
                                  </h3>
                                  <div className="modal-action ">
                                    <form method="dialog">
                                      <button className="">close</button>
                                    </form>
                                  </div>
                                </div>
                                <div className="border rounded-full"></div>
                                <div className="flex gap-6 justify-center ">
                                  <button className="border rounde w-[20%]">
                                    sdfc
                                  </button>
                                  <input
                                    type="text"
                                    placeholder="Name"
                                    className="rounded border p-4 w-[80%]"
                                  />
                                </div>
                              </div>
                            </dialog>
                          </div>
                          <div className="border rounded-full "></div>
                          <li className="mt-2">
                            <a>
                              <MdHomeFilled size={20} color="#0166FF" />
                              <p>Home</p>
                            </a>
                          </li>
                          <li>
                            <a>
                              <FaGift size={20} color="#FF4545" />
                              <p>Gift</p>
                            </a>
                          </li>
                          <li>
                            <a>
                              <PiForkKnifeFill size={20} color="#FB8A22" />
                              <p>Food</p>
                            </a>
                          </li>
                          <li>
                            <a>
                              <PiWineFill size={20} color="#A804AB" />
                              <p>Drink</p>
                            </a>
                          </li>

                          <li>
                            <a>
                              <FaTaxi size={20} color="#EAB308" />
                              <p>Taxi</p>
                            </a>
                          </li>
                          <li>
                            <a>
                              <FaTshirt size={20} color="#6F6CF3" />
                              <p>Taxi</p>
                            </a>
                          </li>
                        </ul>
                      </details>
                    </div>
                    <div className="flex mt-6 gap-2">
                      <div className="border rounded w-[50%] ">
                        <p>Date</p>
                        <input type="date" name="" id="" />
                      </div>
                      <div className="border rounded w-[50%]">
                        <p>Date</p>
                        <input type="time" name="" id="" />
                      </div>
                    </div>
                    <div className="flex justify-center ">
                      <button className="w-[80%] bg-[#0166FF] p-2 text-white rounded-xl mt-3">
                        Add Record
                      </button>
                    </div>
                  </div>

                  <div className="ml-5 mt-2 w-[50%]">
                    <p>Payee</p>
                    <select className="select select-bordered w-full max-w-xs mt-2">
                      <option disabled selected>
                        Who shot first?
                      </option>
                      <option>Han Solo</option>
                      <option>Greedo</option>
                    </select>
                    <p className="mt-4">Note</p>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs mt-2 h-[60%]"
                    />
                  </div>
                </div>
              </div>
            </dialog>
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
