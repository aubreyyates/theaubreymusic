import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';

// project import
// import AppBarStyled from './AppBarStyled';

// assets

import HeaderContent from './HeaderContent';

// import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

const Header = () => {
  const theme = useTheme();
  // const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  // common header
  const mainHeader = (
    <Toolbar>
      <HeaderContent />
    </Toolbar>
  );

  // app-bar params
  const appBar = {
    position: 'fixed',
    color: 'inherit',
    elevation: 0,
    sx: {
      borderBottom: `0px solid ${theme.palette.divider}`,
      background: theme.palette.primary.appBar
    }
  };

  return (
    <>
      <AppBar {...appBar}>{mainHeader}</AppBar>
    </>
  );
};

Header.propTypes = {
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func
};

export default Header;
