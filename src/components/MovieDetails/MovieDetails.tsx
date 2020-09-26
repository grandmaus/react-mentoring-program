import React, { FC, memo } from 'react';
import { Card } from './styles/Card';
import { ImageContainer } from './styles/ImageContainer';
import { Image } from './styles/Image';
import netflix from '@public/image/netflix.jpg';

type Props = {
  title?: string;
  image?: string;
  year: Date;
  overview?: string;
  rating: number;
  runtime: number;
  tagline: string;
};

const MovieDetails: FC<Props> = ({ title, image, year, overview, rating, runtime, tagline }) => {
  return (
    <Card>
      <ImageContainer>
        <Image onError={e => (e.target.src = netflix)} src={image} alt={tagline} />
      </ImageContainer>
      <div>
        <div>
          <h1>{title}</h1>
          <p>{rating}</p>
        </div>
        <p>{tagline}</p>
        <div>
          <span>{year} </span>
          <span>{runtime} min</span>
        </div>
        <p>{overview}</p>
      </div>
    </Card>
  );
};

export default memo(MovieDetails);
