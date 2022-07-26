import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { formatRelative } from 'date-fns';

export const SettingsPassword = (props) => {
  const [values, setValues] = useState({
    currentPassword2: '',
    password: '',
    confirm: ''
  });

  const formik = useFormik({
    initialValues: {
      currentPassword: '', // AQUI VA A IR EL CURRENT PASSWORD (esta lleno aqui)
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      currentPassword: Yup
        .string(),
      newPassword: Yup
        .string(),
      confirmPassword: Yup
        .string(),
    }),
    onSubmit: () => {
      alert('Aqui se hace el cambio del password en la DB')
    }
  })

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form {...props}
    onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader
          subheader="Update password"
          title="Password"
        />
        <Divider />
        <CardContent>
        <TextField
            fullWidth
            label="Contraseña actual"
            margin="normal"
            name="currentPassword"
            onChange={formik.handleChange}
            type="password"
            value={formik.values.currentPassword}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Nueva contraseña"
            margin="normal"
            name="newPassword"
            onChange={formik.handleChange}
            type="password"
            value={formik.values.newPassword}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Reescribir nueva contraseña"
            margin="normal"
            name="confirmPassword"
            onChange={formik.handleChange}
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
