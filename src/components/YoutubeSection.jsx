import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  SvgIcon,
  Stack,
  useTheme,
  useMediaQuery
} from "@mui/material";

const YoutubeSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card
      sx={{
        width: '100%',
        minHeight: 300,
        borderRadius: 4,
        overflow: "hidden",
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "white",
        position: "relative",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Badge "EN VIVO" en esquina superior derecha */}
      <Chip
        label="EN VIVO"
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          bgcolor: "#ff0000",
          color: "white",
          fontWeight: "bold",
          animation: "pulse 2s infinite",
          zIndex: 2,
          '@keyframes pulse': {
            '0%': { opacity: 1 },
            '50%': { opacity: 0.7 },
            '100%': { opacity: 1 },
          }
        }}
      />

      <CardContent
        sx={{
          height: '100%',
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Contenido principal (textos) */}
        <Box>
          <Typography variant={isSmallScreen ? "h5" : "h4"} fontWeight={700} gutterBottom>
            TRANSMISIONES EN DIRECTO
          </Typography>
          <Typography 
            variant={isSmallScreen ? "h6" : "h5"} 
            color="#a8c0ff" 
            fontWeight={600} 
            gutterBottom
          >
            Concejos Municipales
          </Typography>
          <Typography variant="body1" opacity={0.9}>
            Sigue las sesiones de tu gobierno local en tiempo real a través de YouTube
          </Typography>
        </Box>

        {/* Contenedor para logo de YouTube y botón (esquina inferior derecha) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            gap: 2,
            mt: 4
          }}
        >
          {/* Logo de YouTube */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              order: { xs: 2, sm: 1 } 
            }}
          >
            <SvgIcon sx={{ fontSize: 32 }}>
              <svg viewBox="0 0 24 24">
                <path
                  fill="red"
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                />
              </svg>
            </SvgIcon>
            <Typography ml={1} variant="h6" fontWeight={500}>
              YouTube
            </Typography>
          </Box>

          {/* Botón "Ver transmisiones en vivo" */}
          <Button
            variant="contained"
            color="error"
            size="large"
            sx={{ 
              fontWeight: 600,
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              order: { xs: 1, sm: 2 },
              width: { xs: '100%', sm: 'auto' }
            }}
          >
            VER TRANSMISIONES EN VIVO
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default YoutubeSection;