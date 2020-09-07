import React, { useState } from 'react';

import Star from './Star';

const createArray = length => [...Array(length)];

const StarRating = ({ totalStars = 5, selectedStars = 0 }) => (
  <>
    {createArray(totalStars).map((n, i) => (
      <Star key={i} selected={selectedStars > i} />
    ))}
    <p>
      {selectedStars} of {totalStars} stars
    </p>
  </>
);

export default StarRating;
