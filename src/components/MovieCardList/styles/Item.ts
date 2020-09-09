import styled from "styled-components";

export const Item = styled.li`
  width: 320px;
  margin-right: 40px;
  margin-bottom: 40px;

  &:nth-child(3n) {
    margin-right: 0;
  }
`;
