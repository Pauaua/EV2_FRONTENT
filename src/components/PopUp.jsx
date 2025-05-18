import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';

function PopUp() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Abrir el popup al cargar la página
    setOpen(true);
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Pago Permiso de Circulación 2024
      </DialogTitle>
      <DialogContent sx={{ textAlign: 'center' }}>
        <Box
          component="img"
          src="/assets/popup.jpg" // Cambia la ruta por tu imagen
          alt="Pago Permiso de Circulación"
          sx={{ width: '100%', maxHeight: 180, objectFit: 'cover', borderRadius: 2, mb: 2 }}
        />
        <Typography variant="body1" sx={{ mb: 2 }}>
          Ya puedes pagar tu permiso de circulación en línea o en la nueva oficina ubicada en José Joaquín Pérez 449, Cholchol.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          href="https://portalweb.insico.cl/Cholchol/Permisos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir a pago en línea
        </Button>
        <Button onClick={handleClose} color="secondary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PopUp;