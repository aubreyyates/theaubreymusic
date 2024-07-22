// material-ui
import { Grid } from '@mui/material';
import VerticalBars from 'components/VerticalBars';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Music = () => {
  return (
    <Grid>
      <Grid style={{ height: '800px', position: 'relative' }}>
        <div id="dates-container">
          <h1>Music</h1>
          <div>None at the moment. Check back soon!</div>
        </div>
        <VerticalBars />
      </Grid>
    </Grid>
  );
};

export default Music;
