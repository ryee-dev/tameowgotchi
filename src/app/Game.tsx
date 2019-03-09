import React, { useState } from 'react';
import styled from 'styled-components';
import { Egg, Wellbeing } from './components';
import { Button } from 'antd';
import {
  Bombay,
  BrownTabby,
  ExoticShorthair,
  MaineCoon,
  Siamese,
} from './assets/images';

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
  const [hatched, setHatched] = useState(false);

  const selectBreed = () => {
    setEgg(CatBreeds[Math.floor(Math.random() * Math.floor(4))]);
    setHatched(true);
  };

  return (
    <GameShell>
      {/*<h1>test</h1>*/}
      <Egg
        egg={egg}
        selectBreed={selectBreed}
        started={started}
        hatched={hatched}
      />
      <div className="cat-container">
        {egg === 'Brown Tabby' && <Cat className="browntabby" />}
        {egg === 'Bombay' && <Cat className="bombay" />}
        {egg === 'Exotic Shorthair' && <Cat className="exoticshorthair" />}
        {egg === 'Siamese' && <Cat className="siamese" />}
        {egg === 'Maine Coon' && <Cat className="mainecoon" />}
      </div>

      {started ? (
        <Wellbeing />
      ) : (
        <div>
          {hatched && <Button onClick={() => setStarted(true)}>Start</Button>}
        </div>
      )}
    </GameShell>
  );
};

export default Game;

const GameShell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    max-width: 300px;
  }

  .cat-container {
    height: 500px;
    width: 500px;
  }
`;

const Cat = styled.div`
  height: 100%;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;

  &.browntabby {
    background-image: url(${BrownTabby});

    &:active {
      background-image: url(${Bombay});
    }
  }

  &.bombay {
    background-image: url(${Bombay});
  }

  &.exoticshorthair {
    background-image: url(${ExoticShorthair});
  }

  &.siamese {
    background-image: url(${Siamese});
  }

  &.mainecoon {
    background-image: url(${MaineCoon});
  }
`;
