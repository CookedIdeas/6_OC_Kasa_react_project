import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AccommodationCard = ({ picture, title, id }) => {
  return (
    <Wrapper>
      <NavLink to={`logement/${id}`}>
        <div className="image-overlay">
          <p className="accommodation-card__text">{title}</p>
        </div>
        <img
          src={picture}
          alt={title}
          className="image accommodation-card__image"
        />

        {/* <div className="accommodation-card__textContainer"></div> */}
      </NavLink>
    </Wrapper>
  );
};
export default AccommodationCard;

const Wrapper = styled.article`
  aspect-ratio: 1;
  position: relative;

  .accommodation-card__image {
    /* filter: brightness(85%); */
    border-radius: var(--radius-small);
    height: 100%;
    z-index: 1;
  }

  .image-overlay {
    border-radius: var(--radius-small);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /* background-color: red; */
    z-index: 2;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    transition: var(--transition);
  }
  .image-overlay:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }

  .accommodation-card__textContainer {
    position: absolute;
    /* background-color: black; */
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding: 2rem;
  }

  .accommodation-card__text {
    font-size: 1.8rem;
    font-weight: 500;
    position: absolute;
    color: white;
    bottom: 2rem;
    left: 2rem;
    width: 80%;
  }

  @media only screen and (max-width: 767px) {
    .accommodation-card__text {
      font-size: 3.6rem;
    }
  }
`;
