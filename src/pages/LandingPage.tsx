import React from 'react';
import { TextField, Typography, Container } from '@mui/material';

const LandingPage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to AI Agent Workflow Architect
      </Typography>
      <TextField
        fullWidth
        label="Enter your interests"
        variant="outlined"
        margin="normal"
      />
    </Container>
  );
};

export default LandingPage;