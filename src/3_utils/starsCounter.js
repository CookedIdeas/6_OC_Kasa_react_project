import { FaStar } from 'react-icons/fa';

const starsCounter = (numberOfStars) => {
  return (
    <>
      <span
        className={`${numberOfStars >= 1 ? 'red-star' : 'white-star'} star`}
      >
        <FaStar />
      </span>
      <span
        className={`${numberOfStars >= 2 ? 'red-star' : 'white-star'} star`}
      >
        <FaStar />
      </span>
      <span
        className={`${numberOfStars >= 3 ? 'red-star' : 'white-star'} star`}
      >
        <FaStar />
      </span>
      <span
        className={`${numberOfStars >= 4 ? 'red-star' : 'white-star'} star`}
      >
        <FaStar />
      </span>
      <span
        className={`${numberOfStars >= 5 ? 'red-star' : 'white-star'} star`}
      >
        <FaStar />
      </span>
    </>
  );
};

export default starsCounter;
