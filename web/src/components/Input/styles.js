import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1rem;
  
  label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0.5rem;
  }

  input {
    border: 1px solid var(--color5);
    background-color: var(--color5);
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    transition: all 0.2s;

    &:focus,
    &:hover {
      outline: none;
      border-color: var(--color1);
      background-color: var(--color4);
      box-shadow: 0 0 0 3px #ffeeaa, 
                  0 0 0 4px var(--color4);
    }
  }

  p {
    color: var(--color6);
    font-size: .875rem;
    margin-top: .25rem;
  }
`;
