import React, { useState } from 'react';
import colorData from './data/color-data.json';
import Colorlist from './components/Colorlist';
import AddColorForm from './components/AddColorForm';
import { v4 } from 'uuid';

import './App.css';

const App = () => {
  const [colors, setColors] = useState(colorData);

  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColor = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color,
            },
          ];
          setColors(newColor);
        }}
      />
      <Colorlist
        colors={colors}
        onRateColor={(id, rating) => {
          const newColors = colors.map(color =>
            color.id === id ? { ...color, rating } : color,
          );
          setColors(newColors);
        }}
        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }}
      />
    </>
  );
};

export default App;
