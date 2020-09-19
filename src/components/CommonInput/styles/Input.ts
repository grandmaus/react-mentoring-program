import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 25px;
  padding: 15px;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  color: #ffffff;
  background-color: #2e2e2e;

  &:disabled {
    padding: 0;
    background-color: transparent;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;
