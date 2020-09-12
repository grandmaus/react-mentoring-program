import React, { useState } from 'react';
import { GlobalStyle } from './commonStyles/style';
import { MovieCardList } from './components/MovieCardList/MovieCardList';
import { Header } from './components/Header/Header';
import { Sorting } from './components/Sorting/Sorting';
import { Footer } from './components/Footer/Footer';
import { Main } from './commonStyles/Main';
import { FormAddContainer } from './containers/FormAddContainer/FormAddContainer';
import { FormEditContainer } from './containers/FormEditContainer/FormEditContainer';
import { DeleteMovieContainer } from './containers/DeleteMovieContainer/DeleteMovieContainer';

export default function App() {
  const [visibilityDetails, setVisibilityDetails] = useState<boolean>(false);

  const showDetailsHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setVisibilityDetails(true);
  };

  const returnToSearch = () => setVisibilityDetails(!visibilityDetails);

  return (
    <>
      <GlobalStyle />
      <Header title="Find your movie" isShowDetails={visibilityDetails} returnToSearch={returnToSearch} />
      <Main>
        <Sorting />
        <MovieCardList showDetailsHandler={showDetailsHandler} />
      </Main>
      <Footer />
    </>
  );
}
