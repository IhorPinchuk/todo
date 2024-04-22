import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuthenticated } from "../../context/UserAuthenticatedContext";

const PrivateRoutes = ({ children }) => {
  const { isAuthenticated } = useUserAuthenticated();

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
