import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

export const SettingsPassword = (props) => {

  const formik = useFormik({
    initialValues: {
      currentPassword: '', // AQUI VA A IR EL CURRENT PASSWORD (esta lleno aqui)
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      currentPassword: Yup
        .string().required('Obligatorio'),
      newPassword: Yup
        .string().required('Obligatorio'),
      confirmPassword: Yup
        .string().required('Obligatorio'),
    }),
    onSubmit: () => {
      alert('Aqui se hace el cambio del password en la DB')
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader
          subheader="Cambiar contraseña" // esto de aqui se cambio
          title="Seguridad"
        />
        <Divider />
        <CardContent>
        <TextField
            fullWidth
            label="Contraseña actual"
            margin="normal"
            name="currentPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            value={formik.values.currentPassword}
            variant="outlined"
          />
          <TextField
            fullWidth
            error={Boolean( formik.touched.newPassword && formik.errors.newPassword )}
            helperText={formik.touched.newPassword && formik.errors.newPassword}
            label="Nueva contraseña"
            margin="normal"
            name="newPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            value={formik.values.newPassword}
            variant="outlined"
          />
          <TextField
            fullWidth
            error={Boolean(formik.touched.confirmPassword && formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            label="Reescribir nueva contraseña"
            margin="normal"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            value={formik.values.confirmPassword}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
          > 
          {/** disabled={formik.isSubmitting} 
            LUEGO HACER QUE SOLO SE PERMITA HACER CAMBIOS DE CONTRASEÑA CADA DOS
            DÍAS O ASÍ. AHI ENTRARIA ESTE PROP DEL COMPONENTE
          */}
            Guardar contraseña
          </Button>
        </Box>
      </Card>
    </form>
  );
};
