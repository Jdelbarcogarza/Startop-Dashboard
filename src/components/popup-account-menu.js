import {
  Paper, Box, Typography, Divider, Stack, Item
} from '@mui/material';


// imports (account dropdown menu)
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


// apartados de navegacion de drop down menu
const optionsWithIcon = [
  {
    icon: <PaymentOutlinedIcon />,
    title: 'Pagos'
  },
  {
    icon: <PersonOutlineIcon />,
    title: 'Cuenta'
  },
  {
    icon: <SettingsOutlinedIcon />,
    title: 'Ajustes'
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
  <Divider sx={{mx: 2, my:1, borderColor: 'primary.main'}} />

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
                  backgroundColor: 'secondary.main'
                }
              }}>
              {item.icon}
              <Typography variant="body2"
                color="initial"
                sx={{ ml: 1 }}
              >
                {item.title}
              </Typography>
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
                  backgroundColor: 'secondary.main'
                }
              }}>
              <Typography variant="body2"
                color="initial"
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
                  backgroundColor: 'secondary.main'
                }
              }}>
              <Typography variant="body2"
                color="initial"
                sx={{ ml: 1 }}
              >
                Salir
              </Typography>
            </Box>

      </Stack>
    </Paper>
  )
}