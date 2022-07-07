import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Image from 'next/image'
import whiteLogo from '../../public/static/images/logo_startop_white.png'

export const Logo = styled((props) => {
  const { variant, ...other } = props;


  return (

      <Image
        src={whiteLogo}
        alt='/'
        layout='responsive'
        priority
      />


  );
})``;

Logo.defaultProps = {
  variant: 'primary'
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['light', 'primary'])
};
