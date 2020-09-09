import React from 'react';
import { Button } from './styles/Button';
import { Item } from './styles/Item';
import { List } from './styles/List';

export const SortingList = () => (
  <List>
    <Item>
      <Button>All</Button>
    </Item>
    <Item>
      <Button>Documentary</Button>
    </Item>
    <Item>
      <Button>Comedy</Button>
    </Item>
    <Item>
      <Button>Horror</Button>
    </Item>
    <Item>
      <Button>Crime</Button>
    </Item>
  </List>
);
