import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useTheme, useMediaQuery } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GavelIcon from '@mui/icons-material/Gavel';

const navItems = [
  { title: 'SOLICITAR INFORMACIÓN', shortTitle: 'INFO', url: 'https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=498' },
  { title: 'TRANSPARENCIA ACTIVA', shortTitle: 'TRANSPAREENCIA', url: 'https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU045' },
  { title: 'PLATAFORMA LEY LOBBY', shortTitle: 'LEY LOBBY', url: 'https://www.leylobby.gob.cl/instituciones/MU045' }

];

function PreNavbarSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" position="static"
        sx={{
          // estilos
          backgroundColor: '#3f51b5',
          height: 30,
        }}>
        <Toolbar
          sx={{
            minHeight: '30px !important',
            justifyContent: 'flex-end',
            px: 2,
          }}
        >
          <Box sx={{
            display: 'flex',
            gap: 1,
          }}>
            {navItems.map((item) => (
              <Tooltip title={item.title} key={item.title}>
              <Button
                key={item.title}
                sx={{
                  //estilos
                  color: '#fff',
                  fontSize: 10,
                  textTransform: 'none',
                  whiteSpace: 'nowrap',

                  '&:hover': {
                    backgroundColor: '#ffffff20',
                    color: '#fff',
                  },
                }}
                component="a"
                href={item.url}
                target="_blank" // Abre en nueva pestaña
              >
                {isMobile ? (
                  // Íconos para móvil
                  item.title === 'SOLICITAR INFORMACIÓN' ? <InfoIcon fontSize="small" /> :
                  item.title === 'TRANSPARENCIA ACTIVA' ? <VisibilityIcon fontSize="small" /> :
                  <GavelIcon fontSize="small" /> 
                ) : (
                  // Texto para desktop
                  item.title
                )}
              </Button>
              </Tooltip>
            ))}
          </Box>
        </Toolbar>
      </AppBar>


    </Box>
  );
}


export default PreNavbarSection;
