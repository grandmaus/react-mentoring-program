import {
  ADD_MOVIE,
  EDIT_MOVIE,
  FETCH_MOVIES,
  SET_FILTER_GENRE,
  SET_SEARCH_TEXT,
  SET_SORTING_TYPE,
} from '../actions/constants';
import { State } from '../types';
import { addNewMovie, mappingEditedMovie } from '../helpers';

export const initialState: State = {
  movies: [],
  searchedMovies: [],
  genre: '',
  sortingType: 'release_date',
  searchText: '',
};

export const reducer = (
  state = initialState,
  { type, movies, searchText, sortingType, genre, editedMovies, addedMovie }: any,
) => {
  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: movies.data,
        searchedMovies: movies.data,
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: mappingEditedMovie(state.movies, editedMovies),
        searchedMovies: mappingEditedMovie(state.movies, editedMovies),
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: addNewMovie(state.movies, addedMovie),
        searchedMovies: addNewMovie(state.movies, addedMovie),
      };
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText,
      };
    case SET_SORTING_TYPE:
      return {
        ...state,
        sortingType,
      };
    case SET_FILTER_GENRE:
      return {
        ...state,
        genre,
      };
    default:
      return state;
  }
};
