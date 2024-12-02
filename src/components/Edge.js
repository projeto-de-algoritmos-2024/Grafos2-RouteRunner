import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  position: absolute;
  background: #000;
  height: 2px;
  transform-origin: 0 0;
`;

function Edge({ edge, nodes }) {
  // Encontrar os nós conectados pela aresta
  const fromNode = nodes.find((node) => node.id === edge.from);
  const toNode = nodes.find((node) => node.id === edge.to);

  if (!fromNode || !toNode) return null;

  // Calcular comprimento e ângulo da aresta
  const dx = toNode.x - fromNode.x;
  const dy = toNode.y - fromNode.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI); // Ângulo em graus

  return (
    <Line
      style={{
        width: `${length}px`,
        top: `${fromNode.y + 15}px`, // Ajustar para alinhar ao centro do nó
        left: `${fromNode.x + 15}px`, // Ajustar para alinhar ao centro do nó
        transform: `rotate(${angle}deg)`,
      }}
    />
  );
}

export default Edge;
