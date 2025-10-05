// material-ui
import { Grid } from '@mui/material';

// import Logo from 'components/Logo/Logo';
import './HomeOverlay.css';
// import SomethingNewImage from '../../assets/images/home/something-new.jpg';
import Shapes from './svgComponents/shapes';
import ShapesLeft from './svgComponents/shapesLeft';

let upcomingDates = [
  { text: `Elray's Live and Dive (Iowa, City, IA) 11/21/2025 8:00 PM - 9:30 PM`, link: `https://www.elraysliveanddive.com/` }
];

let pastDates = [
  `Willow Creek Theatre (Iowa City, IA) 10/03/2025`,
  `Short's Burgers Eastside (Iowa City, IA) 09/27/2025`,
  `Elray's Live and Dive (Iowa, City, IA) 09/05/2025`,
  `Willow Creek Theatre (Iowa City, IA) 08/29/2025`,
  `Short's Burgers Eastside (Iowa City, IA) 08/16/2025`,
  `The Sanctuary Pub (Iowa City, IA) 08/01/2025`,
  `Willow Creek Theatre (Iowa City, IA) 07/25/2025`,
  `Short's Burgers Eastside (Iowa City, IA) 07/03/2025`,
  `Gabe's (Jam Opener) (Iowa City, IA) 07/01/2025`,
  `Elray's Live and Dive (Iowa, City, IA) 06/14/2025`,
  `Willow Creek Theatre (Iowa City, IA) - 05/31/2025`,
  `Short's Burger Eastside (Iowa City, IA) - 05/10/2025`,
  `Trumpet Blossom (Iowa City, IA) - 03/01/2025`,
  `Willow Creek Theatre (Iowa City, IA) - 02/21/2025`,
  `Short's Burger Eastside (Iowa City, IA) - 02/08/2025`,
  `Short's Burger Eastside (Iowa City, IA) - 11/16/2024`,
  'Willow Creek Theatre (Iowa City, IA) - 11/09/2024',
  `The Sanctuary Pub (Iowa City, IA) - 11/01/2024`,
  `Short's Burger Eastside (Iowa City, IA) - 10/05/2024`,
  'The Sanctuary Pub (Iowa City, IA) - 09/28/2024',
  'The Sanctuary Pub (Iowa City, IA) - 09/14/2024',
  'The Sanctuary Pub (Iowa City, IA) - 08/24/2024',
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
                {/* <div className="date-line">None. Check back later!</div> */}
                {upcomingDates.map((item, index) => (
                  <div className="date-line" key={index}>
                    {item.text} -{' '}
                    <a href={item.link} target="_blank" rel="noreferrer" className="venue-link">
                      Venue Link
                    </a>
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
