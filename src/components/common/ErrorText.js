import styled from "styled-components";

const ErrorText = styled.p`
  text-align: ${(props) => (props.$textAlignCenter ? "center" : "start")};
  font-size: 10px;
  line-height: 0.9;
  color: pink;
`;

export default ErrorText;
