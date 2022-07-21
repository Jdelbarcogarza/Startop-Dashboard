
import React from 'react'
import { DashboardLayout } from 'src/components/dashboard-layout'

const connectAdAccounts = () => {
  return (
    <div>connectAdAccounts</div>
  )
}

connectAdAccounts.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
)

export default connectAdAccounts