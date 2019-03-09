import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
// @ts-ignore
import useInterval from '@use-it/interval';

const Wellbeing: React.FC<{}> = () => {
  const [hunger, setHunger] = useState(20);
  const [happiness, setHappiness] = useState(20);
  const [hygiene, setHygiene] = useState(20);

  useInterval(() => {
    setHunger(currentHunger => currentHunger - 1);
    setHappiness(currentHappiness => currentHappiness - 1);
    setHygiene(currentHygiene => currentHygiene - 1);
  }, 5000);

  if (hunger < 0) {
    setHunger(0);
    console.log('feeeed');
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
