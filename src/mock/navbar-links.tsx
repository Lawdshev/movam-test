import { IoSearch } from "react-icons/io5";
import { CgShapeHexagon } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { FaRegCircle } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

export const navbarLinks = [
  {
    text: "",
    icon: <CgShapeHexagon />,
  },
  {
    text: "Search",
    icon: <IoSearch />,
  },
  {
    text: "Create Job",
    icon: <FaPlus />,
  },
  {
    text: "Job Postings",
    icon: <PiSuitcaseSimpleBold />,
  },
  {
    text: "Organization Settings",
    icon: <FaRegCircle />,
  },
  {
    text: "",
    icon: <BsThreeDots />,
  },
];