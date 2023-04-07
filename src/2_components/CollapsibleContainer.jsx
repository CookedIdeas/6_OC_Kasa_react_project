import styled from 'styled-components';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

const CollapsibleContainer = ({ title, content }) => {
  const [isContentShown, setIsContentShown] = useState(false);

  //if content is an array (for equipments), format it
  const formatContent = (contentToFormat) => {
    if (typeof contentToFormat === 'object') {
      return (
        <div>
          {contentToFormat.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      );
    } else {
      return <p>{contentToFormat}</p>;
    }
  };

  return (
    <Wrapper className="js-collapsible-container">
      <div
        className="collapsible-title"
        onClick={() => setIsContentShown(!isContentShown)}
      >
        <h3>{title}</h3>
        <button type="button" className="collapsible-chevron">
          {isContentShown ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <div
        className={`${
          isContentShown && 'collapsible-content--active'
        } collapsible-content`}
      >
        {formatContent(content)}
      </div>
    </Wrapper>
  );
};
export default CollapsibleContainer;

const Wrapper = styled.div`
  width: 100%;

  .collapsible-title {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-text-red);
    width: 100%;
    height: 2rem;
    padding: 1.3rem 2rem;
    border-radius: var(--radius-small);
    min-height: 5.2rem;
    z-index: 2;
    cursor: pointer;
  }

  .collapsible-title > button {
    cursor: pointer;
  }

  .collapsible-title > h3 {
    color: white;
    font-size: 1.8rem;
    font-weight: 500;
  }

  .collapsible-title > h3:first-letter {
    text-transform: uppercase;
  }

  .collapsible-chevron {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 2.4rem;
  }

  .collapsible-content {
    position: relative;
    z-index: 1;
    background-color: var(--color-bcg-grey);
    margin-top: -1.5rem;
    border-radius: var(--radius-small);
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    max-height: 0;
    min-height: 0;
    padding: 0rem 2rem;
    transition: all 0.7s;
  }

  .collapsible-content--active {
    max-height: 350px;
  }

  .collapsible-content > p {
    font-size: 1.4rem;
    margin: 5.3rem 0;
  }

  .collapsible-content > div {
    font-size: 1.4rem;
    padding: 5.3rem 0;
  }

  @media only screen and (max-width: 767px) {
    .collapsible-title > h3 {
      font-size: 2.6rem;
    }
    .collapsible-content > p {
      font-size: 2.4rem;
    }
    .collapsible-content > div {
      font-size: 2.4rem;
    }
  }
`;
