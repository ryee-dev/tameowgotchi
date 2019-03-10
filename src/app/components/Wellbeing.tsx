import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
// @ts-ignore
import useInterval from '@use-it/interval';

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
        <div className="col">
          <h2>Hunger: </h2>
          <h2>Happiness: </h2>
          <h2>Hygiene: </h2>
        </div>
        <div className="col">
          <h2>{hunger}</h2>
          <h2>{happiness}</h2>
          <h2>{hygiene}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button onClick={() => setHunger(hunger + 2)}>Feed</Button>
          <Button onClick={() => setHappiness(happiness + 2)}>Play</Button>
          <Button onClick={() => setHygiene(hygiene + 2)}>Wash</Button>
        </div>
        <div className="col">
          <Button onClick={() => setHunger(hunger - 5)}>-hunger</Button>
          <Button onClick={() => setHappiness(happiness - 5)}>
            -happiness
          </Button>
          <Button onClick={() => setHygiene(hygiene - 5)}>-hygiene</Button>
        </div>
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
  //flex-direction: column;

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
