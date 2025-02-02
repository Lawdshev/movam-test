import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import InvalidSessionModal from "../modals/invalid-sessions";
import { useEffect, useState } from "react";
import { verifyUser } from "../../pages/login/verify-user";

function DashboardLayout() {
  const [isSessionInvalid, setIsSessionInvalid] = useState(false)
  useEffect(() => {
    verifyUser(() => setIsSessionInvalid(true))
  },[])
  return (
    <div className="flex flex-col h-screen md:px-4 bg-[#f6f5f5]">
      <Navbar />
      <div className="flex flex-1 rounded-xl h-full overflow-hidden bg-[#f0eeef] relative">
        <Sidebar />
        <div className="md:flex-1 md:p-6 overflow-y-scroll">
          <Outlet />
        </div>
      </div>
      <InvalidSessionModal
        isOpen={isSessionInvalid}
        onClose={() => setIsSessionInvalid(false)}
      />
    </div>
  );
}

export default DashboardLayout;
