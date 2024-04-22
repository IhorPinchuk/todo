import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #15151530;
  overflow-y: auto;
  z-index: 100;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 100%;
  padding: 24px;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: var(--modal-bg-color);
  box-shadow: 0px 4px 16px 0px var(--modal-window-shadow);
  color: var(--modal-title-color);  
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  &:hover,
  :focus {
    svg {
      stroke: var(--modal-icon-color-hover);
      transition: stroke 0.3s ease;
    }
  }
`;

export const CloseSVG = styled.svg`
  width: 18px;
  height: 18px;
  stroke: var(--modal-icon-color);
`;