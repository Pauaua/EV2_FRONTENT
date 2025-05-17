import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import logo from '../assets/LOGO.png';

const pages = ['MUNICIPIO', 'UNIDADES MUNICIPALES', 'INFORMACIONES', 'NÚMEROS DE UTILIDAD'];
const settings = ['ACCESO PANEL USUARIO', 'REGÍSTRATE COMO CHONCHOLINO/A'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" 
    sx={{ backgroundColor: 'rgba(64, 64, 142, 0.1)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          {/* Layout para desktop */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' },
            width: '100%',
            alignItems: 'center'
          }}>
            {/* Logo a la izquierda */}
            <a href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
              <Box 
                component="img"
                src={logo}
                alt="Logo Municipalidad"
                sx={{ 
                  height: 120, 
                  width: 'auto',
                  cursor: 'pointer',
                  mr: 4
                }}
              />
            </a>

            {/* Menú centrado */}
            <Box sx={{ 
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center'
            }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ 
                    my: 0,
                    mx: 1,
                    color: 'white',
                    display: 'block',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    letterSpacing: '0.02rem',
                    px: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(85, 116, 166, 0.1)'
                    }
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* Avatar a la derecha */}
            <Box sx={{ flexShrink: 0, ml: 4 }}>
              <Tooltip title="Configuración de usuario">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar 
                    alt="Usuario" 
                    src="/static/images/avatar/2.jpg" 
                    sx={{ width: 50, height: 50 }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          {/* Layout para móviles */}
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'flex', md: 'none' },
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            {/* Ícono menú hamburguesa */}
            <IconButton
              size="large"
              aria-label="menu de navegación"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* Logo móvil */}
            <Box sx={{ 
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              mx: 2
            }}>
              <a href="/" style={{ textDecoration: 'none' }}>
                <Box 
                  component="img"
                  src={logo}
                  alt="Logo Municipalidad"
                  sx={{ 
                    height: 80,
                    width: 'auto',
                    maxHeight: '80px',
                    cursor: 'pointer',
                    objectFit: 'contain'
                  }}
                />
              </a>
            </Box>

            {/* Avatar móvil */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Acceso Usuarios">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar 
                    alt="Usuario" 
                    src="/static/images/avatar/2.jpg" 
                    sx={{ width: 50, height: 50 }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          {/* Menú desplegable móvil */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ 
              display: { xs: 'block', md: 'none' },
              '& .MuiPaper-root': {
                backgroundColor: '#3a5169'
              }
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography 
                  sx={{ 
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '0.9rem'
                  }}
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>

          {/* Menú de usuario*/}
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            PaperProps={{
              sx: {
                backgroundColor: '#3a5169',
                color: 'white'
              }
            }}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography 
                  sx={{ 
                    textAlign: 'center',
                    fontSize: '0.9rem'
                  }}
                >
                  {setting}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;