import React from 'react';

import UserHeaderNav from '../UserHeaderNav';

import { Container } from './styles';

const UserHeader = ({ title }) => {

  return (
    <Container>
      <h1 className='title'>{title}</h1>

      <UserHeaderNav />
    </Container>
  )
}

export default UserHeader;
