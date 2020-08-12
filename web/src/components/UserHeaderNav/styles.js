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