import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { FaTaxi } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { PiWineFill } from "react-icons/pi";
import { FaTshirt } from "react-icons/fa";
import Icons from "./icons";

const AddCategory = () => {
  return (
    <div className="mt-2">
      <p>Category</p>
      <details className="dropdown w-full">
        <summary className="m-1 btn flex p-1  ">
          <p className="text-[#94A3B8]">Find or choose category</p>
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52">
          <div className="flex ml-2 m-2">
            <button
              className="flex ml-2 m-2"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              <img src="./images/PlusCircle.png" className="h-5 w-5" />
              <p className="ml-2">Add category</p>
            </button>

            {/* Add category */}
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box ">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg ">Add category</h3>
                  <div className="modal-action  ">
                    <form method="dialog">
                      <button>✕</button>
                    </form>
                  </div>
                </div>
                <div className="border rounded-full "></div>
                <div className="flex gap-6 justify-center mt-2 ">
                  <Icons />

                  <input
                    type="text"
                    placeholder="Name"
                    className="rounded border p-1 w-[80%]"
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
  );
};

export default AddCategory;
