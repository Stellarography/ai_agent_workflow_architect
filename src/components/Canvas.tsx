import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes: any[] = [];
const initialEdges: any[] = [];

const Canvas: React.FC = () => {
  return (
    <ReactFlow
      nodes={initialNodes}
      edges={initialEdges}
      fitView
    >
      <Background />
    </ReactFlow>
  );
};

export default Canvas;