import React from 'react';
import { Box, Typography } from '@mui/material';

const ConfigPanel: React.FC = () => {
  return (
    <Box sx={{ width: 300, bgcolor: 'background.paper', p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Node Configuration
      </Typography>
      <Typography variant="body1">
        Select a node to configure its properties
      </Typography>
    </Box>
  );
};

export default ConfigPanel;