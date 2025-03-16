import React from 'react';
import { Box, Typography, List, ListItem, ListItemButton } from '@mui/material';

const nodeCategories = [
  {
    name: 'Core Nodes',
    nodes: [
      'User Intent',
      'Dialog Task',
      'Entity',
      'Form',
      'Confirmation',
      'Message',
      'Bot Action',
      'Agent Transfer'
    ]
  }
];

const NodesLibrary: React.FC = () => {
  return (
    <Box sx={{ width: 250, bgcolor: 'background.paper' }}>
      {nodeCategories.map((category) => (
        <Box key={category.name} sx={{ p: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            {category.name}
          </Typography>
          <List>
            {category.nodes.map((node) => (
              <ListItem key={node} disablePadding>
                <ListItemButton>
                  {node}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default NodesLibrary;