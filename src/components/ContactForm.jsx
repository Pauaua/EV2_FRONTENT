import { TextField, Button, Box, Typography, Alert, useTheme, CircularProgress } from '@mui/material';
import React, { useState } from 'react';

const ContactForm = () => {
    const theme = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccess(false);
        } else {
            setSubmitting(true);
            setErrors({});
            // Simula envío
            setTimeout(() => {
                setSuccess(true);
                setSubmitting(false);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSuccess(false), 3000); // Oculta mensaje de éxito después de 3s
            }, 1500);
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El correo electrónico no es válido';
        }
        if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';
        return newErrors;
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <Typography variant="h4" component="h3"
                sx={{ mb: 3, textAlign: 'center', color: theme.palette.primary.dark }}>
                Envíanos un mensaje
            </Typography>

            {success && <Alert severity="success" sx={{ mb: 2 }}>¡Mensaje enviado con éxito!</Alert>}
            {Object.keys(errors).length > 0 && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    Por favor corrige los errores indicados.
                </Alert>
            )}

            <TextField
                label="Nombre"
                fullWidth
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={!!errors.name}
                helperText={errors.name}
                sx={{ mb: 2 }}
                disabled={submitting}
            />

            <TextField
                label="Correo Electrónico"
                fullWidth
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={!!errors.email}
                helperText={errors.email}
                sx={{ mb: 2 }}
                disabled={submitting}
            />

            <TextField
                label="Mensaje"
                fullWidth
                multiline
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                error={!!errors.message}
                helperText={errors.message}
                sx={{ mb: 3 }}
                disabled={submitting}
            />

            <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                disabled={submitting}
                startIcon={submitting && <CircularProgress size={20} />}
            >
                {submitting ? 'Enviando...' : 'Enviar Mensaje'}
            </Button>
        </Box>
    );
};

export default ContactForm;