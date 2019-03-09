import React from 'react';
import styled from 'styled-components';
import Button from 'antd/lib/button';

interface EggProps {
  egg: string;
  selectBreed: any;
  started: boolean;
  hatched: boolean;
}

const Egg: React.FC<EggProps> = props => {
  return (
    <Container className="container">
      {!props.started && (
        <div>
          {!props.hatched && (
            <Button onClick={props.selectBreed}>Hatch Egg</Button>
          )}
        </div>
      )}

      <h1>{props.egg}</h1>
    </Container>
  );
};

export default Egg;

const Container = styled.div`
  //padding: 4rem;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  
`;
