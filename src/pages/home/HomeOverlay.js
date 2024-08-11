// material-ui
import { Grid } from '@mui/material';

// import Logo from 'components/Logo/Logo';
import './HomeOverlay.css';
// import SomethingNewImage from '../../assets/images/home/something-new.jpg';
import Shapes from './svgComponents/shapes';
import ShapesLeft from './svgComponents/shapesLeft';

let upcomingDates = ['The Sanctuary Pub (Iowa City, IA) - 08/24/2024 (8pm - 10pm)'];

let pastDates = [
  'The Sanctuary Pub (Iowa City, IA) - 02/17/2024',
  'Brick Alley Pub (Marion, IA) - 12/29/2023',
  'Gabes (Iowa City, IA) - 12/22/2023',
  'The Sanctuary Pub (Iowa City, IA) - 12/09/2023',
  'The Sanctuary Pub (Iowa City, IA) - 11/17/2023'
];

const HomeOverlay = () => {
  // const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <div id="home-overlay">
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={12} sx={{ mb: -2.25 }}>
          <div id="home-header-container">
            <h1>Dates</h1>
          </div>
          <div id="home-main-box-container">
            <div id="home-main-box">
              <div id="dates">
                <h3>Upcoming Dates</h3>
                {upcomingDates.map((item, index) => (
                  <div className="date-line" key={index}>
                    {item}
                  </div>
                ))}
                <h3 id="past-dates">Past Dates</h3>
                {pastDates.map((item, index) => (
                  <div className="date-line" key={index}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div id="shapes-container">
        <Shapes />
      </div>
      <div id="shapes-left-container">
        <ShapesLeft />
      </div>
    </div>
  );
};

export default HomeOverlay;
