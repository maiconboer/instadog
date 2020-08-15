import React from 'react';

import { ReactComponent as DogsIcon } from '../../assets/icons/dogs-footer.svg';
import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      <DogsIcon />
      <p>Dogs. Alguns direitos reservados.</p>
    </Container>
  )
}

export default Footer;
