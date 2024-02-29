import styled from "styled-components";

const Text = styled.p`
  text-align: start;
  font-size: 18px;
  line-height: 0.9;
  color: var(--secondary-text-color);
  text-decoration: ${(props) => (props.$lineThrough ? "none" : "line-through")};
`;

export default Text;
