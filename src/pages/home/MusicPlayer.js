import CustomAudioPlayer from './CustomAudioPlayer';
import './MusicPlayer.css';
import giveYouTheReason from './audio/Give-You-The-Reason.mp3';
import brightestLight from './audio/Brightest-Light.mp3';

const TRACKS = [
  { src: giveYouTheReason, title: 'Give You The Reason (unmastered demo)' },
  { src: brightestLight, title: 'Brightest Light (unmastered demo)' }
];

const MusicPlayer = () => {
  return (
    <div id="music-player">
      <CustomAudioPlayer tracks={TRACKS} />
    </div>
  );
};

export default MusicPlayer;
