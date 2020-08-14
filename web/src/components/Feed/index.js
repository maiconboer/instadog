import React from 'react';

import FeedModal from '../FeedModal';
import FeedPhotos from '../FeedPhotos';

import { Container } from './styles';

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <Container>
      {modalPhoto && 
      
      <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />} 
      <FeedPhotos setModalPhoto={setModalPhoto} /> 
    </Container>
  )
}

export default Feed;
