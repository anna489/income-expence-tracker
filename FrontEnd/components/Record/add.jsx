import React from "react";
import AddCategory from "./addCategory";

const Add = () => {
  return (
    <div>
      {" "}
      <dialog
        id="my_modal_5"
        className="modal flex justify-center items-center "
      >
        <div className="modal-box max-w-3xl ">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Add Record</h3>
            <form method="dialog">
              <button className=" bg-white">✕</button>
            </form>
          </div>
          <div className="border border-full "></div>
          <div className="flex ">
            <div className="mt-2 w-[350px]">
              <div className="border rounded-3xl bg-[#F3F4F6]">
                <button className="border w-[50%] text-xl bg-[#0166FF] text-white rounded-3xl p-2 ">
                  Expence
                </button>
                <button
                  className="
           w-[50%]  text-xl  text-black rounded-3xl p-2 "
                >
                  Income
                </button>
              </div>
              <input
                type="text"
                placeholder="Amount"
                className="input input-bordered w-full max-w-xs mt-3"
              />
              <AddCategory />
              <div className="flex mt-6 gap-2">
                <div className="">
                  <p>Date</p>
                  <input
                    type="date"
                    name=""
                    id=""
                    className="input input-bordered"
                  />
                </div>
                <div className="">
                  <p>Date</p>
                  <input
                    type="date"
                    name=""
                    id=""
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="flex justify-center ">
                <button className="w-full bg-[#0166FF] p-2 text-white rounded-xl mt-3">
                  Add Record
                </button>
              </div>
            </div>

            <div className="ml-5 mt-2 w-full">
              <p className="text-[20px]">Payee</p>
              <select className="select select-bordered w-full max-w-xs mt-2">
                <option disabled selected>
                  Write here
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <p className="mt-4 text-[20px]">Note</p>
              <input
                type="text"
                placeholder="Write here"
                className="input input-bordered w-full max-w-xs mt-2 h-[65%]"
              />
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Add;
