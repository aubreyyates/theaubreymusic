// material-ui
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

// project import
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const MobileNavigation = ({ setOpen }) => {
  const navGroups = menuItem.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} setOpen={setOpen} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return <Box sx={{ pt: 2, width: '100%' }}>{navGroups}</Box>;
};

MobileNavigation.propTypes = {
  setOpen: PropTypes.func.isRequired
};

export default MobileNavigation;
