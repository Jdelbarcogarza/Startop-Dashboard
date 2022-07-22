
import React from 'react'
import { DashboardLayout } from 'src/components/dashboard-layout'
import { ConnectAdAccountCard } from 'src/components/adAccountCard/connect-account-card'
import { AdAccountListLayout } from 'src/components/adAccount-list-layout';


import { faker } from '@faker-js/faker'
import { Box, Typography, Button } from '@mui/material'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const connectAdAccounts = () => {
  return (
    <>

      <AdAccountListLayout>

        <ConnectAdAccountCard name={faker.company.companyName()}
          id={faker.random.alphaNumeric(12).toUpperCase()}
        />

        <ConnectAdAccountCard name={faker.company.companyName()}
          id={faker.random.alphaNumeric(12).toUpperCase()}
        />

        <ConnectAdAccountCard name={faker.company.companyName()}
          id={faker.random.alphaNumeric(12).toUpperCase()}
        />

        <ConnectAdAccountCard name={faker.company.companyName()}
          id={faker.random.alphaNumeric(12).toUpperCase()}
        />

        <ConnectAdAccountCard name={faker.company.companyName()}
          id={faker.random.alphaNumeric(12).toUpperCase()}
        />
      </AdAccountListLayout>

      {/** Boton que termina de registrar inicialmente las ad accounts en la plataforma */}
      <Button variant="contained" 
      endIcon={<ArrowForwardOutlinedIcon/>}
      color="primary"
      sx={{position: 'fixed', right: '5%', bottom: 64}}>
        Terminar
      </Button>

    </>
  )
}

connectAdAccounts.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
)

export default connectAdAccounts