import styled from "styled-components";
import { LinkStyled } from "../common/Link.styled";
import Btn from "../common/Btn";
import Text from "../common/Text";
import Label from "../common/Label";

export const WrapperContentSingleTodo = styled.div`
  padding: 15px;
  border-radius: 15px;
  background-color: ${(props) =>
    props.$backgroundRed
      ? "var(--bg-color-completed-task)"
      : "var(--bg-color-active-task)"};
`;

export const InputSingleTodo = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  width: 100%;
  text-align: center;
  border: ${(props) =>
    props.$borderRed
      ? "1px solid var(--border-color-completed-task)"
      : "1px solid var(--border-color-active-task)"};
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  font-family: inherit;
  font-size: 24px;
  font-weight: 700;
  color: inherit;
  margin-bottom: 15px;

  &:hover,
  &:focus {
    background-color: lightgray;
  }
`;

export const TextareaSingleTodo = styled.textarea`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  padding: 0;
  border: ${(props) =>
    props.$borderRed
      ? "1px solid var(--border-color-completed-task)"
      : "1px solid var(--border-color-active-task)"};
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  font-family: inherit;
  font-size: 18px;
  line-height: 1.2;
  color: inherit;
  overflow: hidden;
  resize: none;

  &:hover,
  &:focus {
    background-color: lightgray;
  }
`;

export const WrapperSingleCheckbox = styled.div`
  margin-bottom: 15px;
  text-align: center;
`;

export const LabelSingleCheckbox = styled(Label)`
  margin-right: 15px;
  cursor: pointer;
`;

export const InputSingleCheckbox = styled.input`
  background-color: var(--input-bg-color);
  border: 1px solid transparent;
  border-radius: 50%;
  margin: 0;
  outline: transparent;
  cursor: pointer;
`;

export const TitleTaskSingleTodo = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  border: 1px solid transparent;
`;

export const DescriptionTaskSingleTodo = styled(Text)`
  margin-bottom: 15px;
  width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  border: 1px solid transparent;
`;

export const WrapperBtnSingleTodo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const LinkSingleTodo = styled(LinkStyled)`
  color: var(--btn-text-color);
  background-color: var(--btn-bg-color);
  border-radius: 15px;
  padding: 10px;

  &:hover,
  &:focus {
    background-color: var(--btn-hover-bg-color);
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const BtnSingleTodo = styled(Btn)`
  margin-left: ${(props) => (props.$marginLeftAuto ? "auto" : 0)};
  margin-right: ${(props) => (props.$marginRightAuto ? "auto" : 0)};
`;
