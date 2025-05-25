import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Report from "./pages/Report";
import UserDashboard from "./pages/UserDashboard";

// Check if user is logged in
const isAuthenticated = () => {
  return localStorage.getItem("user"); // You can enhance this with validation
};

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes */}
          <Route
            path="/report"
            element={
              isAuthenticated() ? <Report /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated() ? (
                <UserDashboard />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
