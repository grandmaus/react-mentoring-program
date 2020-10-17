import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './styles/Wrapper';
import notFound from '../../../public/image/404.jpg';
import { Footer } from '../Footer/Footer';
import { Container } from './styles/Container';
import Logo from '../Logo/Logo';
import { Row } from './styles/Row';
import CommonButton from '../CommonButton/CommonButton';

const stylesButton = {
  width: '300px',
  color: '#f65251',
  background: 'transparent',
  borderColor: '#f65251',
};

export const NotFound = () => {
  return (
    <Wrapper>
      <Row>
        <Logo url="/" />
      </Row>
      <Container>
        <h1>Page Not Found</h1>
        <img src={`${notFound}`} alt="" />
        <CommonButton element={Link} link="/" text="Go Back To Home" styles={stylesButton} />
      </Container>
      <Footer />
    </Wrapper>
  );
};
