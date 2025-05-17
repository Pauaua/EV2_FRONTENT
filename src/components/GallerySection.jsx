import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  IconButton, 
  Modal,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { 
  Close as CloseIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


import galleryImage1 from '../assets/gallery1.jpg';
import galleryImage2 from '../assets/gallery2.jpg';
import galleryImage3 from '../assets/gallery3.jpg';
import galleryImage4 from '../assets/gallery4.jpg';
import galleryImage5 from '../assets/gallery5.jpg';
import galleryImage6 from '../assets/gallery6.jpg';
import galleryImage7 from '../assets/gallery7.jpg';
import galleryImage8 from '../assets/gallery8.jpg';
import galleryImage9 from '../assets/gallery9.jpg';

const GallerySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = [
    { img: galleryImage1, title: 'Evento Comunitario 2023' },
    { img: galleryImage2, title: 'Feria Artesanal' },
    { img: galleryImage3, title: 'Concierto Municipal' },
    { img: galleryImage4, title: 'Talleres Educativos' },
    { img: galleryImage5, title: 'Celebración Aniversario' },
    { img: galleryImage6, title: 'Deportes Locales' },
    { img: galleryImage7, title: 'Proyectos Ambientales' },
    { img: galleryImage8, title: 'Infraestructura Nueva' },
    { img: galleryImage9, title: 'Cultura y Tradición' },
  ];

  const handleOpen = (index) => {
    setSelectedImage(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigateImage = (direction) => {
    if (direction === 'prev') {
      setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    } else {
      setSelectedImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Typography 
        variant="h2" 
        component="h2"
        sx={{ 
          textAlign: 'center',
          mb: 6,
          fontWeight: 'bold',
          color: 'primary.main',
          fontSize: { xs: '2rem', md: '3rem' }
        }}
      >
        GALERÍA MULTIMEDIA
      </Typography>

      <ImageList 
        variant="masonry" 
        cols={isMobile ? 2 : 3} 
        gap={16}
        sx={{
          width: '100%',
          height: 'auto',
          overflow: 'hidden',
          transition: 'all 0.3s ease'
        }}
      >
        {galleryImages.map((item, index) => (
          <ImageListItem 
            key={item.img} 
            onClick={() => handleOpen(index)}
            sx={{
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.03)',
                '& img': {
                  filter: 'brightness(0.7)'
                },
                '& .MuiImageListItemBar-root': {
                  opacity: 1
                }
              }
            }}
          >
            <img
              src={`${item.img}?w=400&fit=crop&auto=format`}
              srcSet={`${item.img}?w=400&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: '8px',
                transition: 'filter 0.3s ease'
              }}
            />
            <ImageListItemBar
              title={item.title}
              sx={{
                opacity: 0,
                transition: 'opacity 0.3s ease',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Modal para vista ampliada */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(5px)'
        }}
      >
        <Box sx={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          outline: 'none'
        }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 2,
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.8)'
              }
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>

          <IconButton
            onClick={() => navigateImage('prev')}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 2,
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.8)'
              }
            }}
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>

          <IconButton
            onClick={() => navigateImage('next')}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 2,
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.8)'
              }
            }}
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>

          <img
            src={galleryImages[selectedImage].img}
            alt={galleryImages[selectedImage].title}
            style={{
              maxWidth: '100%',
              maxHeight: '90vh',
              borderRadius: '8px',
              boxShadow: theme.shadows[10]
            }}
          />

          <Box sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: 'rgba(0,0,0,0.7)',
            color: 'white',
            p: 2,
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px'
          }}>
            <Typography variant="h6">
              {galleryImages[selectedImage].title}
            </Typography>
            <Typography variant="body2">
              {selectedImage + 1} / {galleryImages.length}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default GallerySection;