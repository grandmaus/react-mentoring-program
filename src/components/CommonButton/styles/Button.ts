import styled from "styled-components";

export type StyledProps = {
  width: string;
  color: string;
  background: string;
  borderColor: string;
};

export const Button = styled.button<StyledProps>`
  display: block;
  width: ${props => props.width};
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;
  color: ${props => props.color};
  border: 2px solid ${props => props.borderColor};
  border-radius: 4px;
  background-color: ${props => props.background};

  &:hover {
    opacity: 0.7;
  }
`;