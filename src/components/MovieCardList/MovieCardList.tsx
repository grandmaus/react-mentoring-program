import React, { FC, useEffect } from 'react';
import { Item } from './styles/Item';
import { List } from './styles/List';
import { fetchMovies } from '../../store/actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MovieCardContainer from '../../containers/MovieCardContainer/MovieCardContainer';
import { Movie } from '../../store/types';

type Props = {
  showDetailsHandler: (e: React.SyntheticEvent) => void;
  searchedMovies: Array<Movie>;
  requestMovies: any;
};

const MovieCardList: FC<Props> = ({ showDetailsHandler, searchedMovies, requestMovies }) => {
  useEffect(() => {
    requestMovies();
  }, []);

  return (
    <List>
      {searchedMovies.map((item: any) => (
        <Item key={item.id}>
          <MovieCardContainer
            id={item.id}
            title={item.title}
            genres={item.genres}
            genre={item.genres[0]}
            year={item.release_date}
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
  searchedMovies: state.netflix.searchedMovies
});

const matchDispatchToProps = (dispatch: any) => ({
  requestMovies: bindActionCreators(fetchMovies, dispatch)
});

export default connect(mapStateToProps, matchDispatchToProps)(MovieCardList);
