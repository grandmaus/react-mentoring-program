import React, { FC, memo, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMovies as fetchMoviesAction } from '../../store/actions/actions';
import SearchForm from '../../components/SearchForm/SearchForm';

type Props = {
  action: string;
  method: string;
  sort: string;
  genre: string;
  fetchMovies: (text: string, sort: string, genre: string) => void;
};

const SearchFormContainer: FC<Props> = ({ action, method, fetchMovies, sort, genre }) => {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const onInputChange = useCallback((e: React.SyntheticEvent) => {
    const { value } = e.target;

    setInputValue(value);
  }, []);

  const onButtonClick = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();

      fetchMovies(inputValue, sort, genre);

      inputValue ? history.push(`/search/Search%20${inputValue}`) : history.push('');
    },
    [fetchMovies, genre, history, inputValue, sort],
  );

  return <SearchForm action={action} method={method} onInputChange={onInputChange} onButtonClick={onButtonClick} />;
};

const mapStateToProps = (state: any) => ({
  movies: state.netflix.movies,
  sort: state.netflix.sortingType,
  genre: state.netflix.genre,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchMovies: bindActionCreators(fetchMoviesAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(SearchFormContainer));
