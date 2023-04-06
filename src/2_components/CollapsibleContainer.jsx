import styled from 'styled-components';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useRef, useState } from 'react';

const CollapsibleContainer = ({ title, content }) => {
  const targetRef = useRef();

  const [isContentShown, setIsContentShown] = useState(false);
  //   const [collapsibleContentHeight, setCollapsibleContentHeight] = useState(0);

  //   useLayoutEffect(() => {
  //     if (targetRef.current) {
  //       setCollapsibleContentHeight(targetRef.current.offsetHeight);
  //     }
  //   }, []);

  return (
    <Wrapper>
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
        ref={targetRef}
        className={`${
          !isContentShown && 'collapsible-content--hide'
        } collapsible-content`}
      >
        {typeof content === 'object' ? (
          content.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p>{content}</p>
        )}
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
    padding: 5.3rem 1.2rem;
    margin-top: -1.5rem;
    border-radius: var(--radius-small);
    max-height: 100%;
    transition: all 1s;
  }

  .collapsible-content--hide {
    padding: 0 1.2rem;
    max-height: 0;
    opacity: 0;
    visibility: hidden;
  }

  .collapsible-content > p {
    font-size: 1.4rem;
  }

  .collapsible-content--hide > p {
    /* max-height: 0;
    line-height: 0; */
  }

  @media only screen and (max-width: 767px) {
    .collapsible-title > h3 {
      font-size: 2.6rem;
    }
    .collapsible-content > p {
      font-size: 2.4rem;
    }
  }
`;
