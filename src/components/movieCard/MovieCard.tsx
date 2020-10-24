import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import netflix from '../../../public/image/netflix.jpg';
import { ImageContainer } from './styles/ImageContainer';
import { Image } from './styles/Image';
import { ActionWrapper } from './styles/ActionWrapper';
import { ActionButton } from './styles/ActionButton';
import { Card } from './styles/Card';
import { ActionList } from './styles/ActionList';
import { ActionLink } from './styles/ActionLink';
import { ActionCloseButton } from './styles/ActionCloseButton';
import { useVisibility } from '../../hooks/useVisibility.hooks';
import { useErrorImage } from '../../hooks/useErrorImage.hooks';

type Props = {
  id: number;
  title: string;
  image: string;
  genre: string;
  year: string;
  url: string;
  showDetailsHandler: (e: React.SyntheticEvent) => void;
  onDeleteClick: (e: React.SyntheticEvent) => void;
  onEditClick: (e: React.SyntheticEvent) => void;
};

const MovieCard: FC<Props> = ({
  id,
  title,
  image,
  genre,
  year,
  url,
  showDetailsHandler,
  onDeleteClick,
  onEditClick,
}) => {
  const { visibility, handleToggleVisibility } = useVisibility();
  const { errorImage, handleErrorImage } = useErrorImage();

  return (
    <Card id={`${id}`}>
      <ImageContainer to={`/film/${id}/`} onClick={showDetailsHandler}>
        <Image onError={() => handleErrorImage()} src={errorImage ? netflix : image} alt={title} />
      </ImageContainer>
      <ActionButton onClick={handleToggleVisibility} />
      {visibility && (
        <ActionWrapper>
          <ActionList>
            <li>
              <ActionLink onClick={onEditClick} href="#">
                Edit
              </ActionLink>
            </li>
            <li>
              <ActionLink onClick={onDeleteClick} href="#">
                Delete
              </ActionLink>
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
