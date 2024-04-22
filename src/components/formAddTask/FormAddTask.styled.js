import styled from "styled-components";
import Label from "../common/Label";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import Btn from "../common/Btn";
import WrapperFlex from "../common/WrapperFlex";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

export const LabelForm = styled(Label)`
cursor: pointer;
`;

export const InputForm = styled(Input)``;

export const TextareaForm = styled(Textarea)`
height: 100px;
`;

export const BtnForm = styled(Btn)``;

export const WrapperFlexForm = styled(WrapperFlex)`
  gap: 10px;
`;
