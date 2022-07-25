
import React from 'react'
import { DashboardLayout } from 'src/components/dashboard-layout'
import { ConnectAdAccountCard } from 'src/components/adAccountCard/connect-account-card'
import { AdAccountListLayout } from 'src/components/adAccount-list-layout';


import { faker } from '@faker-js/faker'
import { Box, Typography, Button, Container } from '@mui/material'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const connectAdAccounts = () => {
  return (
    <>


      <Container sx={{ position: 'fixed', backgroundColor: 'background.default', zIndex: 2, }}>
        <Typography variant="h5"
          color="primary.text"
          sx={{ textAlign: 'center', py: 2, }}>
            Conectar cuentas de anuncios
        </Typography>
      </Container>

      <Box sx={{mt:8}}>
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
      </Box>

      {/** Boton que termina de registrar inicialmente las ad accounts en la plataforma */}
      <Button variant="contained"
        endIcon={<ArrowForwardOutlinedIcon />}
        color="primary"
        sx={{ position: 'fixed', right: '5%', bottom: 64 }}>
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