import React from 'react';
import { Grid, Container, useMediaQuery, useTheme, Box } from '@mui/material';
import InfoCard from './InfoCard';

const BenefitsSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid 
        container 
        spacing={3}
        sx={{
          display: 'flex',
          flexWrap: 'nowrap', // Evita que las cards se envuelvan a nueva línea
          paddingBottom: 2, // Espacio para el scroll
          
        }}
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <Grid 
            item 
            key={index} 
            sx={{
              minWidth: isSmallScreen ? '280px' : '320px', // Ancho mínimo para cada card
              flexShrink: 0, // Evita que las cards se reduzcan
              paddingRight: 2 // Espacio entre cards
            }}
          >
            <Box sx={{
              width: '100%',
              height: '100%'
            }}>
              <InfoCard />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BenefitsSection;