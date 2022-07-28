import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';

// my imports
import { KpiCard } from 'src/components/dashboard/KPI-card';

// iconos para las tarjetas
import TimelineIcon from '@mui/icons-material/Timeline';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';

// Faker NEED TO UNINSTALL DEPENDENCY AFTER DEVELOPMENT
import { faker } from '@faker-js/faker';


const Dashboard = () => (
  <>
    <Head>
      <title>
        Dashboard | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            
            <KpiCard 
            title={'CTR (todos)'}
            value={faker.datatype.number({max: 4, precision: 0.01}).toString() + '%'}
            unit={'Por impresiones'}
            icon={<DoneAllOutlinedIcon fontSize='large' />}
             />

          </Grid>
          
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            
            <KpiCard 
            title={'Frecuencia'}
            value={faker.datatype.number({max: 4, precision: 0.01})}
            unit={'Por persona'}
            icon={<HistoryOutlinedIcon fontSize='large' />}
             />

          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <KpiCard 
            title={'Importe gastado'}
            value={'$' + faker.datatype.number({max: 1000, precision: 0.01, min:200}).toString()}
            unit={'MXN'}
            icon={<PaymentsOutlinedIcon fontSize='large' />}
             />
          </Grid>
          

          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <KpiCard 
            title={'Alcance'}
            value={faker.datatype.number({max: 50000, min:200}).toLocaleString('en-US')}
            unit={'Personas'}
            icon={<TimelineIcon fontSize='large' />}
             />
          </Grid>

          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
