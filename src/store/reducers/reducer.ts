import {
  FETCH_FILTERED_MOVIES,
  FETCH_MOVIES,
  FETCH_SORTED_MOVIES,
  FETCH_SEARCHED_MOVIES
} from '../actions/constants';
import { State } from '../types';

export const initialState: State = {
  movies: [],
  searchedMovies: [],
  genre: 'All',
  sort: 'releaseDate'
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload.data,
        searchedMovies: action.payload.data
      };
    case FETCH_SEARCHED_MOVIES:
      return {
        ...state,
        movies: action.payload.data,
        searchedMovies: action.payload.data
      };
    case FETCH_SORTED_MOVIES:
      return {
        ...state,
        movies: action.payload.data,
        searchedMovies: action.payload.data
      };
    case FETCH_FILTERED_MOVIES:
      return {
        ...state,
        movies: action.payload.data,
        searchedMovies: action.payload.data
      };
    default:
      return state;
  }
};
