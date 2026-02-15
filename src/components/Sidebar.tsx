import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const linkClass =
    "block px-4 py-2 rounded hover:bg-gray-700 transition";

  const activeClass = "bg-gray-700";

  return (
    <aside className="w-64 min-h-screen bg-gray-800 text-white p-4">
      {/* Logo / Title */}
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Analytics
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Users
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Reports
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Settings
        </NavLink>
      </nav>

      {/* Logout Button (bottom) */}
      <div className="mt-10">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
