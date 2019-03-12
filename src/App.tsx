import React from 'react';
import 'antd/dist/antd.css';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import Particles from 'react-particles-js';
import Game from './app/Game';
import CatSvg from './app/assets/icons/cat-particle-1.svg';
import CatSvg2 from './app/assets/icons/cat-particle-2.svg';
import CatSvg3 from './app/assets/icons/cat-particle-3.svg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Kyrial Display Pro", sans-serif;
    box-sizing: border-box;
  }
    //flex-direction: column;
`;

const App: React.FC<{}> = () => {
  return (
    <AppShell>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/yfb8knl.css" />
        <title>Tameowgotchi</title>
      </Helmet>
      <GlobalStyle />
      <StyledParticles
        params={{
          particles: {
            number: {
              value: 10,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#1b1e34',
            },
            shape: {
              type: ['images'],
              images: [
                {
                  src: `${CatSvg}`,
                  width: 20,
                  height: 19,
                },
                {
                  src: `${CatSvg2}`,
                  width: 20,
                  height: 19,
                },
                {
                  src: `${CatSvg3}`,
                  width: 20,
                  height: 19,
                },
              ],
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
            size: {
              value: 30,
              random: true,
              anim: {
                enable: false,
                // speed: 2,
                size_min: 200,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 200,
              color: '#ffffff',
              opacity: 1,
              width: 2,
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'bottom',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <Game />
    </AppShell>
  );
};

export default App;

const AppShell = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  box-sizing: border-box;

  @media (max-width: 500px) {
    padding: 2rem;
  }
`;

const StyledParticles = styled(Particles)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  overflow: hidden;

  canvas {
    opacity: 0.3;
  }
`;
