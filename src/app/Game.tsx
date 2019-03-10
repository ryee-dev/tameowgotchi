import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { Egg, Wellbeing, CatRender } from './components';

const Game: React.FC = () => {
  const CatBreeds = [
    'BrownTabby',
    'Bombay',
    'ExoticShorthair',
    'Siamese',
    'MaineCoon',
  ];

  const [started, setStarted] = useState(false);
  const [egg, setEgg] = useState('');
  const [hatched, setHatched] = useState(false);

  const selectBreed = () => {
    setEgg(CatBreeds[Math.floor(Math.random() * Math.floor(4))]);
    setHatched(true);
  };

  const [hunger, setHunger] = useState(20);
  const [happiness, setHappiness] = useState(20);
  const [hygiene, setHygiene] = useState(20);
  const [mood, setMood] = useState('smile');

  return (
    <GameShell>
      <Egg selectBreed={selectBreed} started={started} hatched={hatched} />
      <div className="cat-container">
        <CatRender
          egg={egg}
          hunger={hunger}
          happiness={happiness}
          hygiene={hygiene}
          mood={mood}
          setMood={setMood}
        />
      </div>

      {started ? (
        <Wellbeing
          hunger={hunger}
          setHunger={setHunger}
          happiness={happiness}
          setHappiness={setHappiness}
          hygiene={hygiene}
          setHygiene={setHygiene}
        />
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;

    img {
      //height: 500px;
      width: 500px;
    }
  }
`;
