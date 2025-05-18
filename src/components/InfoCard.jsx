import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
  Box,
  useTheme,
  CardMedia
} from '@mui/material';
import { motion } from 'framer-motion';

const InfoCard = ({
  headerTitle,
  headerDate,
  image, 
  mainTitle,
  mainText,
  buttons = []
}) => {
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
            {headerTitle}
          </Typography>
          <Typography variant="subtitle2">
            {headerDate}
          </Typography>
        </Box>

        {/* Imagen */}
        {image && (
          <CardMedia
            component="img"
            image={image}
            alt={headerTitle}
            sx={{ width: '100%', height: 180, objectFit: 'cover' }}
          />
        )}

        <CardContent sx={{ flexGrow: 1, p: 2 }}>
          {/* Titular principal */}
          {mainTitle && (
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              {mainTitle}
            </Typography>
          )}

          {/* Texto principal */}
          {mainText && (
            <Typography variant="body2" paragraph>
              {mainText}
            </Typography>
          )}
        </CardContent>

        {/* Botones */}
        {buttons.length > 0 && (
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
            borderTop: '1px solid',
            borderColor: 'divider'
          }}>
            {buttons.map((btn, idx) => (
              <Button
                key={idx}
                size="small"
                sx={{ mx: 1 }}
                {...(btn.href
                  ? { component: 'a', href: btn.href, target: btn.external ? "_blank" : undefined, rel: btn.external ? "noopener noreferrer" : undefined }
                  : {})}
                onClick={btn.onClick}
              >
                {btn.label}
              </Button>
            ))}
          </Box>
        )}
      </Card>
    </motion.div>
  );
};

export default InfoCard;