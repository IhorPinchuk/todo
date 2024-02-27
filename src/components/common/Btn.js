import styled from "styled-components";

const Btn = styled.button`
  width: 100px;
  height: 30px;
  color: var(--btn-text-color);
  background-color: var(--btn-bg-color);
  border: transparent;
  border-radius: 15px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--btn-hover-bg-color);
  }
`;

export default Btn;
