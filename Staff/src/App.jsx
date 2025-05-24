import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ReportsProfile from "./pages/ReportsProfile";

const App = () => {
  return (
    <div className=" ">
      <div className="min-h-screen ">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reportsprofile" element={<ReportsProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
