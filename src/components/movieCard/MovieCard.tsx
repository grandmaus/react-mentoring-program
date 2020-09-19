import React, { FC, memo } from 'react';
import { ImageContainer } from './styles/ImageContainer';
import { Image } from './styles/Image';
import { ActionWrapper } from './styles/ActionWrapper';
import { ActionButton } from './styles/ActionButton';
import { Card } from './styles/Card';
import { ActionList } from './styles/ActionList';
import { ActionLink } from './styles/ActionLink';
import { ActionCloseButton } from './styles/ActionCloseButton';
import { useVisibility } from '../../hooks/useVisibility.hooks';

type Props = {
  title: string;
  image: string;
  genre: string;
  year: string;
  url: string;
  showDetailsHandler: (e: React.SyntheticEvent) => void;
};

const MovieCard: FC<Props> = ({ title, image, genre, year, url, showDetailsHandler }) => {
  const { visibility, handleToggleVisibility } = useVisibility();

  return (
    <Card>
      <ImageContainer href={url} target="_blank" onClick={showDetailsHandler}>
        <Image src={image} alt={title} />
      </ImageContainer>
      <ActionButton onClick={handleToggleVisibility} />
      {visibility && (
        <ActionWrapper>
          <ActionList>
            <li>
              <ActionLink href="#">Edit</ActionLink>
            </li>
            <li>
              <ActionLink href="#">Delete</ActionLink>
            </li>
          </ActionList>
          <ActionCloseButton onClick={handleToggleVisibility} />
        </ActionWrapper>
      )}
      <div>
        <div>
          <h2>{title}</h2>
          <p>{genre}</p>
        </div>
        <span>{year}</span>
      </div>
    </Card>
  );
};

export default memo(MovieCard);
