import styled from "styled-components";
import Nav from "../common/Nav";
import Ul from "../common/Ul";
import Li from "../common/Li";
import NavLinkStyled from "../common/NavLink.styled";

export const HeaderStyled = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const NavHeader = styled(Nav)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UlHeader = styled(Ul)`
  display: flex;
  gap: 20px;
`;

export const LiHeader = styled(Li)``;

export const NavLinkStyledHeader = styled(NavLinkStyled)`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 2px;
    background-color: var(--btn-hover-bg-color);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &.active {
    color: blue;
  }

  &.active::after {
    transform: scaleX(1);
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
  }
`;
