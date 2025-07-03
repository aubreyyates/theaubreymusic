// material-ui
import { Grid } from '@mui/material';
import selfImage from './profile-pic.jpg';

// import Logo from 'components/Logo/Logo';
// import './HomeOverlay.css';
// import SomethingNewImage from '../../assets/images/home/something-new.jpg';

const AboutOverlay = () => {
  // const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <div id="about-overlay">
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={12} sx={{ mb: -2.25 }}>
          <div id="about-header-container">
            <h1>About</h1>
          </div>
          <div id="about-main-box-container">
            <div id="about-main-box">
              <div id="self-image-container">
                <img id="self-image" src={selfImage} alt="Aubrey playing music." />
              </div>
              <div id="bio-container">
                {`I'm a singer-songwriter blending pop styles with original folk melodies. 
                I write songs to bring optimism to people. 
                My lyrics are uplifting and encourage everyone to believe in something better.`}
                <br />
                <br />
                {`Based in Iowa City, I have been playing shows at local venues for around 3 years. 
                I bring a mix of originals and popular covers (For example, songs by Maroon 5, Imagine Dragons, and Coldplay). 
                I play very new material, but I also play familiar hits that people can sing to.`}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutOverlay;
