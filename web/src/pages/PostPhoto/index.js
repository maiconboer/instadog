import React from 'react';

import UserHeader from '../../components/UserHeader';

import { Container } from './styles.js';

const PostPhoto = () => {
  return (
    <Container className='container'>
      <UserHeader title={'Postar foto'} />
      Postar Foto
      
    </Container>
  )
}

export default PostPhoto;
