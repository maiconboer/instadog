import React from 'react';

import UserHeader from '../../components/UserHeader';

import { Container } from './styles.js'

const MyAccount = () => {
  return (
    <Container className='container'>
      <UserHeader title={'Minha conta'} />
      
      
    </Container>
  )
}

export default MyAccount;
