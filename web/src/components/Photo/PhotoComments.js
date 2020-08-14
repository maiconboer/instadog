import React from 'react';

import { UserContext } from '../../contexts/UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';

import { Container } from './styles.PhotoContent';

const PhotoComments = ({photoID, comments}) => {
  const { login } = React.useContext(UserContext);

  return (
    <Container>
      {login && 
        <PhotoCommentsForm photoID={photoID} />
      }
    </Container>
  )
}

export default PhotoComments;
