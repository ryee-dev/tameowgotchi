import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

// interface GameOverProps {
//
// }

const GameOver = () => {
  return (
    <ModalContainer>
      <p>Game Over!</p>
      <Button htmlType="button" onClick={() => window.location.reload()}>
        Start Over?
      </Button>
    </ModalContainer>
  );
};

export default GameOver;

const ModalContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  padding: 2rem;
  background-color: white;
  border: black solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 5;
`;
