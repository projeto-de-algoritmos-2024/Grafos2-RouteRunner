# Projeto Router Runner

## Informações do Aluno
| Matrícula  | Nome           |
|------------|----------------|
| 170140717 | Eduarda Rodrigues Tavares |
| 211030747 | Filipe Carvalho da Silva  |

---

## Sobre o Projeto
Este projeto foi desenvolvido para ilustrar o funcionamento do Algoritmo de Dijkstra, um dos algoritmos mais conhecidos em teoria dos grafos e utilizado para encontrar o menor caminho em redes. Com uma interface interativa construída em React, o objetivo é facilitar o entendimento visual de como o algoritmo funciona na prática.

### Funcionalidades
 - Geração Automática de Mapas: Ao clicar no botão "Gerar Mapa", um grafo é gerado aleatoriamente, onde as ruas são representadas por arestas e as esquinas por nós.
 - Execução do Algoritmo: O botão "Iniciar" calcula o menor caminho entre o nó inicial (0) e o nó final (último nó) utilizando o Algoritmo de Dijkstra.
 - Visualização do Caminho: Um carrinho percorre o menor caminho, passando pelos nós conectados, enquanto o custo das arestas é exibido na tela.
 - Exibição do Custo: Os pesos das arestas são mostrados ao lado do mapa, ajudando a entender como o algoritmo toma decisões.

---

## Como Executar o Projeto

### Pré-requisitos
Para executar o projeto, você precisa ter instalado:
- Node.js (versão 14 ou superior)
- NPM (geralmente incluído com o Node.js)
- React (a biblioteca é instalada automaticamente com o projeto)

### Passo a Passo para Execução

1. Clonar o Repositório:
   - Com o terminal aberto, clone o repositório do projeto com o comando:
      ```bash
     git clone https://github.com/projeto-de-algoritmos-2024/Grafos2-RouteRunner.git
      ```
   - Navegue até a pasta do projeto com:
     ```bash
     cd Grafos2-RouteRunner 
     ```
2. Instalar Dependências:
   - No diretório do projeto, execute o comando para instalar as dependências:
     ```bash
     npm install
     ```
3. Iniciar:
   - No diretório do frontend, execute o comando para iniciar o servidor de desenvolvimento:
     ```bash
     npm start
     ```
   - O projeto será iniciado em `http://localhost:3000`.

### Como Usar a Aplicação

**Gerar o Mapa**
 - Clique no botão "Gerar Mapa" para criar um grafo aleatório.
 - O grafo é composto por nós (representando esquinas) e arestas (representando ruas), cada uma com um custo associado.
 - O custo de cada aresta será exibido na lista ao lado do mapa.

**Iniciar o Algoritmo**
 - Após gerar o mapa, clique no botão "Iniciar".
 - O algoritmo calculará o menor caminho entre o nó inicial (0) e o nó final (último nó).
 - Um carrinho animado representado por uma bolinha vermelha será mostrado percorrendo o menor caminho.

**Interagir Novamente**
 - Se desejar ver outro exemplo de grafo e rota, clique novamente em "Gerar Mapa" para criar um novo grafo.
 - Repita o processo clicando em "Iniciar" para visualizar o novo menor caminho.

---

## Tecnologias Utilizadas
- **React**: para o frontend interativo e lógica do dijkstra.

## Considerações
Este projeto demonstra como algoritmos complexos podem ser aplicados de forma prática e visual, conectando teoria e prática de maneira intuitiva e acessível.

## Demonstração em Vídeo
Para mais detalhes, assista à [demonstração em vídeo do projeto](https://youtu.be/sR68V6cOgwM).


