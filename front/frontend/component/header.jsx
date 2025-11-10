// Header.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaPen, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">MyLogo</Link>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-6">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <FaSignInAlt /> Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <FaSignInAlt /> Login
            </Link>
            <Link
              to="/signup"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <FaUserPlus /> Signup
            </Link>
          </>
        )}

        <Link
          to="/write-post"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
        >
          <FaPen /> Write Post
        </Link>

        <Link
          to="/profile"
          className="text-gray-700 hover:text-blue-600 transition text-2xl"
        >
          <FaUserCircle />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
