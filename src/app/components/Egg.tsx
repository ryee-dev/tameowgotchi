import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
// import { useSpring, animated } from 'react-spring';
import { useHover } from 'use-events';
import { ReactComponent as EggSvg } from '../assets/icons/egg.svg';
import { ReactComponent as HatchingSvg } from '../assets/icons/hatchegg.svg';

const EggWrapper = styled.div`
  transition: transform 2s ease;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PosedEgg = posed(EggWrapper)({
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
        <PosedEgg>
          {!hatched && (
            <HatchButton onClick={selectBreed} {...bind}>
              {isHovered ? <HatchingSvg /> : <EggSvg />}
            </HatchButton>
          )}
        </PosedEgg>
      )}

      {/* <h1>{egg}</h1> */}
    </Container>
  );
};

export default Egg;

const Container = styled.div`
  //padding: 4rem;
  //height: 100%;
  padding: 0 1rem;
  width: 100%;
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HatchButton = styled.div`
  width: 100%;
  max-width: 580px;
  //padding: 3rem;
  box-sizing: border-box;
  overflow: hidden;
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

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    //max-width: 580px;
  }

  @media (min-width: 1440px) {
  }
`;
