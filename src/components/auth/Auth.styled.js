import styled from "styled-components";
import Btn from "../common/Btn";
import Label from "../common/Label";
import Input from "../common/Input";
import Ul from "../common/Ul";
import Li from "../common/Li";
import NavLinkStyled from "../common/NavLink.styled";

// export const TitleAuth = styled.h2`
// margin-bottom: 15px;
// text-align: center;
// `;

export const UlAuth = styled(Ul)`
display: flex;
gap: 20px;
justify-content: center;
margin-bottom: 15px;
`;

export const LiAuth = styled(Li)``;

export const NavLinkStyledAuth = styled(NavLinkStyled)`
 position: relative;
  display: inline-block;
  color: blue;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 2px;
    background-color: #ffffff;
    transform: scaleX(0);
    transition: transform 0.3s;
  }

  &.active {
    color: #ffffff;
  }

  &.active::after {
    transform: scaleX(1);
  }

  &:hover,
  &:focus {
    color: #ffffff;
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
  }
`;

export const FormAuth = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
`;

export const WrapperLabelInputAuth = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
`;

export const WrapperRelativeAuth = styled.div`
position: relative;
`;

export const LabelAuth = styled(Label)``;

export const InputAuth = styled(Input)`
padding-right: 50px;
`;

export const BtnSeePassword = styled.button`
position: absolute;
top: 50%;
transform: translateY(-50%);
right: 15px;
display: flex;
justify-content: center;
align-items: center;
padding: 0;
cursor: pointer;
background-color: transparent;
border-color: transparent;
`;

export const SvgEye = styled.svg`
stroke: var(--btn-bg-color);
width: 30px;
height: 30px;
`;

export const UseEye = styled.use``;

export const BtnAuth = styled(Btn)`
margin-bottom: 15px;
`;