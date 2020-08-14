import styled from 'styled-components';

import iconLike from '../../assets/icons/like.svg';

export const Container = styled.div`
  margin: auto;
  /* height: 40rem; */
  border-radius: .2rem;
  background-color: var(--color4);
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(.8);
  animation: scaleUp 0.3s forwards;

  @keyframes scaleUp {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  @media screen and (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }

  .image {
    grid-row: 1/4;

    @media screen and (max-width: 64rem) {
      grid-row: 1;
    }
  }

  .details {
    padding: 2rem 2rem 0 2rem;
  }

  .comments {
    padding: 0 2rem;
  }

  .author {
    opacity: 0.5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a:hover {
      text-decoration: underline;
    }
  }

  .likes {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    &:before {
      content: '';
      display: inline-block;
      width: 24px;
      height: 24px;
      margin-bottom: 0.12rem;
      margin-right: 0.3rem;
      background: url(${iconLike});
    }
  }

  .attributes {
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;

    li {

      &:before {
        content: '';
        display: inline-block;
        height: 20px;
        width: 2px;
        top: 3px;
        margin-right: 0.5rem;
        position: relative;
        background-color: var(--color2);
        margin-top: 5px;
      }
    }
  }
`;