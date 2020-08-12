import React from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';

import { Container, Navigation } from './styles';

import {ReactComponent as DogIcon} from '../../assets/icons/dogs.svg';
 
const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <Container>
      <Navigation className='container'>

        <Link to='/' aria-label='Dogs - Home' className='logo' >
          <DogIcon />
        </Link>

        {data 
          ? 
          <> 
            <Link to='/my-account' className='login'>{data.username}</Link>
          </>
          : <Link to='/login' className='login'>Login / Sign Up</Link>
        }
        
      </Navigation>
    </Container>
  )
}

export default Header;
