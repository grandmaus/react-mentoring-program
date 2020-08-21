import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './style';
import { MovieCardList } from './components/MovieCardList/MovieCardList';
import { Header } from './components/Header/Header';
import { Sorting } from './components/Sorting/Sorting';
import { Footer } from './components/Footer/Footer';

const Main = styled.main`
  background-color: #232323;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header title="Find your movie" />
      <Main>
        <Sorting />
        <MovieCardList />
      </Main>
      <Footer />
    </>
  );
}
