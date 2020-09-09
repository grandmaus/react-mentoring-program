import React, { FC } from 'react';
import { ImageContainer } from './styles/ImageContainer';
import { Image } from './styles/Image';
import { ActionWrapper } from './styles/ActionWrapper';
import { ActionButton } from './styles/ActionButton';
import { Card } from './styles/Card';
import { ActionList } from './styles/ActionList';
import { ActionLink } from './styles/ActionLink';
import { ActionCloseButton } from './styles/ActionCloseButton';

type Props = {
  title: string;
  image: string;
  genre: string;
  year: string;
  url: string;
};

export const MovieCard: FC<Props> = ({ title, image, genre, year, url }) => (
  <Card>
    <ImageContainer href={url} target="_blank">
      <Image src={image} alt={title} />
    </ImageContainer>
    <ActionButton />
    <ActionWrapper>
      <ActionList>
        <li>
          <ActionLink href="#">Edit</ActionLink>
        </li>
        <li>
          <ActionLink href="#">Delete</ActionLink>
        </li>
      </ActionList>
      <ActionCloseButton />
    </ActionWrapper>
    <div>
      <div>
        <h2>{title}</h2>
        <p>{genre}</p>
      </div>
      <span>{year}</span>
    </div>
  </Card>
);
