import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'antd/lib/button';

const Egg: React.FC<{}> = () => {
  const CatBreeds = [
    'Brown Tabby',
    'Bombay',
    'Exotic Shorthair',
    'Siamese',
    'Maine Coon',
  ];
  const [egg, setEgg] = useState('');

  console.log(egg);

  return (
    <Container className="container">
      <Button
        onClick={() =>
          setEgg(CatBreeds[Math.floor(Math.random() * Math.floor(4))])
        }
      >
        Hatch Egg
      </Button>
      <h1>{egg}</h1>
    </Container>
  );
};

export default Egg;

const Container = styled.div`
  //padding: 4rem;
  align-self: center;
  justify-self: center;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
