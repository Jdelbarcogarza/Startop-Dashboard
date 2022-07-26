import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import { getInitials } from 'src/utils/get-initials';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  name: 'Sandra Marx',
  companyName: 'Startop'
};

console.log(getInitials(user.name))

export const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          sx={{
            height: 64,
            mb: 2,
            width: 64,
            backgroundColor: 'info.main',

          }}
        >
        <Typography variant="h6"
          color="neutral">
            {getInitials(user.name)}
          </Typography>
        </Avatar>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {`${user.companyName}`}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="text"
        disabled={true}
      >
        Cambiar foto de perfil
      </Button>
    </CardActions>
  </Card>
);
