import { React, useContext, createContext, useState } from "react";
import { UserContext } from "../UserProvider";
export const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [refresh, setRefresh] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState({
    name: "",
    avatar_img: "",
    color: "",
  });
  console.log("category data", categories);
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
    try {
      const {
        data: { categories },
      } = await axios.get("http://localhost:8006/categories/" + user.id);
      console.log("get DATA", categories);
      setRefresh(!refresh);
      setCategories(categories);
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <CategoryContext.Provider
      values={{
        changeCategoryData,
        addCategory,
        getAllCategory,
        categories,
        refresh,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
