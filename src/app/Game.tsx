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
                style={{ padding: '1rem 2rem', height: 'auto' }}
              >
                Start
              </Button>
            )}
          </>
        )}
      </div>
    </GameShell>
  );
};

export default Game;

const GameShell = styled.div`
  padding: 3rem 5rem;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .cat-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;

    img {
      box-sizing: border-box;
      width: 100%;
      //max-height: 500px;
      max-width: 450px;
      padding: 2rem 0;
      user-drag: none;
      user-select: none;
    }
  }
`;
