import { createContext, useContext, useState } from "react";

const UserAuthenticatedContext = createContext();

export const UserAuthenticatedProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("user")
  );
  
  return (
    <UserAuthenticatedContext.Provider
      value={{ isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </UserAuthenticatedContext.Provider>
  );
};

export const useUserAuthenticated = () => useContext(UserAuthenticatedContext);
