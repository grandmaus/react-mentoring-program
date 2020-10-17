import React, { FC, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import MovieCardList from './components/MovieCardList/MovieCardList';
import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './commonStyles/Main';
import { useVisibility } from './hooks/useVisibility.hooks';
import SortingContainer from './containers/SortingContainer/SortingContainer';
import { Movie } from './store/types';

type Props = {
  movies: ReadonlyArray<Movie>;
  isShowDetails?: boolean;
};

const App: FC<Props> = ({ movies, isShowDetails = false }) => {
  const { handleToggleVisibility } = useVisibility();
  const [movie, setMovie] = useState<Movie>();

  const showDetailsHandler = useCallback(
    (e: React.SyntheticEvent) => {
      const movieId = e.target.closest('article').id;
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

      const movieItem = movies.reduce((result: Movie, item: Movie) => {
        return item.id.toString() === movieId ? item : result;
      }, {} as Movie);

      setMovie(movieItem);
    },
    [movies],
  );

  return (
    <>
      <Header
        title="Find your movie"
        isShowDetails={isShowDetails}
        returnToSearch={handleToggleVisibility}
        movie={movie}
      />
      <Main>
        <SortingContainer />
        <MovieCardList showDetailsHandler={showDetailsHandler} />
      </Main>
      <Footer />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  movies: state.netflix.movies,
});

export default connect(mapStateToProps, null)(App);
