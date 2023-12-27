import React, { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "../UserProvider";
import axios from "axios";

export const CategoryContext = createContext("CatCTX");

const CategoryProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [refresh, setRefresh] = useState(false);
  const [category, setCategory] = useState([]);
  const [categoryData, setCategoryData] = useState({
    name: "",
    avatar_img: "",
    color: "",
  });

  const changeCategoryData = (key, value) => {
    setCategoryData({ ...categoryData, [key]: value });
  };

  const addCategory = async () => {
    console.log("DATA", categoryData);
    console.log("USER", user);
    categoryData.userId = user.id;
    try {
      const { data } = await axios.post("http://localhost:8006/categories/", {
        ...categoryData,
      });
      console.log("DATA", data);
      setRefresh(!refresh);
      toast.success("Category амжилттай нэмлээ.");
    } catch (error) {
      toast.error("Category нэмэхэд алдаа гарлаа.");
    }
  };

  const getAllCategory = async () => {
    const {
      data: { categories },
    } = await axios.get("http://localhost:8006/categories");
    // console.log("RES", categories);
    setCategory(categories);
  };

  useEffect(() => {
    getAllCategory();
  }, [refresh]);

  console.log("category: ", category);

  return (
    <CategoryContext.Provider
      value={{
        changeCategoryData,
        addCategory,
        getAllCategory,
        category,
        refresh,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
