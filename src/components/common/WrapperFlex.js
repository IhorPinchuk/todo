import styled from "styled-components";

const WrapperFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$lexDirection ? "row" : "column")};
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: ${(props) => (props.$marginBottom ? "20px" : "0")};
`;

export default WrapperFlex;
