import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogin } from "../hooks/useLogin";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  const {isLoading} = useLogin();
  
  if (!localStorage.getItem("user")) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;