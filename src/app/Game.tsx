import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { Egg, Wellbeing, CatRender } from './components';

const Game: React.FC<{}> = () => {
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
  const [hunger, setHunger] = useState(20);
  const [happiness, setHappiness] = useState(20);
  const [hygiene, setHygiene] = useState(20);
  const [mood, setMood] = useState('smile');

  const selectBreed = () => {
    setEgg(CatBreeds[Math.floor(Math.random() * Math.floor(4))]);
    setHatched(true);
    setMood('yiss');
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <GameShell>
      <Egg selectBreed={selectBreed} started={started} hatched={hatched} />
      <div className="cat-container">
        {hatched && (
          <Button htmlType="button" onClick={refreshPage}>
            Start Over?
          </Button>
        )}
        <CatRender
          egg={egg}
          hunger={hunger}
          happiness={happiness}
          hygiene={hygiene}
          mood={mood}
          started={started}
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
        <>
          {hatched && (
            <Button
              htmlType="button"
              onClick={() => setStarted(true)}
              style={{ width: '100%' }}
            >
              Start
            </Button>
          )}
        </>
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

  .cat-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 0;

    img {
      //max-height: 500px;
      max-width: 500px;
      //width: 18rem;
      user-drag: none;
      user-select: none;
    }
  }
`;
