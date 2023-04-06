import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import data from '../4_data/data_logements.json';
import { SlideShow, Info } from '../2_components/accommodationPage';
import { CollapsibleContainer } from '../2_components';

const AccommodationPage = () => {
  let { id } = useParams();
  const [currentAccommodation, setCurrentAccommodation] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let thisCurrentAccommodation = data.filter((item) => item.id === id);
    setCurrentAccommodation(thisCurrentAccommodation[0]);
    setIsLoading(false);
  }, [id]);

  const {
    cover,
    description,
    equipments,
    // host,
    // location,
    pictures,
    // rating,
    // tags,
    title,
  } = currentAccommodation;

  if (isLoading) {
    return <h1>Données du logement en chargement ;&#41;</h1>;
  }

  return (
    <Wrapper className="page-100 section-center">
      <SlideShow cover={cover} pictures={pictures} title={title} />
      <section>
        <Info {...currentAccommodation} />
      </section>
      <section className="more-info-container">
        <CollapsibleContainer title={'description'} content={description} />
        <CollapsibleContainer title={'équipements'} content={equipments} />
      </section>
    </Wrapper>
  );
};
export default AccommodationPage;

const Wrapper = styled.main`
  section {
  }
  .more-info-container {
    width: 100%;
    margin-top: 2.4rem;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 2.8rem;
  }

  @media only screen and (max-width: 767px) {
    .more-info-container {
      margin-top: 3.2rem;
      flex-direction: column;
    }
  }
`;
