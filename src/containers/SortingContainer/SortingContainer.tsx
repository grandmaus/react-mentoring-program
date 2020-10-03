import React, { FC, useCallback, memo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sorting from '../../components/Sorting/Sorting';
import {
  fetchFilteredMovies as fetchFilteredMoviesAction,
  fetchSortedMovies as fetchSortedMoviesAction,
} from '../../store/actions/actions';
import { Movie } from '../../store/types';

type Props = {
  searchedMovies: ReadonlyArray<Movie>;
  fetchFilteredMovies: (genre: string) => void;
  fetchSortedMovies: (type: string) => void;
};

const SortingContainer: FC<Props> = ({ fetchFilteredMovies, searchedMovies, fetchSortedMovies }) => {
  const filterByGenre = useCallback((e: React.SyntheticEvent) => {
    const target = e.target.closest('li');
    const genre = e.target.textContent === 'All' ? '' : e.target.textContent;

    if (target) {
      fetchFilteredMovies(genre);
    }
  }, [fetchFilteredMovies]);

  const sortingByType = useCallback((e: React.SyntheticEvent) => {
    const type = e.target.value;

    fetchSortedMovies(type);
  }, [fetchSortedMovies]);

  return <Sorting amount={searchedMovies.length} onFilterClick={filterByGenre} onSortingChange={sortingByType} />;
};

const mapStateToProps = (state: any) => ({
  searchedMovies: state.netflix.searchedMovies
});

const matchDispatchToProps = (dispatch: any) => ({
  fetchSortedMovies: bindActionCreators(fetchSortedMoviesAction, dispatch),
  fetchFilteredMovies: bindActionCreators(fetchFilteredMoviesAction, dispatch),
});

export default connect(mapStateToProps, matchDispatchToProps)(memo(SortingContainer));
