import React from 'react';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import useMedia from '../../hooks/useMedia';

import { ReactComponent as MinhasFotos } from '../../assets/icons/feed.svg';
import { ReactComponent as Estatisticas } from '../../assets/icons/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../assets/icons/adicionar.svg';
import { ReactComponent as Sair } from '../../assets/icons/sair.svg';

import { Container, ContainerMobile, MenuButton } from './styles';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const mobile = useMedia('(max-width: 40rem)');

  function showContent() {
    return (
      <>
        <NavLink to='/my-account' activeClassName={Container.active}>
          <MinhasFotos />
          { mobile && 'Minhas conta' }
        </NavLink>

      <NavLink to='/user/statistics' activeClassName={Container.active}>
        <Estatisticas />
        { mobile && 'Estatísticas' }
      </NavLink>

      <NavLink to='/user/post-photo' activeClassName={Container.active}>
        <AdicionarFoto />
        { mobile && 'Adicionar Foto' }
      </NavLink>

      <button onClick={userLogout} >
        <Sair />
        { mobile && 'Sair' }
      </button>
      </>
    )
  }

  return (
    <>
      {mobile && 
        <MenuButton 
          aria-label='Menu' 
          onClick={() => setMobileMenu(!mobileMenu)}
          className={mobileMenu && 'mobileButtonActive'}> 
        </MenuButton>
      }
      
      {!mobile && 
        <Container>{showContent()}</Container>
      }

      {mobileMenu && 
        <ContainerMobile className='container-mobile'>
          {showContent()}
        </ContainerMobile>
      }
    </>
  )
}

export default UserHeaderNav;
