import * as React from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  CardActionArea,
  Box
} from '@mui/material';


import cardImage1 from '/assets/card1.jpg';
import cardImage2 from '/assets/card2.jpg';

export default function CardEncuesta() {
  const cardsData = [
    {
      image: cardImage1,
      title: "ENCUESTA CIUDADANA",
      subtitle: "SOBRE GUSTOS Y ACTIVIDADES DEPORTIVAS",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScBBsnUVPRz9K-SMc7p-sMfZ_s3tTOPvUYjnOr_viCpk6u3TQ/viewform", 
      alt: "Plantel deportivo juvenil Cholchol"
    },
    {
      image: cardImage2,
      title: "ENCUESTA CIUDADANA",
      subtitle: "CAMBIO CLIMÁTICO SUS IMPACTOS Y MEDIDAS",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScbQ-UPctjQiDLlZRugqqbz1XkY-YPuxFAHfcySveaAMzvBkw/viewform", 
      alt: "Imagen del paisaje choncholino"
    }
  ];

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      gap: 4,
      flexWrap: 'wrap',
      padding: 4
    }}>
      {cardsData.map((card, index) => (
        <Card 
          key={index}
          sx={{ 
            maxWidth: 345,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
            }
          }}
        >
          <CardActionArea 
            component={"a"} 
            href={card.link}   
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={card.alt}
              sx={{
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
                sx={{ 
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
              >
                {card.title}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.secondary',
                  textAlign: 'center'
                }}
              >
                {card.subtitle}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}