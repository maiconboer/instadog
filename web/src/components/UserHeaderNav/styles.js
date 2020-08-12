import styled from 'styled-components';

export const Container = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    background-color: var(--color5);
    border-radius: .2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: var(--color4);
      box-shadow: 0 0 0 3px var(--color5);
      border-color: var(--color2);
      outline: none;
    }
  }

  .active {
    background-color: var(--color4);
    box-shadow: 0 0 0 3px #fea;
    border-color: var(--color1);

    svg > * {
      fill: var(--color1);
    }
  }
  
  
`;

export const MenuButton = styled.button`
  background-color: var(--color5);
  border-radius: .2rem;
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    width: 1.2rem;
    height: 2px;
    background-color: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: .2s;
  }

  &:focus,
  &:hover,
  .mobileButtonActive {
    outline: none;
    background-color: var(--color4);
    box-shadow: 0 0 0 3px #fea;
    border-color: var(--color1);
    color: var(--color1);
     
      &.mobileButtonActive::after {
        transform: rotate(-90deg);
        width: 4px;
        height: 4px;
        box-shadow: 0 8px currentColor, 0 -8px currentColor;
    }
  } 

  .navMobile {
    color: red;
    background-color: red;
  }
`;

export const ContainerMobile = styled.nav`
  display: block;
  position: absolute;
  top: 70px;
  right: 0px;
  padding: 0 1rem;
  background-color: var(--color4);
  box-shadow: 0 1px 2px rgba(0,0,0,.2);
  border-radius: .2rem;
  transform: translateX(-10px);
  opacity: 1;
  
  a,
  button {
    display: flex;
    align-items: center;
    background: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid var(--color5);
    padding: 0.5rem 0;
    cursor: pointer;

    &:hover svg > * {
      fill: var(--color1);
    }
  }

  button {
    border-bottom: none;
  }

  svg {
    margin-right: 0.5rem;
  }
`;