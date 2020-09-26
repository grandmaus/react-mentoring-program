import React, { useState, FC } from 'react';
import { GlobalStyle } from './commonStyles/style';
import MovieCardList from './components/MovieCardList/MovieCardList';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './commonStyles/Main';
import { FormAddContainer } from './containers/FormAddContainer/FormAddContainer';
import { useVisibility } from './hooks/useVisibility.hooks';
import SortingContainer from './containers/SortingContainer/SortingContainer';
import { Movie } from './store/types';
import { connect } from 'react-redux';

type Props = {
  movies: ReadonlyArray<Movie>;
};

const App: FC<Props> = ({ movies }) => {
  const { visibility, addVisibility, handleToggleVisibility } = useVisibility();
  const [movie, setMovie] = useState<Movie>();

  const showDetailsHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const movieId = e.target.closest('article').id;

    const movieItem = movies.reduce((result: Movie, item: Movie) => {
      return item.id.toString() === movieId ? item : result;
    }, {} as Movie);

    setMovie(movieItem);
    addVisibility();
  };

  return (
    <>
      <GlobalStyle />
      <Header
        title="Find your movie"
        isShowDetails={visibility}
        returnToSearch={handleToggleVisibility}
        movie={movie}
      />
      <Main>
        <SortingContainer />
        <MovieCardList showDetailsHandler={showDetailsHandler} />
        <FormAddContainer />
      </Main>
      <Footer />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  movies: state.netflix.movies
});

export default connect(mapStateToProps, null)(App);
