import React, { FC } from 'react';
import styled from 'styled-components';
import { Logo } from '../Logo/Logo';
import { CommonButton } from '../CommonButton/CommonButton';
import { SearchForm } from '../SearchForm/SearchForm';
import mainImage from '@public/image/mainImage.jpg';

const Wrapper = styled.header`
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

const Container = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1040px;
  margin: 0 auto;
  padding: 20px 20px 100px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Banner = styled.div`
  width: 900px;
  margin: 50px auto 0;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 48px;
  font-weight: 400;
  color: #ffffff;
`;

const stylesButton = {
  width: '200px',
  color: '#f65251',
  background: 'rgba(0, 0, 0, 0.5)',
  borderColor: 'transparent'
};

type Props = {
  title: string;
};

export const Header: FC<Props> = ({ title }) => (
  <Wrapper>
    <Container>
      <Row>
        <Logo url="/" alt="Netflix Roulette" />
        <CommonButton text="Add Movie" styles={stylesButton} />
      </Row>
      <Banner>
        <Title>{title}</Title>
        <SearchForm action="#" method="get" />
      </Banner>
    </Container>
  </Wrapper>
);
