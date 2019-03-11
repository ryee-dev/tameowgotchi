import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import Game from './app/Game';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Kyrial Display Pro", sans-serif;
    box-sizing: border-box;
  }
  
  div.container {
    box-sizing: border-box;
    display: flex;
    //flex-direction: column;
  }
`;

class App extends Component {
  render() {
    return (
      <AppShell>
        <Helmet>
          <link rel="stylesheet" href="https://use.typekit.net/yfb8knl.css" />
        </Helmet>
        <GlobalStyle />
        <Game />
      </AppShell>
    );
  }
}

export default App;

const AppShell = styled.div`
  padding: 3rem 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  box-sizing: border-box;
`;
