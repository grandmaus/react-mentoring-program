import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;
