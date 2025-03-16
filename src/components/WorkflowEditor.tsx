import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import NodesLibrary from './NodesLibrary';
import Canvas from './Canvas';
import ConfigPanel from './ConfigPanel';

const WorkflowEditor: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <NodesLibrary />
        <Canvas />
        <ConfigPanel />
      </Box>
    </Box>
  );
};

export default WorkflowEditor;