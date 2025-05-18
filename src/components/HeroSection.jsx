import React from 'react';
import { Box, Button, Typography, Container, Paper } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import heroImage1 from '/assets/hero1.jpg';
import heroImage2 from '/assets/hero2.JPG';
import heroImage3 from '/assets/hero3.png';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true
  };

  const slides = [
    {
      image: heroImage1,
      title: "Ya puedes pagar tu",
      subtitle: "Permiso de Circulación Online",
      buttonText: "Pagar Ahora",
      buttonLink: "/pago-permiso",
      secondaryText: "Con tu permiso Cholchol Avanza!"
    },
    {
      image: heroImage2,
      title: "Participa en Nuestras Actividades",
      subtitle: "Eventos culturales y comunitarios",
      buttonText: "Calendario",
      buttonLink: "/eventos",
      secondaryText: "CHOL-CHOL CHALI"
    },
    {
      image: heroImage3,
      title: "Información Transparente",
      subtitle: "Accede a nuestros portales de transparencia",
      buttonText: "Portal de Transparencia",
      buttonLink: "/transparencia",
      secondaryText: "Municipalidad de Cholchol"
    }
  ];

  return (
    <Box sx={{ 
      position: 'relative',
      height: { xs: '60vh', md: '80vh' },
      overflow: 'hidden'
    }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} sx={{
            position: 'relative',
            height: { xs: '60vh', md: '80vh' },
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }
          }}>
            <Container maxWidth="md" sx={{
              position: 'relative',
              zIndex: 1,
              textAlign: 'center',
              color: 'white',
              px: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}>
              <Paper elevation={6} sx={{
                px: 4,
                py: 3,
                backgroundColor: 'rgba(242, 237, 237, 0.6)',
                borderRadius: 2,
                maxWidth: '80%',
                backdropFilter: 'blur(2px)'
              }}>
                <Typography 
                  variant="h2" 
                  component="h1"
                  sx={{
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                    fontWeight: 700,
                    mb: 1,
                    lineHeight: 1.2,
                    textTransform: 'uppercase'
                  }}
                >
                  {slide.title}
                </Typography>
                
                <Typography 
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 600,
                    mb: 3,
                    lineHeight: 1.2,
                    textTransform: 'uppercase'
                  }}
                >
                  {slide.subtitle}
                </Typography>
                
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                  href={slide.buttonLink}
                  sx={{
                    px: 4,
                    py: 1,
                    fontSize: '1rem',
                    fontWeight: 600,
                    mb: 3,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: 3
                    }
                  }}
                >
                  {slide.buttonText}
                </Button>
                
                <Typography 
                  variant="subtitle1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    fontStyle: 'italic',
                    mt: 2,
                    color: 'primary.light'
                  }}
                >
                  {slide.secondaryText}
                </Typography>
              </Paper>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection;