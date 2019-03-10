import React from 'react';
import styled from 'styled-components';
import Button from 'antd/lib/button';

interface EggProps {
  // egg: string;
  selectBreed: Function;
  started: boolean;
  hatched: boolean;
}

const Egg: React.FC<EggProps> = (props: EggProps) => {
  const { selectBreed, started, hatched } = props;

  return (
    <Container className="container">
      {!started && (
        <div>
          {!hatched && (
            // @ts-ignore
            <Button onClick={selectBreed}>Hatch Egg</Button>
          )}
        </div>
      )}

      {/*<h1>{egg}</h1>*/}
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
