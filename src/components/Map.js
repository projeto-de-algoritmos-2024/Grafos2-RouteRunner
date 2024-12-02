import React from 'react';
import styled from 'styled-components';
import Node from './Node';
import Edge from './Edge';
import Car from './Car';

const MapContainer = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  background: #f3f3f3;
  border: 2px solid #000;
`;

function Map({ graph, carPosition }) {
  const { nodes, edges } = graph;

  return (
    <MapContainer>
      {edges.map((edge, index) => (
        <Edge key={index} edge={edge} nodes={nodes} />
      ))}
      {nodes.map((node) => (
        <Node key={node.id} node={node} />
      ))}
      <Car position={carPosition} />
    </MapContainer>
  );
}

export default Map;
