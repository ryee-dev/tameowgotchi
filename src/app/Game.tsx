import React, { useState } from 'react';
import { Egg, Wellbeing } from './components';
import { Button } from 'antd';

const Game: React.FC = () => {
  const CatBreeds = [
    'Brown Tabby',
    'Bombay',
    'Exotic Shorthair',
    'Siamese',
    'Maine Coon',
  ];

  const [started, setStarted] = useState(false);
  const [egg, setEgg] = useState('');

  const selectBreed = () => {
    setEgg(CatBreeds[Math.floor(Math.random() * Math.floor(4))]);
  };

  return (
    <>
      {/*<h1>test</h1>*/}
      <Egg egg={egg} selectBreed={selectBreed} />
      <Button onClick={() => setStarted(true)}>Start</Button>

      {started && <Wellbeing />}
    </>
  );
};

export default Game;
