import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Link
} from '@mui/material';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:1200px)');
  const [loaded, setLoaded] = React.useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
        overflow: 'hidden'
      }}
      id="contacto"
    >
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 'bold',
            color: theme.palette.primary.dark,
            fontSize: isMobile ? '2rem' : '2.5rem'
          }}
        >
          Contáctanos
        </Typography>

        {/* Contenedor principal con Flexbox */}
        <Box sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 4,
          alignItems: 'stretch'
        }}>
          {/* Mapa - Columna izquierda */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Slide direction="right" in={loaded} timeout={800}>
              <Box sx={{ height: '100%', minHeight: '500px' }}>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.262236330763!2d-72.85380171004992!3d-38.602492806774634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966ad17526877055%3A0x8b034f21a6703ff3!2sJose%20Joaquin%20Perez%20449%2C%20Cholchol%2C%20Araucan%C3%ADa%2C%20Chile!5e1!3m2!1ses-419!2sus!4v1747087324743!5m2!1ses-419!2sus" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Ubicación Municipalidad de Cholchol"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(0,0,0,0.1))',
                    pointerEvents: 'none'
                  }}
                />
              </Box>
            </Slide>
          </Box>
          {/* Formulario - Columna central */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Fade in={loaded} timeout={1000}>
              <Box
                sx={{
                  background: 'white',
                  borderRadius: '12px',
                  p: 4,
                  boxShadow: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <ContactForm />
              </Box>
            </Fade>
          </Box>

          {/* Datos de contacto - Columna derecha */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Fade in={loaded} timeout={1200}>
              <Box
                sx={{
                  background: 'white',
                  borderRadius: '12px',
                  p: 4,
                  boxShadow: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Typography 
                  variant="h4" 
                  component="h3"
                  sx={{
                    mb: 4,
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                    textAlign: 'center'
                  }}
                >
                  Información de Contacto
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {[
                    {
                      icon: '📞',
                      title: 'Teléfono',
                      content: '452 734200',
                      link: 'tel:+56452734200'
                    },
                    {
                      icon: '✉️',
                      title: 'Correo Electrónico',
                      content: 'contacto@municholchol.cl',
                      link: 'mailto:contacto@municholchol.cl'
                    },
                    {
                      icon: '🕒',
                      title: 'Horario de Atención',
                      content: 'Lunes a Viernes: 8:30 - 16:00 hrs'
                    },
                    {
                      icon: '📍',
                      title: 'Dirección',
                      content: 'JOSÉ JOAQUÍN PÉREZ, 449, Cholchol'
                    }
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Box sx={{ 
                        fontSize: '1.5rem', 
                        mr: 2,
                        color: "black"
                      }}>
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ 
                          mb: 0.5,
                          fontWeight: 600,
                          color: theme.palette.primary.dark
                        }}>
                          {item.title}
                        </Typography>
                        {item.link ? (
                          <Link 
                            href={item.link} 
                            color="black" 
                            underline="hover"
                            sx={{ display: 'block' }}
                          >
                            {item.content}
                          </Link>
                        ) : (
                          <Typography variant="body1" color="black">
                            {item.content}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Fade>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;