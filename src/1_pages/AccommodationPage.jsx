import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import data from '../4_data/data_logements.json';
import { SlideShow } from '../2_components/accommodationPage';

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
    host,
    location,
    pictures,
    rating,
    tags,
    title,
  } = currentAccommodation;

  if (isLoading) {
    return <h1>Données du logement en chargement ;&#41;</h1>;
  }

  return (
    <Wrapper className="page-100 section-center">
      <SlideShow cover={cover} pictures={pictures} title={title} />
      <h2>{title}</h2>
    </Wrapper>
  );
};
export default AccommodationPage;

const Wrapper = styled.main``;
