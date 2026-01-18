import CustomAudioPlayer from './CustomAudioPlayer';
import './MusicPlayer.css';

const MusicPlayer = () => {
  return (
    <div id="music-player">
      <div id="music-player-main">{/* <h1>Music</h1> */}</div>
      <CustomAudioPlayer src="./audio/Give-You-The-Reason.mp3" title="My Song" />
    </div>
  );
};

export default MusicPlayer;
