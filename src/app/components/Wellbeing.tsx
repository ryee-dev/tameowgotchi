import * as React from 'react';
import styled from 'styled-components';
import useInterval from '@use-it/interval';
import { ReactComponent as WashIcon } from '../assets/icons/wash.svg';
import { ReactComponent as FishIcon } from '../assets/icons/fish.svg';
import { ReactComponent as ToyIcon } from '../assets/icons/toy.svg';
// import StatusVis from './StatusVis';

interface WellbeingProps {
  hunger: number;
  happiness: number;
  hygiene: number;
  setHunger: Function;
  setHappiness: Function;
  setHygiene: Function;
}

const Wellbeing: React.FC<WellbeingProps> = properties => {
  const {
    hunger,
    happiness,
    hygiene,
    setHunger,
    setHappiness,
    setHygiene,
  } = properties;

  useInterval(() => {
    setHunger((currentHunger: number) => currentHunger - 2);
    setHappiness((currentHappiness: number) => currentHappiness - 2);
    setHygiene((currentHygiene: number) => currentHygiene - 2);
    console.log(hunger, happiness, hygiene);
  }, 1000);

  if (hunger < 0) {
    setHunger(0);
  } else if (hunger > 100) {
    setHunger(100);
  } else if (happiness < 0) {
    setHappiness(0);
  } else if (happiness > 100) {
    setHappiness(100);
  } else if (hygiene < 0) {
    setHygiene(0);
  } else if (hygiene > 100) {
    setHygiene(100);
  }

  return (
    <Wrapper className="container">
      <div className="row">
        {hunger < 20 && <p>feed me!</p>}
        {happiness < 20 && <p>play with me!</p>}
        {hygiene < 20 && <p>wash me!</p>}
      </div>
      <div className="row" style={{ padding: '1rem 0' }}>
        <GameButton onClick={() => setHunger(hunger + 5)}>
          <FishIcon />
        </GameButton>
        <GameButton onClick={() => setHappiness(happiness + 5)}>
          <ToyIcon />
        </GameButton>
        <GameButton onClick={() => setHygiene(hygiene + 5)}>
          <WashIcon />
        </GameButton>
      </div>
      {/* <div className="row"> */}
      {/*  <StatusVis hunger={hunger} happiness={happiness} hygiene={hygiene} /> */}
      {/* </div> */}

      {/* <div className="row"> */}
      {/*  <Button onClick={() => setHunger(hunger - 5)}>-hunger</Button> */}
      {/*  <Button onClick={() => setHappiness(happiness - 5)}>-happiness</Button> */}
      {/*  <Button onClick={() => setHygiene(hygiene - 5)}>-hygiene</Button> */}
      {/* </div> */}
    </Wrapper>
  );
};

export default Wellbeing;

const Wrapper = styled.div`
  width: 100%;
  align-self: flex-start;
  justify-self: center;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-sizing: border-box;
    //padding: 1rem 0;
  }

  .col {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  button {
    margin-bottom: 0.5em;
  }
`;

const GameButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  //padding: 0.6rem;
  border-radius: 100px;
  //border: 1px solid black;
  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
  background-color: white;

  svg {
    //padding: 0.2rem;
    max-width: 1rem;
  }

  &:active {
    box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    width: 3rem;
    height: 3rem;

    svg {
      max-width: 1.4rem;
    }
  }

  @media (min-width: 1024px) {
    width: 4rem;
    height: 4rem;

    svg {
      max-width: 1.6rem;
    }
  }

  @media (min-width: 1440px) {
  }
`;
