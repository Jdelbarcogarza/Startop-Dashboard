

import React from 'react'

import { AdAccountActionCard } from '../components/adAccountCard/action-account-card'
import { DashboardLayout } from '../components/dashboard-layout';
import { AdAccountListLayout } from 'src/components/adAccount-list-layout';


//FAKER
import { faker } from '@faker-js/faker'

/**
 * Esta página va a desplegar la lista de cuentas de anuncios que tiene el usuario contectadas
 * a la herramienta de Startop. Se despliega cuando se accede al apartado de "campañas" en el sidebar.
 * @returns 
 */
const ListAdaccounts = () => (
  <>

    <AdAccountListLayout>
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
    </AdAccountListLayout>
  </>
);


ListAdaccounts.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default ListAdaccounts;
