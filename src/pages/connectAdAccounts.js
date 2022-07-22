
import React from 'react'
import { DashboardLayout } from 'src/components/dashboard-layout'
import { ConnectAdAccountCard } from 'src/components/adAccountCard/connect-account-card'
import { AdAccountListLayout } from 'src/components/adAccount-list-layout';


import { faker } from '@faker-js/faker'
import { Box, Typography } from '@mui/material'


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
    </>
  )
}

connectAdAccounts.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
)

export default connectAdAccounts