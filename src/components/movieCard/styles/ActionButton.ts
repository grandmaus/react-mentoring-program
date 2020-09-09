import styled from "styled-components";

export const ActionButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 48px;
  line-height: 1;
  border: none;
  background-color: #232323;
  overflow: hidden;
  
  &::before {
    content: '⋮';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    color: #ffffff;
  }
`;
