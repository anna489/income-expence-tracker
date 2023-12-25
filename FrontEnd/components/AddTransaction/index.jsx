import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { getIcons } from "../../utils";

const AddTransaction = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      {transactions.map((transaction) => {
        return (
          <div className="flex justify-between border p-3 bg-white rounded">
            <div className="flex items-center">
              <div className={`${transaction.color} rounded-full`}>
                {getIcons(transaction.avatarimg, transaction.color)}
              </div>
              <div className=" justify-start px-5">
                <h1 className="text-[18px]">{transaction.name}</h1>
                <p className="text-[10px]">{transaction.createdat}</p>
              </div>
            </div>
            <div className="flex items-center">{transaction.amount}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AddTransaction;
