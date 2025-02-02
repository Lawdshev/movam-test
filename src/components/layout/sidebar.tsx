import { sidebarLinks } from "../../mock/sidebar-links";

function Sidebar() {
  return (
    <aside className="w-64 p-6 hidden lg:block">
      <div className="space-y-4">
        <div className="text-lg text-[#6c6c6c] font-medium">
          Organization Settings
        </div>
        <ul className="space-y-2 mt-4">
          {sidebarLinks.map((link, index) => (
            <li
              key={index}
              className={`py-2 px-2 text-[#313433] hover:bg-white rounded-xl ${
                link.text.toLowerCase() === "budgets" ? "bg-white" : ""
              }`}
            >
              <a href="#" className="flex items-center text-sm ">
                {link.icon}
                <span className="ml-2">{link.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
