import React, { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "../UserProvider";
import axios from "axios";
import { toast } from "react-toastify";
import myAxios from "@/utils/axios";
import PieChart from "../../components/Chart/Piechart";

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
  const [barChartData, setBarChartData] = useState(null);
  const [pieChartData, setPieChartData] = useState(null);

  const changeTransactionData = (key, value) => {
    setTransactionData({ ...transactionData, [key]: value });
  };

  const addTransaction = async () => {
    console.log("DATA", transactionData);
    console.log("USER", user);
    transactionData.userId = user.id;
    try {
      const { data } = await axios.post("http://localhost:8006/transactions/", {
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
      } = await axios.get("http://localhost:8006/transactions/" + user.id);
      console.log("get DATA", transactions);
      setReFetch(reFetch);
      setTransactions(transactions);
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  const getTransactions = async () => {
    console.log("WORKING");
    try {
      const {
        data: { transactions },
      } = await myAxios.get(
        "/transactions/bea4844a-f3b8-4017-bec9-2cfa6390242d"
      );
      console.log("TRA");
      // toast.success("Гүйлгээнүүдийг амжилттай татлаа.");
      setTransactions(transactions);
    } catch (error) {
      console.log("TER", error);
      // toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  const getChartData = async () => {
    console.log("GET-CHART-DATA");
    try {
      const {
        data: { barChart, pieChart },
      } = await myAxios.get(
        "/transactions/chartData/bea4844a-f3b8-4017-bec9-2cfa6390242d"
      );
      console.log("BBAA", barChart);
      setBarChartData(barChart);
      setPieChartData(pieChart);
    } catch (error) {
      console.log("CHARTERR", error);
    }
  };

  useEffect(() => {
    getTransactions();
    getChartData();
  }, [reFetch]);

  return (
    <TransactionContext.Provider
      value={{
        transactionData,
        changeTransactionData,
        addTransaction,
        transactions,
        getAllTransaction,
        barChartData,
        pieChartData,
        reFetch,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
