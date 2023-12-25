import React from "react";
import { getIcons } from "../../../utils";

const CategoryIcon = ({ name, color }) => {
  return (
    <span className="font-normal flex gap-4 items-center">
      {getIcons(name, color)}
      {name}
    </span>
  );
};

// const Add = () => {
//   return <span></span>;
// };
export default CategoryIcon;
