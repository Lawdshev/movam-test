import { useState } from "react";
import { BsChatLeftDots } from "react-icons/bs";
import { TbBellRinging } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { navbarLinks } from "../../mock/navbar-links";
import NavButtons from "./navbar-buttons";
import { sidebarLinks } from "../../mock/sidebar-links";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-[#f7f5f6] py-3 sticky top-0 z-50">
      <div className="mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center gap-2">
          <button
            className="sm:block lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <AiOutlineClose size={22} /> : <FiMenu size={22} />}
          </button>
          <div className="hidden lg:flex gap-2 items-center">
            {navbarLinks.slice(0, 3).map((link, index) => (
              <NavButtons key={index} text={link.text} icon={link.icon} />
            ))}
            <div className="h-[18px] w-[2px] bg-[#ebe9ea]"></div>
            {navbarLinks.slice(3, navbarLinks.length).map((link, index) => (
              <NavButtons key={index} text={link.text} icon={link.icon} />
            ))}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <input
            className="hidden lg:block bg-[#f0eeef] px-3 h-full py-2 text-sm rounded-lg outline-none focus:outline-none"
            type="text"
            placeholder="Talk to AI..."
          />
          <NavButtons text={""} icon={<BsChatLeftDots />} />
          <NavButtons text={""} icon={<TbBellRinging size={16} />} />
          <NavButtons
            text={""}
            className="!px-1 !py-1"
            icon={
              <img
                src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="profile"
                className="w-6 h-6 rounded-full"
              />
            }
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:block lg:hidden bg-[#f7f5f6] px-4 py-2">
          {sidebarLinks.map((link, index) => (
            <NavButtons
              key={index}
              text={link.text}
              icon={link.icon}
              className="w-full text-left !py-4"
            />
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
