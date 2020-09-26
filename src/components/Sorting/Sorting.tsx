import React, { FC } from 'react';
import { SortingList } from '../SortingList/SortingList';
import { DirectionTitle } from './styles/DirectionTitle';
import { Select } from './styles/Select';
import { ListWrapper } from './styles/ListWrapper';
import { Direction } from './styles/Direction';
import { Result } from './styles/Result';
import { SortingWrapper } from './styles/SortingWrapper';

type Props = {
  amount: number;
  onFilterClick: (e: React.SyntheticEvent) => void;
  onSortingChange: (e: React.SyntheticEvent) => void;
};

export const Sorting: FC<Props> = ({ amount, onFilterClick, onSortingChange }) => (
  <SortingWrapper>
    <ListWrapper>
      <SortingList onFilterClick={onFilterClick} />
      <Direction>
        <DirectionTitle>Sort by</DirectionTitle>
        <Select onChange={onSortingChange}>
          <option value="releaseDate">Release date</option>
          <option value="genre">Genre</option>
          <option value="rating">Rating</option>
        </Select>
      </Direction>
    </ListWrapper>
    <Result>{amount} movies found</Result>
  </SortingWrapper>
);
