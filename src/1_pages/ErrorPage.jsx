import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = () => {
  return (
    <NavContainer className="page-100 section">
      <section className="error-container">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </section>
    </NavContainer>
  );
};
export default ErrorPage;

const NavContainer = styled.main`
  text-align: center;
  margin: 0 2rem;

  .error-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
  }

  h1 {
    font-size: 20rem;
    font-weight: 700;
  }

  h2 {
    margin-top: -2rem;
    font-size: 3.6rem;
    font-weight: 500;
  }

  a {
    margin-top: 17rem;
    font-size: 1.8rem;
    text-decoration: underline;
    text-decoration-color: var(--color-text-red);
    text-decoration-thickness: 0.15rem;
    text-underline-offset: 0.2rem;
  }

  @media only screen and (max-width: 767px) {
    h1 {
      margin-top: 20rem;
    }
    a {
      font-size: 2.8rem;
    }
  }
`;
