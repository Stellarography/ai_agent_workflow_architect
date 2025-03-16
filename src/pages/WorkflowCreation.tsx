import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const WorkflowCreation: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        Workflow Creation
      </Typography>
      <Box>
        <Typography variant="body1">
          Pre-built workflows will be displayed here.
        </Typography>
      </Box>
    </Container>
  );
};

export default WorkflowCreation;