import React from 'react';
import styled from 'styled-components';
import { AboutPageHero, CollapsibleContainer } from '../2_components';
import { aboutPageContents } from '../4_data/aboutPageContent';

const AboutPage = () => {
  return (
    <Wrapper className="page-100 section-center">
      <AboutPageHero />
      <section className="collapsible-contents-container">
        {aboutPageContents.map((item) => {
          const { id, title, content } = item;
          return (
            <CollapsibleContainer key={id} title={title} content={content} />
          );
        })}
      </section>
    </Wrapper>
  );
};
export default AboutPage;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  .collapsible-contents-container {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  @media only screen and (max-width: 767px) {
    .collapsible-contents-container {
      width: 100%;
    }
  }
`;
