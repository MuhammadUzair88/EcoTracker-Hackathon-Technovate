import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Report from "./pages/Report";

const App = () => {
  return (
    <div className=" ">
      <Navbar />

      <div className="min-h-screen ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
