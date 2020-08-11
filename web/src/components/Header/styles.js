import styled from 'styled-components';

import userImg from '../../assets/icons/usuario.svg';

export const Container = styled.header`
  box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: var(--color4);
  top: 0px;
`;

export const Navigation = styled.nav`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  .logo {
    padding: 0.5rem 0;
  }

  .login {
    color: var(--color2);
    display: flex;
    align-items: center;

    ::after {
      content: '';
      display: inline-block;
      width: 14px;
      height: 17px;
      background: url(${userImg}) no-repeat center center;
      margin-left: 0.5rem;
      top: -1px;
    }
  }

`;