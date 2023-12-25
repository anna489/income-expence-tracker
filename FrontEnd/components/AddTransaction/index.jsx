import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { getIcons } from "../../utils";

const AddTransaction = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="">
      {transactions.map((transaction) => {
        return (
          <div className="flex justify-between border p-3 bg-[#ffffff] rounded-md mt-2">
            <div className="flex items-center">
              <div className={`${transaction.color}  p-2`}>
                {getIcons(transaction.avatarimg, transaction.color)}
              </div>
              <div className=" justify-start px-5">
                <h1 className="text-[20px]">{transaction.name}</h1>
                <p className="text-[10px]">{transaction.createdat}</p>
              </div>
            </div>
            <div className="flex items-center">
              <p
                className={`font-bold ${
                  transaction.transaction_type === "EXP"
                    ? "text-[#ef0b0b]"
                    : "text-[#228822]"
                }
              `}
              >
                {transaction.transaction_type === "EXP" ? "-" : "+"}
                {transaction.amount}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddTransaction;
