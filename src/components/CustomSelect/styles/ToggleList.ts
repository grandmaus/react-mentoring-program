import styled from 'styled-components';

export type StyledProps = {
  isError: boolean;
};

export const ToggleList = styled.button<StyledProps>`
  display: block;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  text-align: left;
  color: rgba(255, 255, 255, 0.3);
  background-color: #2e2e2e;
  outline: 2px solid ${(props) => (props.isError ? '#ff0000' : 'transparent')};
  outline-offset: -2px;

  &:focus {
    color: #ffffff;
  }
`;
