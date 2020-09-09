import React from 'react';
import { GlobalStyle } from './commonStyles/style';
import { MovieCardList } from './components/MovieCardList/MovieCardList';
import { Header } from './components/Header/Header';
import { Sorting } from './components/Sorting/Sorting';
import { Footer } from './components/Footer/Footer';
import {Main} from "./commonStyles/Main";

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
