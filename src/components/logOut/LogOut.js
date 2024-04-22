import React from "react";
import { BtnLogOut } from "./LogOut.styled";
import { useNavigate } from "react-router-dom";
import { useUserAuthenticated } from "../../context/UserAuthenticatedContext";

const LogOut = () => {
const navigate = useNavigate();
const { setIsAuthenticated } = useUserAuthenticated();
  const handleClickLogOut = () => {
    localStorage.clear("user");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <BtnLogOut type="button" onClick={handleClickLogOut}>
      Log out
    </BtnLogOut>
  );
};

export default LogOut;
