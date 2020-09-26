import React, { FC } from 'react';
import { Button } from './styles/Button';
import { Item } from './styles/Item';
import { List } from './styles/List';

type Props = {
  onFilterClick: (e: React.SyntheticEvent) => void;
};

export const SortingList: FC<Props> = ({ onFilterClick }) => (
  <List onClick={onFilterClick}>
    <Item>
      <Button>All</Button>
    </Item>
    <Item>
      <Button>Drama</Button>
    </Item>
    <Item>
      <Button>Romance</Button>
    </Item>
    <Item>
      <Button>Fantasy</Button>
    </Item>
    <Item>
      <Button>Adventure</Button>
    </Item>
  </List>
);
