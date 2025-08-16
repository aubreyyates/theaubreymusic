import { Grid } from '@mui/material';

import HomeOverlay from './HomeOverlay';
import './Home.css';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Home = () => {
  return (
    <Grid>
      <div id="home-container">
        <Grid style={{ height: '1590px', position: 'relative' }}>
          <HomeOverlay></HomeOverlay>
        </Grid>
      </div>
      <div className="bottom-bar" id="bar-1"></div>
      <div className="bottom-bar" id="bar-2"></div>
      <div className="bottom-bar" id="bar-3"></div>
      <div className="bottom-bar" id="bar-4"></div>
    </Grid>
  );
};

export default Home;
