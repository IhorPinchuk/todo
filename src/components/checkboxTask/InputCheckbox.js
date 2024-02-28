import styled from "styled-components";

const InputCheckbox = styled.input`
  background-color: var(--input-bg-color);  
  border: 1px solid transparent;  
  border-radius: 50%;
  margin: 0;
  outline: transparent;
/* 
  ::placeholder {
    color: var(--secondary-text-color);
    opacity: 1;
  } */

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--secondary-text-color);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--secondary-text-color);
  }

  /* &:hover,
  &:focus {
    border: 1px solid var(--border-input-hover-color);
  } */
`;

export default InputCheckbox;
