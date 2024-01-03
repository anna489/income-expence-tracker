import { MdHomeFilled } from "react-icons/md";
import { FaTaxi } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { PiWineFill } from "react-icons/pi";
import { FaTshirt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import moment from "moment";

export const getIcons = (iconname = "eye", iconcolor = " iconcolor ") => {
  const icons = {
    home: <MdHomeFilled size={30} color={iconcolor} />,
    gift: <FaGift size={30} color={iconcolor} />,
    food: <PiForkKnifeFill size={30} color={iconcolor} />,
    wine: <PiWineFill size={30} color={iconcolor} />,
    tshirt: <FaTshirt size={30} color={iconcolor} />,
    taxi: <FaTaxi size={30} color={iconcolor} />,
    eye: <FaEye size={20} color={iconcolor} />,
  };
  return icons[iconname];
};

export const dayFormat = (day) => {
  return moment(day).format("MMM Do YY");
};

export const thousandify = (num) => {
  console.log(num);
  return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
};
