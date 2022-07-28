
import NextLink from 'next/link'
import {
  Paper, Box, Typography, Divider, Stack, Link, Button
} from '@mui/material';


// imports (account dropdown menu)
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


// apartados de navegacion de drop down menu
const optionsWithIcon = [
  {
    icon: <PaymentOutlinedIcon />,
    title: 'Pagos',
    route: '#'
  },
  {
    icon: <PersonOutlineIcon />,
    title: 'Cuenta',
    route: '/account'
  },
  {
    icon: <SettingsOutlinedIcon />,
    title: 'Ajustes',
    route: '/settings'
  },
]

const optionsNoIcon = [
  {
    title: 'Ayuda'
  },
  {
    title: 'Términos y condiciones'
  },

];


const MenuDivider = () => (
  <Divider sx={{ mx: 2, my: 1, borderColor: 'divider' }} />

);

export const AccountMenu = () => {

  return (
    <Paper sx={{ width: '230px', height: 'fit', position: 'absolute', bottom: 80, paddingY: 2 }}>
      <Stack sx={{ position: 'relative' }}
        spacing={0}
      >


        {optionsWithIcon.map((item) => (
          <Box key={item.title}
            sx={{
              display: 'flex',
              paddingY: 1,
              paddingX: 2,
              '&:hover': {
                backgroundColor: 'primary.main'
              }
            }}>
            {item.icon}
            <NextLink
              href={item.route}
              passHref
            >
              <Link variant="body2"
                color="text.primary"
                sx={{ ml: 1 }}
              >
                {item.title}
              </Link>
            </NextLink>
          </Box>
        )

        )}

        <MenuDivider />

        {optionsNoIcon.map((item) => (
          <Box key={item.title}
            sx={{
              display: 'flex',
              paddingY: 1,
              paddingX: 1,
              '&:hover': {
                backgroundColor: 'primary.main'
              }
            }}>
            <Typography variant="body2"
              color="text.primary"
              sx={{ ml: 1 }}
            >
              {item.title}
            </Typography>
          </Box>
        )
        )}

        <MenuDivider />


        <Box
          sx={{
            display: 'flex',
            paddingY: 1,
            paddingX: 1,
            '&:hover': {
              backgroundColor: 'primary.main'
            }
          }}>
          <Typography variant="body2"
            color="text.primary"
            sx={{ ml: 1 }}
          >
            Salir
          </Typography>
        </Box>

      </Stack>
    </Paper>
  )
}