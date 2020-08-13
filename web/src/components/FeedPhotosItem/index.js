import React from 'react';

import { Container } from './styles';

const FeedPhotosItem = ({photo, setModalPhoto}) => {

  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <Container onClick={handleClick}>
      <img src={photo.image_url} alt={photo.description}/>
      <span>Acessar</span>
    </Container>
  )
}

export default FeedPhotosItem;
