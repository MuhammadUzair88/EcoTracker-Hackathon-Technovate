import { NavLink } from "react-router-dom";
import { User, Clock, Users } from "lucide-react";

const navItems = [
  { path: "/", label: "DashBoard", icon: <User size={18} /> },
  { path: "/staff", label: "Staff", icon: <User size={18} /> },
  { path: "/shift", label: "Shift", icon: <Clock size={18} /> },
  { path: "/users", label: "Users", icon: <Users size={18} /> },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white h-full shadow-md hidden md:block">
      <div className="p-4 font-bold text-xl border-b">Admin Panel</div>
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 ${
                isActive ? "bg-gray-200 font-semibold" : "text-gray-700"
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
