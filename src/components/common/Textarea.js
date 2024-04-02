import styled from "styled-components";

const Textarea = styled.textarea`
  box-sizing: border-box;
  /* height: 100px; */
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  line-height: 1.2;
  background-color: var(--input-bg-color);
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 18px;
  padding-right: 18px;
  border: 1px solid transparent;
  border-radius: 14px;
  outline: transparent;
  resize: none;

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

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thumb-bg-color);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--scrollbar-track-bg-color);
    border-radius: 4px;
    margin-top: 14px;
    margin-bottom: 14px;
  }
`;

export default Textarea;
