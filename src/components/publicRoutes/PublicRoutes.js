import React from "react";
import { useUserAuthenticated } from "../../context/UserAuthenticatedContext";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const { isAuthenticated } = useUserAuthenticated();

  return !isAuthenticated ? children : <Navigate to="/" />;
};

export default PublicRoutes;
