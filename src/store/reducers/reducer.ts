import { FETCH_MOVIES, SET_FILTER_GENRE, SET_SEARCHED_MOVIES, SET_SORT_TYPE } from '../actions/constants';
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
    case SET_FILTER_GENRE:
      return {
        ...state,
        genre: action.payload
      };

    case SET_SORT_TYPE:
      return {
        ...state,
        sort: action.payload
      };
    case SET_SEARCHED_MOVIES:
      return {
        ...state,
        searchedMovies: action.payload
      };
    default:
      return state;
  }
};
