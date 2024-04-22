import React from "react";

import { LinkHome, TextHome, WrapperCenterLinkHome } from "./Home.styled";
import { useUserAuthenticated } from "../../context/UserAuthenticatedContext";

const Home = () => {
  const { isAuthenticated } = useUserAuthenticated();

  return (
    <>
      <TextHome>Welcome to your todo Letter</TextHome>
      {!isAuthenticated && (
        <WrapperCenterLinkHome>
          <LinkHome to="login">Log in</LinkHome>
          <LinkHome to="signup">Sign up</LinkHome>
        </WrapperCenterLinkHome>
      )}
    </>
  );
};

export default Home;
