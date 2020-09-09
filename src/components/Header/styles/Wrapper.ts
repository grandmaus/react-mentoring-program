import styled from "styled-components";
import mainImage from "@public/image/mainImage.jpg";

export const Wrapper = styled.header`
  position: relative;
  margin-bottom: 10px;
  background-image: url(${mainImage});
  background-color: #4a4a4a;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
  }
`;
