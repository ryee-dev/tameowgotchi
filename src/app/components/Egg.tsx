import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { useHover } from 'use-events';
import { ReactComponent as EggSvg } from '../assets/icons/egg.svg';
import { ReactComponent as HatchEggSvg } from '../assets/icons/hatchegg.svg';

const EggWrapper = posed.div({
  pressable: true,
  draggable: true,
  init: { scale: 1 },
  press: { scale: 0.9 },
});

// const PosedHatched = posed(HatchEggSvg)({
//   pressable: true,
//   init: { scale: 1 },
//   press: { scale: 0.8 },
// });

interface EggProps {
  // egg: string;
  selectBreed: Function;
  started: boolean;
  hatched: boolean;
}

const Egg: React.FC<EggProps> = (props: EggProps) => {
  const { selectBreed, started, hatched } = props;
  const [isHovered, bind] = useHover();

  return (
    <Container className="container">
      {!started && (
        <EggWrapper>
          {!hatched && (
            <HatchButton onClick={selectBreed} {...bind}>
              {isHovered ? <HatchEggSvg /> : <EggSvg />}
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
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HatchButton = styled.div`
  width: 300px;
  //transition: transform 0.3s ease-in-out;

  svg {
    transition: transform 3s ease-in-out;
    &:hover {
      cursor: pointer;
      //transform: scale(2);
    }

    //&:active {
    //  transform: scale(0.9);
    //}
  }
`;

// const HatchButton = styled.div`
//   // @ts-ignore
//   //background-image: url(${EggImage});
//   //background-repeat: no-repeat;
//   //background-size: contain;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 1rem 0.6rem;
//   //border: 1px solid black;
//   box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.3);
//   transition: box-shadow 0.3s ease-in-out;
//   cursor: pointer;
//   border-radius: 10px;
//
//   font-size: 1.6rem;
//
//   &:active {
//     box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.3);
//   }
// `;
