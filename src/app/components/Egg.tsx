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
    <Container>
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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 4rem;
`;
