import React from 'react';
import {
  Box,
  Container,
  Typography,
  Divider,
  Link,
  useMediaQuery
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon
} from '@mui/icons-material';

const Footer = () => {
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a252f',
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        {/* Contenedor principal con flexbox */}
        <Box sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 4,
          mb: 4
        }}>
          {/* Sección izquierda - Datos de contacto */}
          <Box sx={{
            width: isMobile ? '100%' : '60%',
            order: isMobile ? 2 : 1
          }}>
            <Typography
              variant="h6"
              component="h4"
              sx={{
                mb: 3,
                fontStyle: 'italic',
                fontWeight: 'light',
                color: 'white'
              }}
            >
              "Cholchol, tierra de tradiciones y progreso, donde el corazón de la Araucanía late con fuerza"
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" component="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                Municipalidad de Cholchol
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <LocationIcon sx={{ mr: 1.5, color: '#e74c3c' }} />
                <Typography>
                  JOSÉ JOAQUÍN PÉREZ, 449, Cholchol.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <EmailIcon sx={{ mr: 1.5, color: '#e74c3c' }} />
                <Link href="mailto:contacto@municholchol.cl" color="inherit" underline="hover">
                  contacto@municholchol.cl
                </Link>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ mr: 1.5, color: '#e74c3c' }} />
                <Typography>
                  452 734200
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Horario de atención: Lunes a Viernes de 8:30 a 16:00 hrs.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link href="#" color="inherit">
                  <FacebookIcon fontSize="medium" />
                </Link>
                <Link href="#" color="inherit">
                  <InstagramIcon fontSize="medium" />
                </Link>
                <Link href="#" color="inherit">
                  <TwitterIcon fontSize="medium" />
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Sección derecha - Logo */}
          <Box sx={{
            width: isMobile ? '100%' : '35%',
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-end',
            order: isMobile ? 1 : 2
          }}>
            <img
              src="/assets/LOGO.png"
              alt="Logo Municipalidad de Cholchol"
              style={{
                height: isMobile ? '120px' : '180px',
                width: 'auto',
                maxWidth: '100%',
                border: '2px solid rgba(255,255,255,0.3)',
                borderRadius: '50px',
                padding: '4px',
                opacity: 0.9,
                '&:hover': {
                  opacity: 1
                }
              }}
            />
          </Box>
        </Box>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.2)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2">
            © 2025 Municipalidad de Cholchol. Todos los derechos reservados.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
              Políticas de Privacidad
            </Link>
            |
            <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
              Términos de Uso
            </Link>
            |
            <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
              Mapa del Sitio
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;