import React, { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "../UserProvider";
import axios from "axios";
import { toast } from "react-toastify";

export const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [reFetch, setReFetch] = useState(false);
  const [transactions, setTransactions] = useState([]);
  let [transactionData, setTransactionData] = useState({
    transaction_name: "",
    amount: "",
    transaction_type: "EXP",
    description: "",
    category_id: "",
    updated_at: "",
    userId: "",
  });

  const changeTransactionData = (key, value) => {
    setTransactionData({ ...transactionData, [key]: value });
    // transactionData.amount <=> transactionData['amount'] <==> key="amount" transaction[key] : ''
  };

  const addTransaction = async () => {
    console.log("DATA", transactionData);
    console.log("USER", user);
    transactionData.userId = user.id;
    try {
      const { data } = await axios.post("http://localhost:8008/transactions/", {
        ...transactionData,
      });
      console.log("DATA", data);
      setReFetch(!reFetch);
      toast.success("Гүйлгээг амжилттай нэмлээ.");
    } catch (error) {
      toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  const getAllTransaction = async () => {
    try {
      const {
        data: { transactions },
      } = await axios.get("http://localhost:8008/transactions/" + user.id);
      console.log("get DATA", transactions);
      setReFetch(reFetch);
      setTransactions(transactions);
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        transactionData,
        changeTransactionData,
        addTransaction,
        transactions,
        getAllTransaction,
        reFetch,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
