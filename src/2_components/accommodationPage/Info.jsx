import styled from 'styled-components';
import { useEffect, useState } from 'react';
import starsCounter from '../../3_utils/starsCounter';

const Info = ({ title, location, tags, host, rating }) => {
  // == STARS == //
  const [stars, setStars] = useState(null);
  useEffect(() => {
    setStars(starsCounter(rating));
  }, [rating]);

  return (
    <Wrapper>
      <div className="location-container">
        <h1 className="js-accommodation-title">{title}</h1>
        <h2>{location}</h2>
        <div className="tags-container">
          {tags.map((tag, index) => (
            <div key={index} className="tag">
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="host-and-stars-container">
        <div className="host-container">
          <h2 className="host-name">{host.name}</h2>
          <img src={host.picture} alt={host.name} className="host-picture" />
        </div>
        <div className="star-container">{stars}</div>
      </div>
    </Wrapper>
  );
};
export default Info;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 1rem;
  position: relative;

  .host-and-stars-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .host-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
  }

  .host-picture {
    border-radius: 100%;
    width: 6.4rem;
    height: 6.4rem;
    object-fit: cover;
  }

  .host-name {
    width: 9rem;
    text-align: right;
  }

  .star-container {
    display: flex;
    gap: 1rem;
  }

  .star > * {
    height: 2.4rem;
    width: 2.4rem;
  }

  .white-star {
    color: #e3e3e3;
  }

  .red-star {
    color: var(--color-text-red);
  }

  .location-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    /* white-space: nowrap; */
  }

  h1 {
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 1;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: 500;
  }

  .tags-container {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    margin-top: 1rem;
    bottom: 0;
  }

  .tag {
    background-color: var(--color-text-red);
    padding: 0.3rem 3.7rem;
    border-radius: var(--radius-small);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .tag > p {
    color: white;
    font-size: 1.4rem;
    font-weight: 500;
  }

  @media only screen and (min-width: 767px) and (max-width: 850px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    .host-and-stars-container {
      flex-direction: row-reverse;
      align-items: center;
    }
    .host-name {
      font-size: 2.4rem;
      width: 18rem;
    }
    h1 {
      padding-bottom: 1rem;
    }
  }

  @media only screen and (max-width: 410px) {
    h1 {
      /* font-size: 2rem; */
    }
    .tag {
      padding: 0.3rem 2rem;
    }
  }
`;
