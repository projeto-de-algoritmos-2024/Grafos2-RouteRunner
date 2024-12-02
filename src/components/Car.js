import React from 'react';
import styled from 'styled-components';

const CarContainer = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
  transition: all 1s linear;
`;

function Car({ position }) {
  if (!position) return null;

  return (
    <CarContainer
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}

export default Car;
