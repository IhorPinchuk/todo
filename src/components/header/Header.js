import React from "react";
import ContainerStyled from "../common/ContainerStyled";
import {
  HeaderStyled,
  LiHeader,
  NavHeader,
  NavLinkStyledHeader,
  UlHeader,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <NavHeader>
          <UlHeader>
            <LiHeader>
              <NavLinkStyledHeader to="/">Home</NavLinkStyledHeader>
            </LiHeader>
            <LiHeader>
              <NavLinkStyledHeader to="/todos" end>
                Todo list
              </NavLinkStyledHeader>
            </LiHeader>
            <LiHeader>
              <NavLinkStyledHeader to="/about">About</NavLinkStyledHeader>
            </LiHeader>
          </UlHeader>
        </NavHeader>
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Header;
