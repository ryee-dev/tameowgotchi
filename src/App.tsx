import React, { Component } from 'react';
import styled from 'styled-components';
import Game from './app/Game';

class App extends Component {
  render() {
    return (
      <AppShell>
        <Game />
      </AppShell>
    );
  }
}

export default App;

const AppShell = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
