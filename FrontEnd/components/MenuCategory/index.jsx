import React, { useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import { getIcons } from "../../utils";
import Leading from "../Logo/Leading";

const MenuCategory = () => {
  const { category } = useContext(CategoryContext);

  return (
    <div>
      {category.map((e) => {
        return (
          <div className="flex justify-between items-center">
            <div className={`${e.color} flex gap-3 items-center`}>
              {getIcons(e.avatarimg, e.color)} {e.name}
            </div>
            <div>
              <Leading />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCategory;
