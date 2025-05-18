import React from 'react';
import { Grid, Container, useMediaQuery, useTheme, Box } from '@mui/material';
import InfoCard from './InfoCard';

const cardsData = [
  {
    headerTitle: "Apoyo Municipal",
    headerDate: "Martes 13 de mayo",
    image: "assets/apoyomunicipal.jpg", // Cambia la ruta por la imagen que desees mostrar
    mainTitle: "100 jóvenes de Cholchol son beneficiados con becas para sus estudios superiores",
    mainText: "El municipio de Cholchol ha entregado becas a 100 jóvenes para apoyar su educación superior.",
    buttons: [
      { label: 'REVISA LOS RESULTADOS', onClick: () => alert('Revisar') },
      { label: 'MÁS INFORMACIÓN', href: 'https://www.municholchol.cl', external: true }
    ]
  },
  {
    headerTitle: "Derechos Ciudadanos",
    headerDate: "Miércoles 22 de mayo",
    image: "assets/derechosciudadanos.jpg",
    mainTitle: "Municipio reconoce a dirigentes sociales que lucharon por la comuna",
    mainText: "Por primera vez se rinde homenaje a los y las vecinas que trabajaron durante años por CholChol.",
    buttons: [
      { label: 'VER GALERÍA', href: 'https://www.municholchol.cl', external: true }
    ]
  }
];

const InfoSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid
        container
        spacing={3}
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          paddingBottom: 2,
        }}
      >
        {cardsData.map((card, index) => (
          <Grid
            item
            key={index}
            sx={{
              minWidth: isSmallScreen ? '280px' : '320px',
              flexShrink: 0,
              paddingRight: 2
            }}
          >
            <Box sx={{ width: '100%', height: '100%' }}>
              <InfoCard {...card} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InfoSection;