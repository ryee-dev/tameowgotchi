import React, { useState } from 'react';
import styled from 'styled-components';

const Egg: React.FC<{}> = () => {
  const CatBreeds = [
    'Brown Tabby',
    'Bombay',
    'Exotic Shorthair',
    'Siamese',
    'Maine Coon',
  ];
  const [egg, setEgg] = useState('');

  // const RandomizeEgg = () => {
  //
  // }

  return (
    <Container>
      <button
        onClick={() => setEgg(CatBreeds[Math.floor(Math.random() * 5 + 1)])}
      >
        Hatch Egg
      </button>
      <h1>{egg}</h1>
    </Container>
  );
};

export default Egg;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
