import styled from "styled-components";

const Btn = styled.button`
  display: block;
  /* position: ${(props) => (props.$positionRelative ? "relative" : "static")}; */
  margin-left: ${(props) => (props.$marginLeftAuto ? "auto" : 0)};
  margin-right: ${(props) => (props.$marginRightAuto ? "auto" : 0)};
  margin-bottom: ${(props) => (props.$marginBottom ? "20px" : 0)};
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

  &:disabled {
    background-color: var(--btn-disabled-bg-color);
    cursor: not-allowed;
  }
`;

export default Btn;
