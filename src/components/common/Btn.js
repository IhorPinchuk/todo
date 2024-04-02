import styled from "styled-components";

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  padding: 10px;
  color: var(--btn-text-color);
  background-color: var(--btn-bg-color);
  border: transparent;
  border-radius: 15px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--btn-hover-bg-color);
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.5);
  }

  &:disabled {
    background-color: var(--btn-disabled-bg-color);
    cursor: not-allowed;
  }
`;

export default Btn;
