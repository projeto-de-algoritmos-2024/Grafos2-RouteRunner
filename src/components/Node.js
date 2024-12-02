import React from 'react';
import styled from 'styled-components';

const NodeContainer = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background: #007bff;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

function Node({ node }) {
  return (
    <NodeContainer
      style={{
        top: `${node.y}px`,
        left: `${node.x}px`,
      }}
    >
      {node.id}
    </NodeContainer>
  );
}

export default Node;
