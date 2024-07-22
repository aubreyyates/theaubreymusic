// material-ui
import { Grid } from '@mui/material';
import VerticalBars from 'components/VerticalBars';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Contact = () => {
  return (
    <Grid>
      <Grid style={{ height: '800px', position: 'relative' }}>
        <div id="dates-container">
          <h1>Contact</h1>
          <div>Email: aubreyyates999@hotmail.com</div>
        </div>
        <VerticalBars />
      </Grid>
    </Grid>
  );
};

export default Contact;
