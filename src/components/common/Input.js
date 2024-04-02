import styled from "styled-components";

const Input = styled.input`
  box-sizing: border-box;  
  /* height: 30px; */
  font-family: "Manrope", sans-serif;
  font-size: 18px;  
  line-height: 0.9;
  background-color: var(--input-bg-color);
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 18px;
  padding-right: 18px;
  border: 1px solid transparent; 
  border-radius: 14px;
  outline: transparent;

  ::placeholder {
    color: var(--secondary-text-color);
    opacity: 1;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--secondary-text-color);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--secondary-text-color);
  }

  &:hover,
  &:focus {
    border: 1px solid var(--border-input-hover-color);
  }
`;

export default Input;
