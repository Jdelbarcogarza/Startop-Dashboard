import { useEffect, useState, useRef } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Divider, Drawer, Typography, useMediaQuery, Paper } from '@mui/material';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Cog as CogIcon } from '../icons/cog';
import { Lock as LockIcon } from '../icons/lock';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { UserAdd as UserAddIcon } from '../icons/user-add';
import { Users as UsersIcon } from '../icons/users';
import { XCircle as XCircleIcon } from '../icons/x-circle';
import { Logo } from './logo';
import { NavItem } from './nav-item';

// icons
import CampaignIcon from '@mui/icons-material/Campaign';
import BarChartIcon from '@mui/icons-material/BarChart';
import { AccountMenu } from './popup-account-menu';

// apartados de navegación del sidebar
const items = [

  {
    href: '/',
    icon: (<CampaignIcon fontSize="small" />),
    title: 'Estrategias'
  },

  {
    href: '#',
    icon: (<BarChartIcon fontSize="small" />),
    title: 'Campañas'
  },
  {
    href: '#',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/customers',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Customers'
  },
  {
    href: '/products',
    icon: (<ShoppingBagIcon fontSize="small" />),
    title: 'Products'
  },
  {
    href: '/account',
    icon: (<UserIcon fontSize="small" />),
    title: 'Account'
  },
  {
    href: '/settings',
    icon: (<CogIcon fontSize="small" />),
    title: 'Settings'
  },
  {
    href: '/login',
    icon: (<LockIcon fontSize="small" />),
    title: 'Login'
  },
  {
    href: '/register',
    icon: (<UserAddIcon fontSize="small" />),
    title: 'Register'
  },
  {
    href: '/404',
    icon: (<XCircleIcon fontSize="small" />),
    title: 'Error'
  }
];



export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatch: true,
    noSsr: false
  }
  );

  /* lógica de account dropdown menu. Si se presiona fuera del componente cuando está abierto,
      se cierra.
  */
  const ref = useRef();
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);


  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the account menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isAccountMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsAccountMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isAccountMenuOpen])

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          p: 2
        }}
      >


        <Box>
          <NextLink
            href="/"
            passHref
          >
            <a>
              <Logo />
            </a>
          </NextLink>
        </Box>

        {/** Apartado de lista de elementos de navegación */}
        <Box sx={{ flexGrow: 1, pt: 2 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>

        {/** En esta parte es donde debe renderizarse el accountDropDownMenu */}
        {isAccountMenuOpen && <div ref={ref}> <AccountMenu />
          
        </div>}

        
        {/** Apartado de usuario */}
        <Box>


          <Divider sx={{ borderColor: '#2D3748', mb: 2 }} />

          {/** parte "clickeable" del apartado de usuario */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            '&:hover': {
              cursor: 'pointer'
            }
          }}
            onClick={() => { isAccountMenuOpen == false ? setIsAccountMenuOpen(!isAccountMenuOpen) : null}}
          >

            <Paper
              variant='rounded'
              sx={{
                width: '42px',
                height: '42px',
              }}></Paper>

            <Box>
              <Typography
                variant="body2"
                color="white"
              >
                sandraMarx@gmail.com
              </Typography>
              <Typography
                variant="body2"
                color="white"
              >
                Sandra Marx
              </Typography>
            </Box>

          </Box>

        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            /* valor que modifica el ancho del sidebar. Si se modifica, se debe ajustar el padding del layout tambien
            en el archivo de dashboard-navbar.js*/
            width: 260
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 260
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
