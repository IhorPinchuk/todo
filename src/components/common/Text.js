import styled from "styled-components";

const Text = styled.p`
  font-size: 18px;
  line-height: 1.2;
  color: var(--secondary-text-color);
  text-decoration: ${(props) => (props.$lineThrough ? "line-through" : "none")};
`;

export default Text;
