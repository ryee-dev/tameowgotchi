import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
// @ts-ignore
import useInterval from '@use-it/interval';
import { ReactComponent as WashIcon } from '../assets/icons/wash.svg';
import { ReactComponent as FishIcon } from '../assets/icons/fish.svg';
import { ReactComponent as ToyIcon } from '../assets/icons/toy.svg';
// import { ReactComponent as EggIcon } from '../assets/icons/egg.svg';

interface WellbeingProps {
  hunger: number;
  happiness: number;
  hygiene: number;
  setHunger: Function;
  setHappiness: Function;
  setHygiene: Function;
}

const Wellbeing: React.FC<WellbeingProps> = (props: WellbeingProps) => {
  const {
    hunger,
    happiness,
    hygiene,
    setHunger,
    setHappiness,
    setHygiene,
  } = props;

  useInterval(() => {
    setHunger((currentHunger: number) => currentHunger - 1);
    setHappiness((currentHappiness: number) => currentHappiness - 1);
    setHygiene((currentHygiene: number) => currentHygiene - 1);
    console.log(hunger, happiness, hygiene);
  }, 5000);

  if (hunger < 0) {
    setHunger(0);
  } else if (hunger > 20) {
    setHunger(20);
  } else if (happiness < 0) {
    setHappiness(0);
  } else if (happiness > 20) {
    setHappiness(20);
  } else if (hygiene < 0) {
    setHygiene(0);
  } else if (hygiene > 20) {
    setHygiene(20);
  }

  console.log(hunger, happiness, hygiene);

  return (
    <Wrapper className="container">
      <div className="row">
        <GameButton onClick={() => setHunger(hunger + 2)}>
          <FishIcon />
        </GameButton>
        <GameButton onClick={() => setHappiness(happiness + 2)}>
          <ToyIcon />
        </GameButton>
        <GameButton onClick={() => setHygiene(hygiene + 2)}>
          <WashIcon />
        </GameButton>
      </div>
      <div className="row">
        <Button onClick={() => setHunger(hunger - 5)}>-hunger</Button>
        <Button onClick={() => setHappiness(happiness - 5)}>-happiness</Button>
        <Button onClick={() => setHygiene(hygiene - 5)}>-hygiene</Button>
      </div>
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
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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
  width: 3rem;
  height: 3rem;
  //padding: 0.6rem;
  border-radius: 100px;
  //border: 1px solid black;
  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;

  svg {
    //padding: 0.2rem;
    max-width: 1.6rem;
  }

  &:active {
    box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.3);
  }
`;
