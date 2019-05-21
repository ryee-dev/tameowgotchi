import React from 'react';
import styled from 'styled-components';

interface StatusProps {
  hunger: number;
  happiness: number;
  hygiene: number;
}

const StatusVis: React.FC<StatusProps> = properties => {
  const { hunger, happiness, hygiene } = properties;

  return (
    <StatusVisWrapper>
      <Status style={{ height: `${hunger}%` }} />
      <Status style={{ height: `${happiness}%` }} />
      <Status style={{ height: `${hygiene}%` }} />
    </StatusVisWrapper>
  );
};

export default StatusVis;

const StatusVisWrapper = styled.div`
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  position: absolute;
  bottom: 10rem;
`;

const Status = styled.span`
  width: 1.4rem;
  background-color: blue;

  transition: height 0.2s ease-in-out;
`;
