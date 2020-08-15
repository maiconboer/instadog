import React from 'react';

import Head from '../../components/Head';
import Feed from '../../components/Feed';

import { Container } from './styles';

const Home = () => {
  return (
    <Container className='container mainContainer'> 
      <Head title='Home' />
      <Feed userID={undefined}/>  
    </Container>
  )
}

export default Home;
