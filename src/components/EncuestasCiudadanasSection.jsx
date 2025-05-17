import React from 'react';
import { Typography, Container } from '@mui/material';
import CardEncuesta from './CardEncuesta';

function EncuestasCiudadanasSection() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography 
        variant="h2" 
        component="h1"
        sx={{ 
          textAlign: 'center',
          mb: 6,
          fontWeight: 'bold',
          color: 'primary.main'
        }}
      >
        ENCUESTAS CIUDADANAS
      </Typography>
      <CardEncuesta/>
    </Container>
  );
}

export default EncuestasCiudadanasSection;