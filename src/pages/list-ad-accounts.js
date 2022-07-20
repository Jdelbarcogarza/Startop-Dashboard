

import React from 'react'

import { DashboardLayout } from '../components/dashboard-layout';


/**
 * Esta página va a desplegar la lista de cuentas de anuncios que tiene el usuario contectadas
 * a la herramienta de Startop. Se despliega cuando se accede al apartado de "campañas" en el sidebar.
 * @returns 
 */
const ListAdaccounts = () => (
  <>
    <div>list-adccounts</div>
    </>
);


ListAdaccounts.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default ListAdaccounts;
