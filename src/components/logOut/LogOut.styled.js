import styled from "styled-components";
import Btn from "../common/Btn";

export const BtnLogOut = styled(Btn)`

position: absolute;
right: 0;
background-color: transparent;
border: 1px solid green;

&:hover, &:focus {
  background-color: green;
}
`;