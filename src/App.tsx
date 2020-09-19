import React from 'react';
import { GlobalStyle } from './commonStyles/style';
import { MovieCardList } from './components/MovieCardList/MovieCardList';
import { Header } from './components/Header/Header';
import { Sorting } from './components/Sorting/Sorting';
import { Footer } from './components/Footer/Footer';
import { Main } from './commonStyles/Main';
import { FormAddContainer } from './containers/FormAddContainer/FormAddContainer';
import { FormEditContainer } from './containers/FormEditContainer/FormEditContainer';
import { DeleteMovieContainer } from './containers/DeleteMovieContainer/DeleteMovieContainer';
import { useVisibility } from './hooks/useVisibility.hooks';

export default function App() {
  const { visibility, handleToggleVisibility } = useVisibility();

  const showDetailsHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleToggleVisibility();
  };

  return (
    <>
      <GlobalStyle />
      <Header title="Find your movie" isShowDetails={visibility} returnToSearch={handleToggleVisibility} />
      <Main>
        <Sorting />
        <MovieCardList showDetailsHandler={showDetailsHandler} />
        <FormAddContainer />
        <FormEditContainer />
        <DeleteMovieContainer />
      </Main>
      <Footer />
    </>
  );
}
