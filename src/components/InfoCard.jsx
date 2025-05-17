import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Box,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';

const InfoCard = () => {
  const theme = useTheme();

  return (
    <motion.div whileHover={{ y: -5 }}>
      <Card sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
        }
      }}>
        {/* Encabezado */}
        <Box sx={{
          bgcolor: theme.palette.primary.main,
          color: 'white',
          p: 2,
          textAlign: 'center'
        }}>
          <Typography variant="h6" component="h2" fontWeight="bold">
            Comercio Municipal
          </Typography>
          <Typography variant="subtitle2">
            martes 13 de mayo
          </Typography>
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 2 }}>
          {/* Titular principal */}
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Tras 12 años de ausencia vuelve el modelismo naval al Parque Bustamante
          </Typography>

          {/* Sección veterinarios */}
          <Typography variant="body2" paragraph>
            Estas son las fechas de los operativos veterinarios gratuitos de mayo
          </Typography>
          
          <List dense sx={{ py: 0, mb: 1 }}>
            {['Emprendimiento', 'Emprendimiento', 'Municipalidad'].map((item, index) => (
              <ListItem key={index} sx={{ px: 0, py: 0 }}>
                <ListItemText
                  primary={
                    <Box display="flex" alignItems="center">
                      <Box sx={{
                        width: 6,
                        height: 6,
                        bgcolor: theme.palette.primary.main,
                        borderRadius: '50%',
                        mr: 1
                      }} />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 1 }} />

          {/* Sección comerciantes */}
          <Typography variant="body2" paragraph>
            Providencia apoya a comerciantes locales con la entrega de nuevos carros de confites
          </Typography>
          
          <List dense sx={{ py: 0 }}>
            {[
              'Apoyemos al comercio de barrio: Conoce las ferias libres de Providencia',
              'Infórmate de las fechas para renovar tu licencia los sábados de mayo'
            ].map((item, index) => (
              <ListItem key={index} sx={{ px: 0, py: 0 }}>
                <ListItemText
                  primary={
                    <Box display="flex" alignItems="center">
                      <Box sx={{
                        width: 6,
                        height: 6,
                        bgcolor: theme.palette.primary.main,
                        borderRadius: '50%',
                        mr: 1
                      }} />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        </CardContent>

        {/* Botones */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          borderTop: '1px solid',
          borderColor: 'divider'
        }}>
          <Button size="small" sx={{ mx: 1 }}>COMPARTIR</Button>
          <Button size="small" sx={{ mx: 1 }}>MÁS INFORMACIÓN</Button>
        </Box>
      </Card>
    </motion.div>
  );
};

export default InfoCard;