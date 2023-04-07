import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import data from '../4_data/data_logements.json';
import { SlideShow, Info } from '../2_components/accommodationPage';
import { CollapsibleContainer } from '../2_components';
import { Error } from './index';
import { Loading } from '../2_components/global';

const AccommodationPage = () => {
  let { id } = useParams();
  const [accommodation, setAccommodation] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let thisAccommodation = data.filter((item) => item.id === id);
    setAccommodation(thisAccommodation[0]);
    setIsLoading(false);
  }, [id]);

  // if no accommodation found
  // -> a wrong id has been used in params
  // -> return error page
  if (!accommodation) {
    return <Error />;
  }

  // an existing id has been used in params
  if (accommodation) {
    const { cover, description, equipments, pictures, title } = accommodation;

    // first display a loading
    if (isLoading) {
      return <Loading />;
    }

    return (
      <Wrapper className="page-100 section-center">
        <SlideShow cover={cover} pictures={pictures} title={title} />
        <section>
          <Info {...accommodation} />
        </section>
        <section className="more-info-container">
          <CollapsibleContainer title={'description'} content={description} />
          <CollapsibleContainer title={'équipements'} content={equipments} />
        </section>
      </Wrapper>
    );
  }
};
export default AccommodationPage;

const Wrapper = styled.main`
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
