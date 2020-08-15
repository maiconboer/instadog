import React from 'react';
import { useParams } from 'react-router-dom';

import Head from '../../components/Head';
import Feed from '../../components/Feed';

import { Container } from './styles.js';

const UserProfile = () => {
  const { id, user } = useParams();

  return (
    <>
      <Head title='Perfil de usuário' />
      <Container className='container'>
        <h1 className='title'>{user}</h1>
        <Feed userID={id} />
      </Container>
    </>
  )
}

export default UserProfile;
