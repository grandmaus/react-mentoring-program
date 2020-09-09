import styled from "styled-components";

export const ActionCloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  display: block;
  width: 20px;
  height: 20px;
  font-size: 32px;
  line-height: 1;
  background-color: transparent;
  border: none;
  
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
