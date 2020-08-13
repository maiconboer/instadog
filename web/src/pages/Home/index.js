import React from 'react';

import Feed from '../../components/Feed';

import { Container } from './styles';

const Home = () => {
  return (
    <Container className='container mainContainer'> 
      <Feed />  
    </Container>
  )
}

export default Home;
