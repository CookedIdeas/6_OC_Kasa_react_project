import React from 'react';
import styled from 'styled-components';
import { HomePageHero, AccommodationContainer } from '../2_components/homePage';

const HomePage = () => {
  return (
    <Wrapper className="page-100 section-center">
      <HomePageHero />
      <AccommodationContainer />
    </Wrapper>
  );
};
export default HomePage;

const Wrapper = styled.main``;
