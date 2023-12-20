import { MdHomeFilled } from "react-icons/md";
import { FaTaxi } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { PiWineFill } from "react-icons/pi";
import { FaTshirt } from "react-icons/fa";

export const getIcons = ({ iconName, iconColor }) => {
  const icons = {
    home: <MdHomeFilled size={20} color={iconColor} />,
    gift: <FaGift size={20} color={iconColor} />,
    food: <PiForkKnifeFill size={20} color={iconColor} />,
    wine: <PiWineFill size={20} color={iconColor} />,
    tshirt: <FaTshirt size={20} color={iconColor} />,
    taxi: <FaTaxi size={20} color={iconColor} />,
  };
  return icons[iconName];
};
