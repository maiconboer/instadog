import React from 'react';

import Head from '../../components/Head';
import UserHeader from '../../components/UserHeader';

import { Container } from './styles.js';

const Statistics = () => {
  return (
    <>
      <Head title='Estatísticas' />
      <Container className='container'>
        <UserHeader title={'Estatisticas'} />
        
      </Container>
    </>
  )
}

export default Statistics;
