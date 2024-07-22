import { Outlet } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// project import
import Header from './Header';
// import navigation from 'menu-items';
// import Breadcrumbs from 'components/@extended/Breadcrumbs';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', width: '100%', background: theme.palette.background.gradient }}>
      <Header />
      <Box component="main" sx={{ width: '100%', flexGrow: 1, mt: 7 }}>
        <Outlet context={open} />
      </Box>
    </Box>
  );
};

export default MainLayout;
