export type Movie = {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: Date;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: ReadonlyArray<string>;
  runtime: number;
};

export type State = {
  movies: ReadonlyArray<Movie>;
  searchedMovies: Array<Movie>;
  genre: string;
  sort: string;
};
