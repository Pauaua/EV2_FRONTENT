import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';

const PermisoCirculacionSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '60vh' : '80vh',
        minHeight: '400px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}
    >
      {/* Imagen de fondo */}
      <Box
        component="img"
        src="assets/unidadtransito2.jpg"
        alt="Banner municipalidad"
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Overlay oscuro */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }}
      />
      
      {/* Contenido del banner */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
          px: 4,
          py: 8
        }}
      >
        <Typography
          variant={isMobile ? 'h3' : 'h2'}
          component="h1"
          sx={{
            fontWeight: 'bold',
            mb: 3,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            lineHeight: 1.2
          }}
        >
          CON TU PERMISO CHOLCHOL AVANZA
        </Typography>
        
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          component="p"
          sx={{
            mb: 4,
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          Ya puedes pagar tu permiso de circulación ONLINE
        </Typography>
        
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="https://portalweb.insico.cl/Cholchol/Permisos/" 
          sx={{
            px: 6,
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: 'bold',
            textTransform: 'none',
            boxShadow: 4,
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: 6
            },
            transition: 'all 0.3s ease'
          }}
        >
          Obtén aquí tu permiso
        </Button>
      </Box>
    </Box>
  );
};

export default PermisoCirculacionSection;