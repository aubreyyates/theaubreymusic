// material-ui
import { Grid } from '@mui/material';
// import VerticalBars from 'components/VerticalBars';

import giveYouTheReason from '../home/audio/Give-You-The-Reason.mp3';
import brightestLight from '../home/audio/Brightest-Light.mp3';

import './Music.css';

const TRACKS = [
  { src: giveYouTheReason, title: 'Give You The Reason' },
  { src: brightestLight, title: 'Brightest Light' }
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Music = () => {
  return (
    <Grid>
      <Grid style={{ height: '800px', position: 'relative' }}>
        <div id="music-container">
          <div id="standard-music-player-container">
            {TRACKS.map((track) => (
              <div key={track.title} style={{ marginBottom: 50, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginBottom: 4, fontWeight: 600 }}>{track.title}</div>
                <audio controls src={track.src} preload="metadata" style={{ width: '100%', maxWidth: 400 }}>
                  <track kind="captions" />
                </audio>
              </div>
            ))}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Music;
