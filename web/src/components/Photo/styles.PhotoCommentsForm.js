import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;

  textarea {
    display: block;
    width: 100%;
    font-size: 1rem;
    font-family: var(--font-first);
    resize: none;
    border: 1px solid var(--color5);
    background-color: var(--color5);
    padding: .5rem;
    border-radius: .2rem;
    transition: 0.2s;

    &:focus,
    &:hover {
      outline: none;
      border-color: var(--color1);
      background-color: var(--color4);
      box-shadow: 0 0 0 3px #fea;
    }
  }

  button {
    border: none;
    color: var(--color2);
    background: transparent;
    font-size: 1rem;
    padding: 0 1rem;
    overflow: hidden;

    &:focus,
    &:hover {
      outline: none;
    }

    &:focus svg path,
    &:hover svg path {
      fill: #fea;
      stroke: var(--color1);
    }

    &:focus svg g,
    &:hover svg g {
      animation: latir .6s infinite;
    }
  }

  @keyframes latir {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }  
`;