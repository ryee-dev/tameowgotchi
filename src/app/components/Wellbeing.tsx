import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const Wellbeing: React.FC<{}> = () => {
  const [hunger, setHunger] = useState(20);
  const [happiness, setHappiness] = useState(20);
  const [hygiene, setHygiene] = useState(20);

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
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .col {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
