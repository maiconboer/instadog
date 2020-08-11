import styled from 'styled-components';

import bgImg from '../../assets/images/login.jpg';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  @media screen and (max-width: 40rem) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  
  ::before {
    display: block;
    content: '';
    background: url(${bgImg}) no-repeat center center;
    background-size: cover;

    @media screen and (max-width: 40rem) {
      display: none;
    }
  }

  form {
    margin-bottom: 2rem;
    max-width: 30rem;
    padding-right: 2rem;

    @media screen and (max-width: 40rem) {
      max-width: 100%;
      margin: 0 auto;
      padding-right: 0rem;
    }
  }

  .lost-password {
    display: inline-block;
    color: #666;
    padding: 0.5rem 0;
    line-height: 1;

    &:after {
      content: '';
      height: 2px;
      width: 100%;
      background-color: currentColor;
      display: block;
    }
  }

  .create-account {
    margin-top: 4rem;

    p {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }

  h2 {
    font-family: var(--font-second);
    line-height: 1;
    font-size: 2rem;

    &:after {
      content: '';
      display: block;
      background-color: #ddd;
      height: .5rem;
      width: 3rem;
      border-radius: .2rem;
    }
  }
`;
