import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../src/context/UserContext"; // ✅ correct path
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-green-700 text-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <div className="text-2xl font-bold tracking-wide">EcoTracker</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <li>
            <Link to="/" className="hover:text-green-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/report" className="hover:text-green-300">
              Report
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-green-300">
              Dashboard
            </Link>
          </li>

          {!user ? (
            <>
              <li>
                <Link to="/login" className="hover:text-green-300">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-green-300">
                  Register
                </Link>
              </li>
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

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-3 text-sm font-medium">
          <Link
            to="/"
            className="block hover:text-green-300"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/report"
            className="block hover:text-green-300"
            onClick={toggleMobileMenu}
          >
            Report
          </Link>
          <Link
            to="/dashboard"
            className="block hover:text-green-300"
            onClick={toggleMobileMenu}
          >
            Dashboard
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                className="block hover:text-green-300"
                onClick={toggleMobileMenu}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block hover:text-green-300"
                onClick={toggleMobileMenu}
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                logout();
                toggleMobileMenu();
              }}
              className="block w-full text-left hover:text-green-300"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
