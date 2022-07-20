

import React from 'react'

import { Box, Stack, Typography } from '@mui/material'
import { AdAccountCard } from '../components/adAccount-card'
import { DashboardLayout } from '../components/dashboard-layout';


//FAKER
import { faker } from '@faker-js/faker'

/**
 * Esta página va a desplegar la lista de cuentas de anuncios que tiene el usuario contectadas
 * a la herramienta de Startop. Se despliega cuando se accede al apartado de "campañas" en el sidebar.
 * @returns 
 */
const ListAdaccounts = () => (
  <>
  <Typography variant="body1" 
  color="initial"
  sx={{mt:2}}>
    Seleccionar una cuenta de anuncios de la lista para ver sus campañas activas
  </Typography>

    <Box sx={{ px: 2, pr: 4, mt: 6, display: 'flex', justifyContent: 'center' }}>
      <Stack gap={4}
        sx={{ width: '60%' }}>
        <AdAccountCard
          name={faker.company.companyName()}
          id={faker.random.alphaNumeric(12).toUpperCase()}
        />
        <AdAccountCard
          name={faker.company.companyName()}
          id={faker.random.alphaNumeric(12).toUpperCase()}
        />
        <AdAccountCard
          name={faker.company.companyName()}
          id={faker.random.alphaNumeric(12).toUpperCase()}
        />
        <AdAccountCard
          name={faker.company.companyName()}
          id={faker.random.alphaNumeric(12).toUpperCase()}
        />
        <AdAccountCard
          name={faker.company.companyName()}
          id={faker.random.alphaNumeric(12).toUpperCase()}
        />
        <AdAccountCard
          name={faker.company.companyName()}
          id={faker.random.alphaNumeric(12).toUpperCase()}
        />
      </Stack>


    </Box>
  </>
);


ListAdaccounts.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default ListAdaccounts;
