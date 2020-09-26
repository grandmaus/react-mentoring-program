import { SearchForm } from '../../components/SearchForm/SearchForm';
import React, { FC, useState } from 'react';
import { setSearchedMovies } from '../../store/actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Movie } from '../../store/types';

type Props = {
  action: string;
  method: string;
  movies: ReadonlyArray<Movie>;
  setSearchedMovies: any;
};

const SearchFormContainer: FC<Props> = ({ action, method, movies, setSearchedMovies }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e: React.SyntheticEvent) => {
    const { value } = e.target;

    setInputValue(value);
  };

  const onButtonClick = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const searchResult = movies.filter(item => {
      if (!inputValue) {
        return item;
      }

      return ~item.title.toLowerCase().indexOf(inputValue.toLowerCase());
    });

    setSearchedMovies(searchResult);
  };

  return <SearchForm action={action} method={method} onInputChange={onInputChange} onButtonClick={onButtonClick} />;
};

const mapStateToProps = (state: any) => ({
  movies: state.netflix.movies
});

const matchDispatchToProps = (dispatch: any) => ({
  setSearchedMovies: bindActionCreators(setSearchedMovies, dispatch)
});

export default connect(mapStateToProps, matchDispatchToProps)(SearchFormContainer);
