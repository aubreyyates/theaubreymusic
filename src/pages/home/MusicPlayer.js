import CustomAudioPlayer from './CustomAudioPlayer';
import './MusicPlayer.css';
import audioFile from './audio/Give-You-The-Reason.mp3';

const MusicPlayer = () => {
  return (
    <div id="music-player">
      <CustomAudioPlayer src={audioFile} title="My Song" />
    </div>
  );
};

export default MusicPlayer;
