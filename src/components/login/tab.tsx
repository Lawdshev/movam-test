import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // For handling URL params

function Tab() {
  const navigate = useNavigate();
  const { search } = useLocation(); // To get the current URL search params
  const [activeTab, setActiveTab] = useState("signin");

  useEffect(() => {
    // Extract the 'tab' query parameter from the URL
    const params = new URLSearchParams(search);
    const tab = params.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [search]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(`?tab=${tab}`);
  };

  return (
    <div className="bg-[#f0eff2] w-full p-1 rounded-xl">
      <button
        onClick={() => handleTabChange("signin")}
        className={`w-1/2 py-3 rounded-xl font-medium ${
          activeTab === "signin" ? "bg-white" : "text-[#919193]"
        }`}
      >
        Sign In
      </button>
      <button
        onClick={() => handleTabChange("signup")}
        className={`w-1/2 py-3 rounded-xl font-medium ${
          activeTab === "signup" ? "bg-white" : "text-[#919193]"
        }`}
      >
        Sign Up
      </button>
    </div>
  );
}

export default Tab;
