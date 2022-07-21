
import React from 'react'
import { DashboardLayout } from 'src/components/dashboard-layout'
import { ConnectAdAccountCard } from 'src/components/adAccountCard/connect-account-card'
import { Box, Stack } from '@mui/material'

import { faker } from '@faker-js/faker'

const connectAdAccounts = () => {
  return (
    <>
      <Box sx={{ px: 2, pr: 4, mt: 6, display: 'flex', justifyContent: 'center' }}>
        <Stack gap={4}
          sx={{ width: '60%' }}>

          <ConnectAdAccountCard name={faker.company.companyName()}
            id={faker.random.alphaNumeric(12).toUpperCase()}
          />

          <ConnectAdAccountCard name={faker.company.companyName()}
            id={faker.random.alphaNumeric(12).toUpperCase()}
          />

          <ConnectAdAccountCard name={faker.company.companyName()}
            id={faker.random.alphaNumeric(12).toUpperCase()}
          />

        </Stack>
      </Box>
    </>
  )
}

connectAdAccounts.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
)

export default connectAdAccounts