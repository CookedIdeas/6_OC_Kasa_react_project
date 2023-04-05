import React from 'react';
import styled from 'styled-components';
import photo from '../../0_assets/home_hero_image.webp';

const HomePageHero = () => {
  const heroText = 'Chez vous, partout et ailleurs';
  return (
    <Wrapper>
      <img src={photo} alt="paysage de mer" className="image hero-image" />
      <h1 className="text">{heroText}</h1>
    </Wrapper>
  );
};
export default HomePageHero;

const Wrapper = styled.section`
  height: 22rem;
  width: 100%;
  position: relative;
  text-align: center;
  margin: 4rem 0;

  h1 {
    color: white;
    position: absolute;
    font-size: 4.8rem;
    font-weight: 500;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 767px) {
    text-align: start;
  }
`;
