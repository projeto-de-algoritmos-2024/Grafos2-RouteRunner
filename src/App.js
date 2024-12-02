import React, { useState } from 'react';
import Map from './components/Map';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const EdgeListContainer = styled.div`
  margin-top: 20px;
  text-align: left;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

const EdgeItem = styled.div`
  font-size: 14px;
  margin: 5px 0;
`;

function App() {
  const [graph, setGraph] = useState(null);
  const [path, setPath] = useState([]);
  const [carPosition, setCarPosition] = useState(null);

  const generateMap = () => {
    const numNodes = 6;

    const nodes = Array.from({ length: numNodes }, (_, i) => ({
      id: i,
      x: Math.random() * 400,
      y: Math.random() * 400,
    }));

    const edges = [];
    const maxEdges = numNodes * 2;

    for (let i = 0; i < maxEdges; i++) {
      const from = Math.floor(Math.random() * numNodes);
      const to = Math.floor(Math.random() * numNodes);

      if (
        from !== to &&
        !edges.find(
          (e) => (e.from === from && e.to === to) || (e.from === to && e.to === from)
        )
      ) {
        edges.push({
          from,
          to,
          weight: Math.floor(Math.random() * 10 + 1),
        });
      }
    }

    for (let i = 0; i < numNodes - 1; i++) {
      if (!edges.find((e) => e.from === i || e.to === i)) {
        edges.push({
          from: i,
          to: i + 1,
          weight: Math.floor(Math.random() * 10 + 1),
        });
      }
    }

    setGraph({ nodes, edges });
    setCarPosition(null);
    setPath([]);
  };

  const dijkstra = (nodes, edges, startNode, endNode) => {
    const distances = {};
    const previous = {};
    const visited = new Set();

    nodes.forEach((node) => {
      distances[node.id] = Infinity;
      previous[node.id] = null;
    });
    distances[startNode] = 0;

    while (visited.size < nodes.length) {
      const unvisitedNodes = nodes.filter((node) => !visited.has(node.id));
      const currentNode = unvisitedNodes.reduce(
        (a, b) => (distances[a.id] < distances[b.id] ? a : b),
        unvisitedNodes[0]
      );

      if (distances[currentNode.id] === Infinity) break;

      visited.add(currentNode.id);

      edges.forEach((edge) => {
        if (edge.from === currentNode.id || edge.to === currentNode.id) {
          const neighborId = edge.from === currentNode.id ? edge.to : edge.from;
          if (!visited.has(neighborId)) {
            const newDist = distances[currentNode.id] + edge.weight;
            if (newDist < distances[neighborId]) {
              distances[neighborId] = newDist;
              previous[neighborId] = currentNode.id;
            }
          }
        }
      });
    }

    const path = [];
    let current = endNode;
    while (current !== null) {
      path.unshift(current);
      current = previous[current];
    }
    return { path, distances };
  };

  const startSimulation = () => {
    if (!graph) return;

    const { nodes, edges } = graph;
    const result = dijkstra(nodes, edges, 0, nodes.length - 1);
    setPath(result.path);

    let step = 0;
    const interval = setInterval(() => {
      if (step < result.path.length) {
        const currentNode = nodes.find((node) => node.id === result.path[step]);
        setCarPosition({ x: currentNode.x, y: currentNode.y });
        step++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };

  return (
    <Container>
      <h1>Algoritmo de Dijkstra</h1>
      <Button onClick={generateMap}>Gerar Mapa</Button>
      <Button onClick={startSimulation}>Iniciar</Button>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '20px' }}>
        {graph && <Map graph={graph} carPosition={carPosition} />}
        {graph && (
          <EdgeListContainer>
            <h3>Custo das Arestas</h3>
            {graph.edges.map((edge, index) => (
              <EdgeItem key={index}>
                Aresta {edge.from} → {edge.to}: {edge.weight}
              </EdgeItem>
            ))}
          </EdgeListContainer>
        )}
      </div>
    </Container>
  );
}

export default App;
