import React from "react";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const LogoutButton = () => {
  const { logout } = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); 
  };

  return (
    <button
      onClick={handleLogout}
      className="py-2 px-3 text-gray-900 rounded transition duration-300 ease-in-out transform hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer focus:outline-none focus:ring focus:border-blue-300"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
