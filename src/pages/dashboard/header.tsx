import { IoSearch } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { HiOutlineDownload } from "react-icons/hi";
import { MdOutlineAddBox } from "react-icons/md";

function Header() {
  return (
    <header className="mb-6">
      {/* Desktop & Tablet Layout */}
      <div className="hidden sm:flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <h1 className="text-lg font-medium text-[#4b4b4b]">Budget</h1>
          <button className="px-2 py-1 flex items-center gap-1 border-dashed border border-[#cecccc] text-gray-800 rounded-lg text-sm">
            <GoPlus />
            <span>Add Filters</span>
          </button>
          <button className="px-2 flex items-center gap-1 py-1 text-gray-800 rounded text-sm">
            <IoSearch />
            <span>Search</span>
          </button>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 flex items-center gap-1 bg-[#e6e3e4] text-black rounded-lg text-sm">
            <span>Export</span>
          </button>
          <button className="px-4 py-2 flex items-center gap-1 bg-[#007b5f] text-white rounded-lg text-sm">
            <span>Add Budget</span>
          </button>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden">
        {/* Title & Icons */}
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-medium text-[#4b4b4b]">Budget</h1>
          <div className="flex gap-3 text-gray-700">
            <button>
              <GoPlus size={22} />
            </button>
            <button>
              <HiOutlineDownload size={22} />
            </button>
            <button>
              <MdOutlineAddBox size={24} className="text-[#007b5f]" />
            </button>
          </div>
        </div>

        {/* Search Bar Below */}
        <div className="mt-3">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <IoSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 w-full bg-transparent focus:outline-none text-gray-800 text-sm"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
