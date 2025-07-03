// material-ui
import { Grid } from '@mui/material';
// import VerticalBars from 'components/VerticalBars';

import './About.css';
import AboutOverlay from './AboutOverlay';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const About = () => {
  return (
    <Grid>
      <Grid style={{ height: '800px', position: 'relative' }}>
        <div id="about-container">
          <Grid style={{ height: '800px', position: 'relative' }}>
            <AboutOverlay></AboutOverlay>
          </Grid>
        </div>
        {/* <VerticalBars /> */}
      </Grid>
    </Grid>
  );
};

export default About;
