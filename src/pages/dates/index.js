// material-ui
import { Grid } from '@mui/material';
import VerticalBars from 'components/VerticalBars';

import './Dates.css';

let pastDates = [
  'The Sanctuary Pub (Iowa City, IA) - 09/28/2024',
  'The Sanctuary Pub (Iowa City, IA) - 09/14/2024',
  'The Sanctuary Pub (Iowa City, IA) - 08/24/2024',
  'The Sanctuary Pub (Iowa City, IA) - 02/17/2024',
  'Brick Alley Pub (Marion, IA) - 12/29/2023',
  'Gabes (Iowa City, IA) - 12/22/2023',
  'The Sanctuary Pub (Iowa City, IA) - 12/09/2023',
  'The Sanctuary Pub (Iowa City, IA) - 11/17/2023'
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Dates = () => {
  return (
    <Grid>
      <Grid style={{ height: '800px', position: 'relative' }}>
        <div id="dates-container">
          <h1>Upcoming Dates</h1>
          <div>None at the moment. Check back soon!</div>
          <br />
          <br />
          <h1>Past Dates</h1>
          {pastDates.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <VerticalBars />
      </Grid>
    </Grid>
  );
};

export default Dates;
