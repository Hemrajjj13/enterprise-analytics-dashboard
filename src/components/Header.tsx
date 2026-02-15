import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      {/* Left Side - Title */}
      <h1 className="text-lg font-semibold text-gray-700">
        Admin Dashboard
      </h1>

      {/* Right Side - User + Logout */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Admin</span>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
