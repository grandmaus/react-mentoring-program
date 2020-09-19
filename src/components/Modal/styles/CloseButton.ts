import styled from "styled-components";

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: block;
  width: 25px;
  height: 25px;
  font-size: 48px;
  line-height: 1;
  background-color: transparent;
  border: none;
  overflow: hidden;
  
  &::before {
    content: '˟';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    color: #ffffff;
  }
`;
