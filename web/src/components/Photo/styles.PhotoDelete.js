import styled from 'styled-components';

export const Container = styled.div`
  button {
    background-color: #ddd;
    padding: .3rem .6rem;
    line-height: 1;
    border: 1px solid transparent;
    font-size: .875rem;
    font-family: var(--font-first);
    border-radius: .4rem;
    transition: .1s;

    &:focus,
    &:hover {
      outline: none;
      background-color: var(--color4);
      box-shadow: 0 0 0 3px var(--color5);
      border-color: var(--color2);
    }
  }
`;