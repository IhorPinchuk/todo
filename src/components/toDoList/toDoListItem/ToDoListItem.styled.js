import styled from "styled-components";
import Li from "../../common/Li";
import Btn from "../../common/Btn";
import Text from "../../common/Text";
import { LinkStyled } from "../../common/Link.styled";

export const LiTodoList = styled(Li)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  background-color: ${(props) =>
    props.$backgroundRed ? "var(--bg-color-completed-task)" : "var(--bg-color-active-task)"};
  padding: 10px;
  border-radius: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const WrapperTextContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 500px;
  border: 1px solid transparent;
  padding: 5px;
  border-radius: 5px;
  `;

export const LinkTodoList = styled(LinkStyled)`
  border: 1px solid transparent;

  &:hover {
    background-color: aliceblue;
    border: ${(props) =>
      props.$borderRed ? "1px solid var(--border-color-completed-task)" : "1px solid var(--border-color-active-task)"};
    border-radius: 5px;
    box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.5);
  }  
`;

export const TextTitleTask = styled(Text)`
  margin-bottom: 5px;
  font-weight: 600;
`;

export const TextDescriptionTask = styled(Text)`
  box-sizing: border-box;
  width: 100%;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  background-color: #ddd6d6;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;

export const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const BtnEditTaskTodoList = styled(Btn)``;

export const BtnDeleteTaskTodoList = styled(Btn)`
  min-width: 87px;
  background-color: var(--btn-delete-bg-color);

  &:hover,
  &:focus {
    background-color: var(--btn-delete-hover-bg-color);
  }
`;
