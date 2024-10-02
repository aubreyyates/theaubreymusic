// material-ui
import { Grid } from '@mui/material';
// import VerticalBars from 'components/VerticalBars';

import './Music.css';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Music = () => {
  return (
    <Grid>
      <Grid style={{ height: '800px', position: 'relative' }}>
        <div id="music-container">
          <div className="page-title">
            <h1>Live Videos</h1>
          </div>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/z0_UN9rqWG8?si=TXQriutUWK3TOPqF"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/uWiw2-wIn2s?si=mL-evbfYkD-AP8YY"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        {/* <VerticalBars /> */}
      </Grid>
    </Grid>
  );
};

export default Music;
