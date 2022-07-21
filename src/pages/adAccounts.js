

import React from 'react'

import { Box, Stack } from '@mui/material'
import { AdAccountActionCard } from '../components/adAccountCard/action-account-card'
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
  
    <Box sx={{ px: 2, pr: 4, mt: 6, display: 'flex', justifyContent: 'center' }}>
      <Stack gap={4}
        sx={{ width: '60%' }}>
        <AdAccountActionCard
          name={faker.company.companyName()}
          id={faker.random.alphaNumeric(12).toUpperCase()}
        />
        <AdAccountActionCard
          name={faker.company.companyName()}
          id={faker.random.alphaNumeric(12).toUpperCase()}
        />
        <AdAccountActionCard
          name={faker.company.companyName()}
          id={faker.random.alphaNumeric(12).toUpperCase()}
        />
        <AdAccountActionCard
          name={faker.company.companyName()}
          id={faker.random.alphaNumeric(12).toUpperCase()}
        />
        <AdAccountActionCard
          name={faker.company.companyName()}
          id={faker.random.alphaNumeric(12).toUpperCase()}
        />
        <AdAccountActionCard
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
