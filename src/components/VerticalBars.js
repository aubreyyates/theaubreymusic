// material-ui
import { Grid } from '@mui/material';
import './VerticalBars.css';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const VerticalBars = () => {
  return (
    <Grid>
      <Grid style={{ height: '800px', position: 'relative' }}>
        <div></div>
        <div id="vertical-bars">
          <div id="vertical-bar-1" className="vertical-bar"></div>
          <div id="vertical-bar-2" className="vertical-bar"></div>
          <div id="vertical-bar-3" className="vertical-bar"></div>
          <div id="vertical-bar-4" className="vertical-bar"></div>
        </div>
      </Grid>
    </Grid>
  );
};

export default VerticalBars;
