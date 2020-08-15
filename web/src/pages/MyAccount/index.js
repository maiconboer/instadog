import React from 'react';

import { UserContext } from '../../contexts/UserContext';
import Head from '../../components/Head';
import UserHeader from '../../components/UserHeader';
import Feed from '../../components/Feed';

import { Container } from './styles.js'

const MyAccount = () => {
  const { data } = React.useContext(UserContext);

  return (
    <>
      <Head title='Minha conta' />
      <Container className='container'>
        <UserHeader title={'Minha conta'} />
        <Feed userID={data.id} />  
        
      </Container>
    </>
  )
}

export default MyAccount;
