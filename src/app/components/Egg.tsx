import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
// import { useSpring, animated } from 'react-spring';
import { useHover } from 'use-events';
import { ReactComponent as EggSvg } from '../assets/icons/egg.svg';
import { ReactComponent as HatchingSvg } from '../assets/icons/hatchegg.svg';

const EggWrapper = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.9 },
});

interface EggProps {
  // egg: string;
  selectBreed: Function;
  started: boolean;
  hatched: boolean;
}

// const animateEgg = useSpring({
//   transform: 'rotate(30deg)',
//   from: { transform: 'rotate(30deg)' },
// });

const Egg: React.FC<EggProps> = (props: EggProps) => {
  const { selectBreed, started, hatched } = props;
  const [isHovered, bind] = useHover();

  return (
    <Container>
      {!started && (
        <EggWrapper className="egg-wrapper">
          {!hatched && (
            <HatchButton onClick={selectBreed} {...bind}>
              {isHovered ? <HatchingSvg /> : <EggSvg />}
            </HatchButton>
          )}
        </EggWrapper>
      )}

      {/* <h1>{egg}</h1> */}
    </Container>
  );
};

export default Egg;

const Container = styled.div`
  //padding: 4rem;
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .egg-wrapper {
    transition: transform 2s ease;
  }
`;

const HatchButton = styled.div`
  width: 800px;
  //max-width: 580px;
  display: flex;
  align-items: center;
  justify-content: center;

  //transition: transform 0.3s ease-in-out;

  svg {
    &.hatched {
      opacity: 0;
      transition: opacity 5s ease;
    }
    transition: transform 3s ease-in-out;
    &:hover {
      cursor: pointer;

      &.hatched {
        opacity: 1;
      }
    }
  }

  @media (max-width: 500px) {
    //padding: 0;
  }
`;
