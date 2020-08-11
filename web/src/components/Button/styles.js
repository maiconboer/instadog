import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 0.4rem;
  border: none;
  background-color: var(--color1);
  color: var(--color3);
  padding: 0.8rem 1.2rem;
  min-width: 8rem;
  transition: all 0.1s;

  &:hover, 
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #ffeeaa,
                0 0 0 4px var(--color1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
