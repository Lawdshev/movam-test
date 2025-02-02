import { CgShapeHexagon } from "react-icons/cg";
import { VscGraphLine } from "react-icons/vsc";
import { FaDollarSign, FaRegUser } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";

export const sidebarLinks = [
  {
    icon: <CgShapeHexagon />,
    text: "General",
  },
  {
    icon: <LuUsers />,
    text: "Members",
  },
  {
    icon: <FaRegUser />,
    text: "Hired Experts",
  },
  {
    icon: <FaDollarSign />,
    text: "Budgets",
  },
  {
    icon: <VscGraphLine />,
    text: "Analytics",
  },
];