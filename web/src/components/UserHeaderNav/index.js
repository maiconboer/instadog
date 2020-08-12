import React from 'react';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';

import { ReactComponent as MinhasFotos } from '../../assets/icons/feed.svg';
import { ReactComponent as Estatisticas } from '../../assets/icons/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../assets/icons/adicionar.svg';
import { ReactComponent as Sair } from '../../assets/icons/sair.svg';

import { Container } from './styles';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);

  const { userLogout } = React.useContext(UserContext);

  return (
    <Container>
      <NavLink to='/my-account' activeClassName={Container.active}>
        <MinhasFotos />
        { mobile && 'Minhas fotos' }
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
    </Container>
  )
}

export default UserHeaderNav;
