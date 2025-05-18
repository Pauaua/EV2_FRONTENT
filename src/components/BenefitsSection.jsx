import React from 'react';
import { Grid, Container, useMediaQuery, useTheme, Box } from '@mui/material';
import InfoCard from './InfoCard';

const benefitsData = [
  {
    headerTitle: "Beneficio Social",
    headerDate: "Lunes 20 de mayo",
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
        {benefitsData.map((card, index) => (
          <Grid 
            item 
            key={index} 
            sx={{
              minWidth: isSmallScreen ? '280px' : '320px',
              flexShrink: 0,
              paddingRight: 2
            }}
          >
            <Box sx={{
              width: '100%',
              height: '100%'
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