import React from 'react';
import { Grid, Container, useMediaQuery, useTheme, Box } from '@mui/material';
import InfoCard from './InfoCard';

// Puedes agregar la propiedad 'image' a cada objeto si quieres una imagen diferente por card
const benefitsData = [
  {
    headerTitle: "Beneficio Social",
    headerDate: "Lunes 20 de mayo",
    image: "/assets/beneficiosocial.jpg", // Asegúrate de que la imagen exista en public/assets/
    mainTitle: "Entrega de cajas de alimentos",
    mainText: "El municipio realiza la entrega de cajas de alimentos a familias vulnerables de la comuna.",
    mainList: ['Requisitos para postular', 'Fechas de entrega', 'Puntos de retiro'],
    secondaryText: "Este beneficio busca apoyar a quienes más lo necesitan en tiempos difíciles.",
    secondaryList: [
      'Consulta si eres beneficiario en la web municipal',
      'Recuerda llevar tu cédula de identidad al momento del retiro'
    ],
    buttons: [
      { label: 'POSTULAR', onClick: () => alert('Postular') },
      { label: 'MÁS INFORMACIÓN', href: 'https://www.municholchol.cl/beneficios', external: true }
    ]
  },
  {
    headerTitle: "Salud Municipal",
    headerDate: "Miércoles 22 de mayo",
    image: "/assets/saludmunicipal.jpeg",
    mainTitle: "Operativos médicos gratuitos",
    mainText: "Participa en los operativos médicos gratuitos organizados por el municipio.",
    mainList: ['Consultas generales', 'Vacunación', 'Atención dental'],
    secondaryText: "Los operativos se realizarán en distintos sectores de la comuna.",
    secondaryList: [
      'Revisa el calendario de operativos',
      'Atención por orden de llegada'
    ],
    buttons: [
      { label: 'VER CALENDARIO', href: 'https://www.municholchol.cl/salud', external: true }
    ]
  }
];

const BenefitsSection = () => {
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
        {benefitsData.map((card, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={12}
            md={6}
            sx={{
              minWidth: isMobile ? '100%' : isTablet ? '320px' : '320px',
              flexShrink: 0,
              paddingRight: !isMobile && !isTablet && index !== benefitsData.length - 1 ? 2 : 0,
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

export default BenefitsSection;