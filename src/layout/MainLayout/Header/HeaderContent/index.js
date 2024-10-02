// material-ui
import { useMediaQuery } from '@mui/material';

// import { Link as LinkMaterial } from '@mui/material/index';
import { Link as LinkReact } from 'react-router-dom';
import { Grid } from '../../../../../node_modules/@mui/material/index';

// project import
// import Notification from './Notification';
import MobileSection from './MobileSection';
import { Button } from '../../../../../node_modules/@mui/material/index';
import './HeaderContent.css';
import BrushStrokes from '../../../../assets/images/icons/brush-strokes-2.png';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <>
      {!matchesXs && (
        <Grid container>
          <Grid xs={4} item justifyContent="left" sx={{ lineHeight: '38px' }}>
            <Button component={LinkReact} to="home">
              Home
            </Button>
            <Button component={LinkReact} to="music">
              Music
            </Button>
            {/* <Button component={LinkReact} to="dates">
              Dates
            </Button> */}
          </Grid>
          <Grid xs={4} item justifyContent="left">
            <div id="artist-name-container">
              <Grid container>
                <Grid xs={2} item>
                  <img id="brush-strokes-icon" src={BrushStrokes} alt="Brush Strokes" />
                </Grid>
                <Grid xs={10} item>
                  <h2>Aubrey</h2>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid xs={4} item sx={{ lineHeight: '38px' }}>
            <Grid container justifyContent="right">
              {/* <Button component={LinkReact} to="contact">
                Contact
              </Button> */}
              <Button href="https://www.instagram.com/theaubreymusic/">Instagram</Button>
              <Button href="https://www.facebook.com/aubreyyatesmusic">Facebook</Button>
            </Grid>
          </Grid>
        </Grid>
      )}
      {matchesXs && (
        <Grid container>
          <Grid xs={4} item justifyContent="left">
            <div id="artist-name-container-left">
              <Grid container>
                <Grid xs={2} item>
                  <img id="brush-strokes-icon" src={BrushStrokes} alt="Brush Strokes" />
                </Grid>
                <Grid xs={10} item>
                  <h2>Aubrey</h2>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      )}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
