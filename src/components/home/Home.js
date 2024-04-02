import React from "react";

import { LinkHome, TextHome, WrapperCenterLinkHome } from "./Home.styled";

const Home = () => {
  return (
    <>
      <TextHome>Welcome to your todo Letter</TextHome>
      <WrapperCenterLinkHome>
        <LinkHome to="todos">To start</LinkHome>
      </WrapperCenterLinkHome>
    </>
  );
};

export default Home;
