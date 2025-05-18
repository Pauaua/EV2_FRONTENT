import React from 'react';
import { Grid, Container, useMediaQuery, useTheme, Box } from '@mui/material';
import InfoCard from './InfoCard';

const cardsData = [
  {
    headerTitle: "Apoyo Municipal",
    headerDate: "Martes 13 de mayo",
    image: "/assets/apoyomunicipal.jpeg",
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
    image: "/assets/derechosciudadanos.jpeg",
    mainTitle: "Municipio reconoce a dirigentes sociales que lucharon por la comuna",
    mainText: "Por primera vez se rinde homenaje a los y las vecinas que trabajaron durante años por CholChol.",
    buttons: [
      { label: 'VER GALERÍA', href: 'https://www.municholchol.cl', external: true }
    ]
  }
];

const InfoSection = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md')); // md = 900px
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // sm = 600px

  return (
    <Container maxWidth="lg" sx={{ py: isMobile ? 2 : 4 }}>
      <Grid
        container
        spacing={isMobile ? 2 : 3}
        direction={isMobile || isTablet ? 'column' : 'row'}
        sx={{
          display: 'flex',
          flexWrap: isMobile || isTablet ? 'wrap' : 'nowrap',
          paddingBottom: 2,
          alignItems: isMobile ? 'stretch' : 'flex-start',
        }}
      >
        {cardsData.map((card, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={12}
            md={6}
            sx={{
              minWidth: isMobile ? '100%' : isTablet ? '320px' : '320px',
              flexShrink: 0,
              paddingRight: !isMobile && !isTablet && index !== cardsData.length - 1 ? 2 : 0,
              paddingBottom: isMobile || isTablet ? 2 : 0,
              display: 'flex'
            }}
          >
            <Box sx={{
              width: '100%',
              height: '100%',
              display: 'flex'
            }}>
              <InfoCard {...card} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InfoSection;