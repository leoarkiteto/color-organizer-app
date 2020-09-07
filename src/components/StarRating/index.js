import React from 'react';

import Star from './Star';

const createArray = length => [...Array(length)];

const StarRating = ({ totalStars = 5, selectedStars = 0, onRate = f => f }) => (
  <>
    {createArray(totalStars).map((n, i) => (
      <Star
        key={i}
        selected={selectedStars > i}
        onSelect={() => onRate(i + 1)}
      />
    ))}
    <p>
      {selectedStars} of {totalStars} stars
    </p>
  </>
);

export default StarRating;
