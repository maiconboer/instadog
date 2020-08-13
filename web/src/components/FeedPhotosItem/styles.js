import styled from 'styled-components';

import iconEye from '../../assets/icons/visualizacao.svg'

export const Container = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  img {
    grid-area: 1/1;
  }

  span {
    background-color: rgba(0,0,0,.3);
    color: var(--color4);
    font-size: 1rem;
    text-align: center;
    grid-area: 1/1;
    display: none;
    align-items: center;
    justify-content: center;

    &:before {
      width: 16px;
      height: 10px;
      content: '';
      display: inline-block;
      margin-right: .25rem;
      background: url(${iconEye}) no-repeat;
    }
  }

  &:hover span {
      display: flex;
    }

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;

    @media screen and (max-width: 40rem) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;