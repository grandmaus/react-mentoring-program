import React, { FC } from 'react';
import { Sorting } from '../../components/Sorting/Sorting';
import { connect } from 'react-redux';
import { setFilterGenre, setSearchedMovies, setSortType } from '../../store/actions/actions';
import { bindActionCreators } from 'redux';
import { Movie } from '../../store/types';

type Props = {
  movies: ReadonlyArray<Movie>;
  searchedMovies: Array<Movie>;
  setFilterGenre: any;
  setSortType: any;
  setSearchedMovies: any;
};

const SortingContainer: FC<Props> = ({ movies, setFilterGenre, setSortType, setSearchedMovies, searchedMovies }) => {
  const filterByGenre = (e: React.SyntheticEvent) => {
    const target = e.target.closest('li');
    const genre = e.target.textContent;

    if (target) {
      setFilterGenre(genre);

      const filteredMovies = movies.filter((item, index, array) => {
        return genre === 'All' ? array : item.genres.includes(genre);
      });

      setSearchedMovies(filteredMovies);
    }
  };

  const sortingByType = (e: React.SyntheticEvent) => {
    const type = e.target.value;
    setSortType(type);

    const sortedMovies = searchedMovies.slice().sort((a, b) => {
      if (type === 'releaseDate') {
        if (a.release_date.toString().substr(0, 4) < b.release_date.toString().substr(0, 4)) {
          return -1;
        }
        if (a.release_date.toString().substr(0, 4) > b.release_date.toString().substr(0, 4)) {
          return 1;
        }
        return 0;
      }
      if (type === 'genre') {
        return a.genres[0] < b.genres[0] ? -1 : 1;
      }
      if (type === 'rating') {
        return a.vote_average - b.vote_average;
      }
    });

    setSearchedMovies(sortedMovies);
  };

  return <Sorting amount={searchedMovies.length} onFilterClick={filterByGenre} onSortingChange={sortingByType} />;
};

const mapStateToProps = (state: any) => ({
  movies: state.netflix.movies,
  searchedMovies: state.netflix.searchedMovies
});

const matchDispatchToProps = (dispatch: any) => ({
  setFilterGenre: bindActionCreators(setFilterGenre, dispatch),
  setSortType: bindActionCreators(setSortType, dispatch),
  setSearchedMovies: bindActionCreators(setSearchedMovies, dispatch)
});

export default connect(mapStateToProps, matchDispatchToProps)(SortingContainer);
