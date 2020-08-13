import React from 'react';

import { Container } from './styles';

const FeedPhotosItem = ({photo}) => {
  return (
    <Container>
      <img src={photo.image_url} alt={photo.description}/>
      <span>Acessar</span>
    </Container>
  )
}

export default FeedPhotosItem;
