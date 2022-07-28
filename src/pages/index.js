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
        Home
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
            ESTA VA A SER LA SECCION DE HOME DE LA PLATAFORMA
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
