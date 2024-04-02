import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavLinkStyled = styled(NavLink)`  
  text-decoration: none;
  color: green;
  
  &:hover, &:focus {
    color: var(--btn-hover-bg-color);
  }
`;

export default NavLinkStyled;
