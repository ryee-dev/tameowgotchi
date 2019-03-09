import React from 'react';
import styled from 'styled-components';
import Button from 'antd/lib/button';
import {
  BrownTabby,
  Bombay,
  ExoticShorthair,
  MaineCoon,
  Siamese,
} from '../assets/images';

interface EggProps {
  egg: string;
  selectBreed: any;
}

const Egg: React.FC<EggProps> = props => {
  return (
    <Container className="container">
      <Button onClick={props.selectBreed}>Hatch Egg</Button>
      <h1>{props.egg}</h1>

      {props.egg === 'Brown Tabby' && (
        <img src={BrownTabby} alt="brown-tabby" />
      )}
      {props.egg === 'Bombay' && <img src={Bombay} alt="bombay" />}
      {props.egg === 'Exotic Shorthair' && (
        <img src={ExoticShorthair} alt="exotic-shorthair" />
      )}
      {props.egg === 'Siamese' && <img src={Siamese} alt="siamese" />}
      {props.egg === 'Maine Coon' && <img src={MaineCoon} alt="maine-coon" />}
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

  img {
    max-width: 300px;
  }
`;
