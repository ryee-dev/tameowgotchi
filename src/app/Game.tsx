import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { Egg, Wellbeing, CatRender, GameOver } from './components';

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
  const [hunger, setHunger] = useState(100);
  const [happiness, setHappiness] = useState(100);
  const [hygiene, setHygiene] = useState(100);
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
      {hunger === 0 || happiness === 0 || hygiene === 0 ? (
        <GameOver />
      ) : (
        <div className="cat-container">
          <Egg selectBreed={selectBreed} started={started} hatched={hatched} />

          {hatched && (
            <Button
              htmlType="button"
              onClick={refreshPage}
              style={{ marginBottom: '1rem' }}
            >
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
                  style={{
                    padding: '1rem',
                    height: 'auto',
                    marginTop: '1rem',
                  }}
                >
                  Start
                </Button>
              )}
            </>
          )}
        </div>
      )}
    </GameShell>
  );
};

export default Game;

const GameShell = styled.div`
  //padding: 1rem 2rem;
  box-sizing: border-box;
  overflow: hidden;
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
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
    height: 100%;
    //max-height: 80vh;
    box-sizing: border-box;
    overflow: hidden;
    //max-width: 450px;

    //padding: 1rem;

    img {
      box-sizing: border-box;
      //width: 100%;
      //overflow: hidden;
      max-height: 500px;
      max-width: 320px;
      //max-height: 500px;
      //max-width: 380px;
      user-drag: none;
      user-select: none;

      @media (min-width: 768px) {
        max-width: 350px;
      }

      @media (min-width: 1024px) {
        max-width: 400px;
      }

      @media (min-width: 1440px) {
        max-width: 450px;
      }
    }
  }
`;
