import { useEffect, useState } from 'react';
import styled from 'styled-components';
import arrowRight from '../../0_assets/arrow-right.svg';
import arrowLeft from '../../0_assets/arrow-left.svg';

const SlideShow = ({ cover, pictures, title }) => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [currentPicture, setCurrentPicture] = useState(
    pictures[currentPictureIndex]
  );
  const picturesLength = pictures.length;

  const changePicture = (nextOrPrevious) => {
    if (nextOrPrevious === 'next') {
      if (currentPictureIndex + 1 < picturesLength) {
        setCurrentPictureIndex(currentPictureIndex + 1);
      } else {
        setCurrentPictureIndex(0);
      }
    } else {
      if (currentPictureIndex - 1 >= 0) {
        setCurrentPictureIndex(currentPictureIndex - 1);
      } else {
        setCurrentPictureIndex(picturesLength - 1);
      }
    }
  };

  useEffect(() => {
    setCurrentPicture(pictures[currentPictureIndex]);
  }, [currentPictureIndex, pictures]);

  return (
    <Wrapper>
      <img src={currentPicture} alt={title} className="image slideshow-image" />
      {picturesLength > 1 && (
        <>
          <button
            className="arrow-btn arrow-btn--right"
            onClick={() => changePicture('next')}
          >
            <img
              className="arrow-img"
              src={arrowRight}
              alt="cliquer ici pour faire défiler à droite"
            />
          </button>
          <button
            className="arrow-btn arrow-btn--left"
            onClick={() => changePicture('prev')}
          >
            <img
              className="arrow-img"
              src={arrowLeft}
              alt="cliquer ici pour faire défiler à gauche"
            />
          </button>
        </>
      )}
    </Wrapper>
  );
};
export default SlideShow;

const Wrapper = styled.section`
  height: 41rem;
  width: 100%;
  position: relative;
  margin: 3rem 0;
  /* padding: 2.4rem; */

  .slideshow-image {
    height: 41rem;
  }
  .arrow-btn {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    padding: 0;
  }
  .arrow-btn--right {
    right: 2.4rem;
  }
  .arrow-btn--left {
    left: 2.4rem;
  }
  .arrow-img {
    height: 8rem;
  }

  @media only screen and (max-width: 767px) {
    height: 50rem;
    .image {
      height: 50rem;
    }
  }
`;
