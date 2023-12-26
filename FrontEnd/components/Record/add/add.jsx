import React, { useContext, useEffect, useState } from "react";
import AddCategory from "./addCategory";
import { TransactionContext } from "../../../context/TransactionContext";
import axios from "axios";

const Add = () => {
  const [category, setCategory] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { transactionData, changeTransactionData, addTransaction } =
    useContext(TransactionContext);

  const addRecord = async () => {
    await addTransaction();
    console.log("CLOSE");
  };

  const getCategories = async () => {
    const {
      data: { categories },
    } = await axios.get("http://localhost:8006/categories");
    // console.log("RES", categories);
    setCategory(categories);
  };

  useEffect(() => {
    getCategories();
  }, [!refresh]);

  return (
    <div>
      <dialog
        id="my_modal_5"
        className="modal flex justify-center items-center "
      >
        <div className="modal-box max-w-xl ">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Add Record</h3>
            <form method="dialog">
              <button className=" bg-white">✕</button>
            </form>
          </div>
          <div className="border border-full "></div>
          <div className="gap-10 flex">
            <div className="mt-2 w-[350px]">
              <div className="rounded-3xl bg-[#F3F4F6]">
                <button
                  className={` w-[50%] text-xl  rounded-3xl p-2  ${
                    transactionData.transaction_type === "EXP" &&
                    "bg-[#0166FF] text-white"
                  }`}
                  onClick={() => {
                    changeTransactionData("transaction_type", "EXP");
                  }}
                >
                  Expence
                </button>
                <button
                  className={`
           w-[50%]  text-xl  text-black rounded-3xl p-2  ${
             transactionData.transaction_type === "INC" &&
             "bg-[#228822] text-white"
           }`}
                  onClick={() => {
                    changeTransactionData("transaction_type", "INC");
                  }}
                >
                  Income
                </button>
              </div>
              <h1 className="font-medium text-[20px] mt-4">Amount</h1>
              <input
                type="number"
                className="bg-[#F3F4F6] border-none p-3 w-full rounded mt-3"
                placeholder="$ 000,0"
                value={transactionData.amount}
                name="amount"
                onChange={(e) => {
                  console.log(e.target.name, e.target.value);
                  changeTransactionData(e.target.name, e.target.value);
                }}
              />
              <AddCategory
                category={category}
                changeTransactionData={changeTransactionData}
              />
              <div className="flex gap-2 mt-6">
                <input
                  type="datetime-local"
                  placeholder="Oct 30,2023"
                  className="w-full input input-bordered bg-[#F3F4F6]"
                  name="updated_at"
                  onChange={(e) => {
                    console.log("first", e.target.value);
                    changeTransactionData(e.target.name, e.target.value);
                  }}
                />
              </div>
              <div className="flex justify-center ">
                <button
                  onClick={addRecord}
                  className={`px-2 py-3  w-full font-normal my-4 text-white rounded-full hover:cursor-pointer hover:opacity-70 ${
                    transactionData.transaction_type === "INC"
                      ? "bg-[#228822]"
                      : "bg-[#0166FF]"
                  }`}
                >
                  Add Record
                </button>
              </div>
              {/* {open && <CategoryForm open={open} closeForm={closeForm} />} */}
            </div>

            <div className="ml-5 mt-2 w-full">
              {" "}
              <h1 className="mt-4 mb-2 font-medium text-[20px]">Name</h1>
              <input
                type="text"
                placeholder="Name"
                className="bg-[#F3F4F6] border-none w-full p-3 rounded mt-3"
                name="transaction_name"
                value={transactionData.transaction_name}
                onChange={(e) => {
                  changeTransactionData(e.target.name, e.target.value);
                }}
              />
              <div>
                <h1 className="mt-4 mb-2">Note</h1>
                <textarea
                  placeholder="Write a Message"
                  cols="30"
                  rows="10"
                  name="description"
                  className="border py-[14px] w-full pl-5 max-w-xs border-zinc-200 bg-[#F3F4F6] rounded"
                  value={transactionData.description}
                  onChange={(e) => {
                    changeTransactionData(e.target.name, e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Add;
