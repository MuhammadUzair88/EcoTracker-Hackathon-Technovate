// // components/Navbar.jsx
// export default function Navbar() {
//   return (
//     <nav className="bg-green-700 text-white shadow-md px-6 py-4 flex items-center justify-between">
//       <div className="text-2xl font-bold tracking-wide">EcoTracker</div>
//       <ul className="hidden md:flex space-x-6 text-sm font-medium">
//         <li><a href="/" className="hover:text-green-300">Home</a></li>
//         <li><a href="/report" className="hover:text-green-300">Report Incident</a></li>
//         <li><a href="/map" className="hover:text-green-300">Map</a></li>
//         <li><a href="/dashboard" className="hover:text-green-300">Dashboard</a></li>
//         <li><a href="/community" className="hover:text-green-300">Community</a></li>
//         <li><a href="/login" className="hover:text-green-300">Login</a></li>
//       </ul>
//       <div className="md:hidden">
//         {/* Mobile hamburger menu (optional implementation) */}
//         <button className="text-white focus:outline-none">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
//             viewBox="0 0 24 24">
//             <path d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </div>
//     </nav>
//   );
// }
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../src/context/UserContext"; // ✅ correct path
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="sticky top-0 z-50 bg-green-700 text-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold tracking-wide">EcoTracker</div>

      <ul className="hidden md:flex space-x-6 text-sm font-medium items-center">
        <li><Link to="/" className="hover:text-green-300">Home</Link></li>
        <li><Link to="/report" className="hover:text-green-300">Report</Link></li>
        {/* <li><Link to="/map" className="hover:text-green-300">Map</Link></li> */}
        <li><Link to="/dashboard" className="hover:text-green-300">Dashboard</Link></li>
        <li><Link to="/community" className="hover:text-green-300">Community</Link></li>

        {!user ? (
          <>
            <li><Link to="/login" className="hover:text-green-300">Login</Link></li>
            <li><Link to="/register" className="hover:text-green-300">Register</Link></li>
          </>
        ) : (
          <li className="relative">
            <button
              className="w-10 h-10 rounded-full bg-green-300 text-green-800 font-bold flex items-center justify-center hover:bg-green-400"
              onClick={toggleDropdown}
              title={user.username || "Profile"}
            >
              {(user.username || "U").charAt(0).toUpperCase()}
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-lg shadow-lg z-10">
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 hover:bg-green-100"
                >
                  Logout
                </button>
              </div>
            )}
          </li>
        )}
      </ul>

      <div className="md:hidden">
        <button className="text-white focus:outline-none">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
