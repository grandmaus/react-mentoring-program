import React, { FC } from 'react';
import { Logo } from '../Logo/Logo';
import { CommonButton } from '../CommonButton/CommonButton';
import { SearchForm } from '../SearchForm/SearchForm';
import { Wrapper } from './styles/Wrapper';
import { Container } from './styles/Container';
import { Banner } from './styles/Banner';
import { Title } from './styles/Title';
import { Row } from './styles/Row';

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
