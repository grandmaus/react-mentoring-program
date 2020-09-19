import React, { FC } from 'react';
import movies from '../movies';
import MovieCard from '../movieCard/MovieCard';
import { Item } from './styles/Item';
import { List } from './styles/List';

type Props = {
  showDetailsHandler: (e: React.SyntheticEvent) => void;
};

export const MovieCardList: FC<Props> = ({ showDetailsHandler }) => (
  <List>
    {movies.map(item => (
      <Item key={item.id}>
        <MovieCard
          title={item.title}
          genre={item.genres[0]}
          year={item.release_date}
          image={item.poster_path}
          url={item.poster_path}
          showDetailsHandler={showDetailsHandler}
        />
      </Item>
    ))}
  </List>
);
