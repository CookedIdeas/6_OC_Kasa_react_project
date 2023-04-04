import React from 'react';
import styled from 'styled-components';
import { AboutPageHero } from '../2_components';

const AboutPage = () => {
  return (
    <Wrapper className="page-100 section-center">
      <AboutPageHero />
    </Wrapper>
  );
};
export default AboutPage;

const Wrapper = styled.main``;
