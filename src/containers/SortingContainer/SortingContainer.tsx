import React, { FC, memo, useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sorting from '../../components/Sorting/Sorting';
import { fetchMovies as fetchMoviesAction } from '../../store/actions/actions';
import { Movie } from '../../store/types';

type Props = {
  searchedMovies: ReadonlyArray<Movie>;
  fetchMovies: (text: string, sort: string, genre: string) => void;
  sort: string;
  genre: string;
  searchText: string;
};

const SortingContainer: FC<Props> = ({ searchedMovies, fetchMovies, sort, genre, searchText }) => {
  const filterByGenre = useCallback(
    (e: React.SyntheticEvent) => {
      const target = e.target.closest('li');
      const currentGenre = e.target.textContent === 'All' ? '' : e.target.textContent;
      if (target) {
        fetchMovies(searchText, sort, currentGenre);
      }
    },
    [fetchMovies, searchText, sort],
  );

  const sortingByType = useCallback(
    (e: React.SyntheticEvent) => {
      const type = e.target.value;
      fetchMovies(searchText, type, genre);
    },
    [fetchMovies, genre, searchText],
  );

  return <Sorting amount={searchedMovies.length} onFilterClick={filterByGenre} onSortingChange={sortingByType} />;
};

const mapStateToProps = (state: any) => ({
  searchedMovies: state.netflix.searchedMovies,
  sort: state.netflix.sortingType,
  genre: state.netflix.genre,
  searchText: state.netflix.searchText,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchMovies: bindActionCreators(fetchMoviesAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(SortingContainer));
