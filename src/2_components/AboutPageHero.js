import React from 'react';
import styled from 'styled-components';
import photo from '../0_assets/about_hero_image.webp';

const AboutPageHero = () => {
  return (
    <Wrapper>
      <img src={photo} alt="paysage de mer" className="image hero-image" />
    </Wrapper>
  );
};
export default AboutPageHero;

const Wrapper = styled.section`
  height: 22rem;
  width: 100%;
  position: relative;
  margin: 3rem 0;

  @media only screen and (max-width: 767px) {
    height: 44rem;
    .image {
      height: 44rem;
    }
  }
`;
