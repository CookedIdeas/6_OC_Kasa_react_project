import React from 'react';
import styled from 'styled-components';
import data from '../../4_data/data_logements.json';
import { AccommodationCard } from '.';

const AccommodationContainer = () => {
  const accommodations = data;

  return (
    <Wrapper>
      {accommodations.map((accommodation) => {
        const { id, pictures, title } = accommodation;
        return (
          <AccommodationCard
            key={id}
            picture={pictures[0]}
            title={title}
            id={id}
          />
        );
      })}
    </Wrapper>
  );
};
export default AccommodationContainer;

const Wrapper = styled.section`
  background-color: var(--color-bcg-grey);
  padding: 5rem;
  border-radius: var(--radius-big);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: calc((100vw - 5rem) / 20);

  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    background-color: white;
    padding: 0rem;
  }
`;
