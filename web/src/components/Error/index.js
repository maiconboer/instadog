import React from 'react';

import { Container } from './styles';

const Error = ({ error }) => {
  
  if(!error) return null;

  return (
    <Container>
      {error}
    </Container>
  )
}

export default Error;
