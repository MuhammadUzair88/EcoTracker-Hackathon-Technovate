import { Routes, Route } from "react-router-dom";

import Staff from "./pages/Staff";
import Shift from "./pages/Shift";
import Sidebar from "./components/SideBar";
import AdminDashboard from "./pages/AdminDashBoard";
import Reports from "./pages/Reports";
import DetailReports from "./pages/DetailReports";
import CreateStaff from "./pages/CreateStaff";

const App = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/shift" element={<Shift />} />
          <Route path="/users" element={<Reports />} />
          <Route path="/report/:id" element={<DetailReports />} />
          <Route path="/create-shift/:incidentId" element={<CreateStaff />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
