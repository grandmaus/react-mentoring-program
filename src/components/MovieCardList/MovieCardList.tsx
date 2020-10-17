import React, { FC, memo } from 'react';
import { connect } from 'react-redux';
import { Item } from './styles/Item';
import { List } from './styles/List';
import MovieCardContainer from '../../containers/MovieCardContainer/MovieCardContainer';
import { Movie } from '../../store/types';
import { NotMovieFound } from '../NoMovieFound/NoMovieFound';

type Props = {
  showDetailsHandler: (e: React.SyntheticEvent) => void;
  searchedMovies: ReadonlyArray<Movie>;
};

const MovieCardList: FC<Props> = ({ showDetailsHandler, searchedMovies }) => {
  if (searchedMovies.length === 0) {
    return <NotMovieFound />;
  }

  return (
    <List>
      {searchedMovies.map((item: Movie) => (
        <Item key={item.id}>
          <MovieCardContainer
            id={item.id}
            title={item.title}
            genres={item.genres}
            genre={item.genres[0]}
            year={item.release_date.toString()}
            image={item.poster_path}
            url={item.poster_path}
            overview={item.overview}
            runtime={item.runtime}
            showDetailsHandler={showDetailsHandler}
          />
        </Item>
      ))}
    </List>
  );
};

const mapStateToProps = (state: any) => ({
  searchedMovies: state.netflix.searchedMovies,
});

export default connect(mapStateToProps, null)(memo(MovieCardList));
