import React from "react";
import ContainerStyled from "../common/ContainerStyled";
import {  
  HeaderStyled,
  LiHeader,
  NavHeader,
  NavLinkStyledHeader,
  UlHeader,
  WrapperHeader,
} from "./Header.styled";
import { useUserAuthenticated } from "../../context/UserAuthenticatedContext";
import LogOut from "../logOut/LogOut";

const Header = () => {
  const { isAuthenticated } = useUserAuthenticated();

    return (
    <HeaderStyled>
      <ContainerStyled>
        <WrapperHeader>
        <NavHeader>
          <UlHeader>
            <LiHeader>
              <NavLinkStyledHeader to="/">Home</NavLinkStyledHeader>
            </LiHeader>
            {isAuthenticated && (
              <>
                <LiHeader>
                  <NavLinkStyledHeader to="/todos" end>
                    Todo list
                  </NavLinkStyledHeader>
                </LiHeader>
                <LiHeader>
                  <NavLinkStyledHeader to="/about">About</NavLinkStyledHeader>
                </LiHeader>
              </>
            )}
          </UlHeader>
        </NavHeader>
        {isAuthenticated && <LogOut />}
        </WrapperHeader>
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Header;
