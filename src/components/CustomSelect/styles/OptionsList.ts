import styled from 'styled-components';

export type StyledProps = {
  visible: boolean;
};

export const OptionsList = styled.ul<StyledProps>`
  position: absolute;
  z-index: 5;
  top: 100%;
  left: 0;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  width: 100%;
  margin: 0;
  padding: 15px;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  color: #ffffff;
  background-color: #232323;
  box-shadow: 0 4px 11px 0 #000000;
`;
