import React, { useState } from 'react';
import colorData from './data/color-data.json';

import './App.css';

import Colorlist from './components/Colorlist';

const App = () => {
  const [colors, setColors] = useState(colorData);

  return <Colorlist colors={colors} />;
};

export default App;
