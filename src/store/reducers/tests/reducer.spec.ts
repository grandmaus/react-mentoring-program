import { initialState, reducer } from '../reducer';
import {
  ADD_MOVIE,
  EDIT_MOVIE,
  FETCH_MOVIES,
  SET_FILTER_GENRE,
  SET_SEARCH_TEXT,
  SET_SORTING_TYPE,
} from '../../actions/constants';

const mockMovies = {
  data: [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
  ],
};

const mockState = {
  ...initialState,
  movies: mockMovies.data,
  searchedMovies: mockMovies.data,
};

describe('Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_MOVIES action', () => {
    expect(reducer(initialState, { type: FETCH_MOVIES, movies: mockMovies })).toEqual({
      movies: mockMovies.data,
      searchedMovies: mockMovies.data,
      genre: '',
      sortingType: 'release_date',
      searchText: '',
    });
  });

  it('should handle EDIT_MOVIE action and return the old state, when the movie has not been edited', () => {
    expect(reducer(mockState as any, { type: EDIT_MOVIE, editedMovies: mockMovies })).toEqual({
      movies: mockMovies.data,
      searchedMovies: mockMovies.data,
      genre: '',
      sortingType: 'release_date',
      searchText: '',
    });
  });

  it('should handle EDIT_MOVIE action and replace the edited movie', () => {
    expect(reducer(mockState as any, { type: EDIT_MOVIE, editedMovies: { id: 1, title: 'Movie 3' } })).toEqual({
      movies: [
        { id: 1, title: 'Movie 3' },
        { id: 2, title: 'Movie 2' },
      ],
      searchedMovies: [
        { id: 1, title: 'Movie 3' },
        { id: 2, title: 'Movie 2' },
      ],
      genre: '',
      sortingType: 'release_date',
      searchText: '',
    });
  });

  it('should handle ADD_MOVIE action', () => {
    expect(reducer(mockState as any, { type: ADD_MOVIE, addedMovie: { id: 3, title: 'Movie 3' } })).toEqual({
      movies: mockMovies.data.concat({ id: 3, title: 'Movie 3' }),
      searchedMovies: mockMovies.data.concat({ id: 3, title: 'Movie 3' }),
      genre: '',
      sortingType: 'release_date',
      searchText: '',
    });
  });

  it('should handle SET_SEARCH_TEXT action', () => {
    expect(reducer(initialState, { type: SET_SEARCH_TEXT, searchText: 'Star wars' })).toEqual({
      movies: [],
      searchedMovies: [],
      genre: '',
      sortingType: 'release_date',
      searchText: 'Star wars',
    });
  });

  it('should handle SET_FILTER_GENRE action', () => {
    expect(reducer(initialState, { type: SET_FILTER_GENRE, genre: 'Action' })).toEqual({
      movies: [],
      searchedMovies: [],
      genre: 'Action',
      sortingType: 'release_date',
      searchText: '',
    });
  });

  it('should handle SET_SORTING_TYPE action', () => {
    expect(reducer(initialState, { type: SET_SORTING_TYPE, sortingType: 'vote_average' })).toEqual({
      movies: [],
      searchedMovies: [],
      genre: '',
      sortingType: 'vote_average',
      searchText: '',
    });
  });
});
