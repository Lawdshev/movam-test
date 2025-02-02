import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/login";
import Dashboard from "./pages/dashboard";
import DashboardLayout from "./components/layout/dashboard-layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
