import React, { FC, useCallback, useState, memo } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSearchedMovies as fetchSearchedMoviesAction, } from '../../store/actions/actions';
import SearchForm from '../../components/SearchForm/SearchForm';

type Props = {
  action: string;
  method: string;
  fetchSearchedMovies: (text: string) => void;
};

const SearchFormContainer: FC<Props> = ({ action, method, fetchSearchedMovies }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = useCallback((e: React.SyntheticEvent) => {
    const { value } = e.target;

    setInputValue(value);
  }, []);

  const onButtonClick = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();

      fetchSearchedMovies(inputValue);
    },
    [fetchSearchedMovies, inputValue]
  );

  return <SearchForm action={action} method={method} onInputChange={onInputChange} onButtonClick={onButtonClick} />;
};

const mapStateToProps = (state: any) => ({
  movies: state.netflix.movies
});

const matchDispatchToProps = (dispatch: any) => ({
  fetchSearchedMovies: bindActionCreators(fetchSearchedMoviesAction, dispatch)
});

export default connect(mapStateToProps, matchDispatchToProps)(memo(SearchFormContainer));
