import styled from "styled-components";
import Text from "../common/Text";
import { LinkStyled } from "../common/Link.styled";

export const TextHome = styled(Text)`
  margin-bottom: 20px;
  text-align: center;
`;

export const WrapperCenterLinkHome = styled.div`
  text-align: center;
`;

export const LinkHome = styled(LinkStyled)`
  color: var(--btn-text-color);
  background-color: var(--btn-bg-color);
  border-radius: 15px;
  padding: 5px;
  margin-right: 15px;

  &:hover,
  &:focus {
    background-color: var(--btn-hover-bg-color);
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.5);
  }

  &:last-child {
    margin-right: 0;
  }
`;
