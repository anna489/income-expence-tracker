import { MdHomeFilled } from "react-icons/md";
import { FaTaxi } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { PiWineFill } from "react-icons/pi";
import { FaTshirt } from "react-icons/fa";

export const getIcons = (iconname = "home", iconcolor = "red") => {
  const icons = {
    home: <MdHomeFilled size={20} color={iconcolor} />,
    gift: <FaGift size={20} color={iconcolor} />,
    food: <PiForkKnifeFill size={20} color={iconcolor} />,
    wine: <PiWineFill size={20} color={iconcolor} />,
    tshirt: <FaTshirt size={20} color={iconcolor} />,
    taxi: <FaTaxi size={20} color={iconcolor} />,
  };
  return icons[iconname];
};
