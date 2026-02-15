import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './CustomAudioPlayer.css';
import playButtonSvg from './svg/play-button.svg';
import pauseButtonSvg from './svg/pause-button.svg';
// import hexSvg from './svg/hex.svg';

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

function normalizeTracks(tracks, src, title) {
  if (tracks && tracks.length > 0) return tracks;
  if (src) return [{ src, title: title || 'Track' }];
  return [];
}

export default function CustomAudioPlayer({ src, title = 'Track', tracks: tracksProp }) {
  const audioRef = useRef(null);
  const tracks = useMemo(() => normalizeTracks(tracksProp, src, title), [tracksProp, src, title]);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  // const [hasUserPlayed, setHasUserPlayed] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const currentTrack = tracks[currentTrackIndex] ?? null;
  const effectiveSrc = currentTrack?.src ?? null;
  const effectiveTitle = currentTrack?.title ?? title;

  const progressPercent = useMemo(() => {
    if (!duration) return 0;
    return Math.min(100, Math.max(0, (currentTime / duration) * 100));
  }, [currentTime, duration]);

  const goToPrev = () => {
    if (tracks.length <= 1) return;
    setCurrentTrackIndex((i) => (i - 1 + tracks.length) % tracks.length);
  };

  const goToNext = () => {
    if (tracks.length <= 1) return;
    setCurrentTrackIndex((i) => (i + 1) % tracks.length);
  };

  // Update audio source when effective src changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !effectiveSrc) return;

    audio.src = effectiveSrc;
    audio.load();
    setIsReady(false);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, [effectiveSrc]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoadedMetadata = () => {
      setDuration(audio.duration || 0);
      setIsReady(true);
    };

    const onTimeUpdate = () => setCurrentTime(audio.currentTime || 0);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);
    const onVolumeChange = () => {
      setVolume(audio.volume);
      setIsMuted(audio.muted);
    };

    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('volumechange', onVolumeChange);

    // Initialize state from element
    onVolumeChange();

    return () => {
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('volumechange', onVolumeChange);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    console.log('Play pressed');
    if (!audio) return;

    try {
      if (audio.paused) {
        // setHasUserPlayed(true);
        await audio.play(); // may reject if browser blocks autoplay
      } else {
        audio.pause();
      }
    } catch (e) {
      // Autoplay restrictions or other play errors
      console.warn('Audio play failed:', e);
    }
  };

  const seekToPercent = (percent) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const clamped = Math.min(1, Math.max(0, percent));
    audio.currentTime = clamped * duration;
  };

  const onProgressBarClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    seekToPercent(percent);
  };

  const onProgressChange = (e) => {
    // Range input gives 0..100
    seekToPercent(Number(e.target.value) / 100);
  };

  const onVolumeChange = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const v = Number(e.target.value);
    audio.volume = v;
    if (v > 0 && audio.muted) audio.muted = false;
  };

  const volumePercent = isMuted ? 0 : Math.min(100, Math.max(0, volume * 100));

  const onVolumeBarClick = (e) => {
    const audio = audioRef.current;
    if (!audio || !isReady) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const v = Math.min(1, Math.max(0, percent));
    audio.volume = v;
    if (v > 0 && audio.muted) audio.muted = false;
  };

  return (
    <div className="player">
      {/* Hidden native element (no default controls) */}
      <div className="trackTitle">{effectiveTitle}</div>
      <div id="music-player-main-container">
        <div className="trackNavBox trackNavPrev trackNavBox--desktop">
          <span className="trackNavBox-label">Prev Track</span>
          <button type="button" className="trackNavButton" onClick={goToPrev} disabled={tracks.length <= 1} aria-label="Previous track">
            ‹
          </button>
        </div>
        <div className="profile-pic-orbit-wrap">
          <div className={`hex-orbit ${isPlaying ? 'hex-orbit--playing' : ''}`} aria-hidden="true">
            {/* <img src={hexSvg} className="hex-orbit-item hex-orbit-item-1" alt="" />
            <img src={hexSvg} className="hex-orbit-item hex-orbit-item-2" alt="" />
            <img src={hexSvg} className="hex-orbit-item hex-orbit-item-3" alt="" />
            <img src={hexSvg} className="hex-orbit-item hex-orbit-item-4" alt="" />
            <img src={hexSvg} className="hex-orbit-item hex-orbit-item-5" alt="" />
            <img src={hexSvg} className="hex-orbit-item hex-orbit-item-6" alt="" /> */}
          </div>
          <div id="profile-pic-main"></div>
        </div>
        <div className="trackNavBox trackNavNext trackNavBox--desktop">
          <span className="trackNavBox-label">Next Track</span>
          <button type="button" className="trackNavButton" onClick={goToNext} disabled={tracks.length <= 1} aria-label="Next track">
            ›
          </button>
        </div>
      </div>
      <div className="play-button-wrap">
        <div className="play-row">
          <div className="trackNavBox trackNavPrev trackNavBox--mobile">
            <span className="trackNavBox-label">Prev Track</span>
            <button type="button" className="trackNavButton" onClick={goToPrev} disabled={tracks.length <= 1} aria-label="Previous track">
              ‹
            </button>
          </div>
          <div className="play-button-box">
            <span className="play-button-label">{isPlaying ? 'Press To Pause Song' : 'Press To Play Song'}</span>
            <button onClick={togglePlay} disabled={!isReady} className="play-button-svg" aria-label={isPlaying ? 'Pause' : 'Play'}>
              <img src={isPlaying ? pauseButtonSvg : playButtonSvg} alt={isPlaying ? 'Pause' : 'Play'} />
            </button>
          </div>
          <div className="trackNavBox trackNavNext trackNavBox--mobile">
            <span className="trackNavBox-label">Next Track</span>
            <button type="button" className="trackNavButton" onClick={goToNext} disabled={tracks.length <= 1} aria-label="Next track">
              ›
            </button>
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        preload="metadata"
        onError={(e) => {
          console.error('Error loading audio:', e);
        }}
      >
        <track kind="captions" />
      </audio>

      <div className="header">
        <div className="title">{title}</div>
        <div className="time">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>

      {/* Volume: custom bar (like progressBar) just above progress row, left-aligned */}
      <div className="volumeLabel">Volume</div>
      <div className="volumeRow">
        <div className="volumeWrap">
          {/* <span className="volumeLabel">Vol</span> */}
          <div
            className="volumeBar"
            onClick={onVolumeBarClick}
            role="slider"
            tabIndex={0}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={volumePercent}
            aria-label="Volume"
            onKeyDown={(e) => {
              if (!isReady) return;
              const audio = audioRef.current;
              if (!audio) return;
              if (e.key === 'ArrowLeft') {
                const v = Math.max(0, volume - 0.05);
                audio.volume = v;
                if (v > 0 && audio.muted) audio.muted = false;
              }
              if (e.key === 'ArrowRight') {
                const v = Math.min(1, volume + 0.05);
                audio.volume = v;
                if (v > 0 && audio.muted) audio.muted = false;
              }
            }}
          >
            <div className="volumeFill" style={{ width: `${volumePercent}%` }} />
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={onVolumeChange}
            disabled={!isReady}
            aria-label="Volume"
            className="volumeRange"
          />
        </div>
      </div>

      {/* Progress UI (clickable bar + optional range slider for accessibility) */}
      <div className="progressLabel">Progress</div>
      <div className="progressRow">
        <div
          className="progressBar"
          onClick={onProgressBarClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') seekToPercent((progressPercent - 2) / 100);
            if (e.key === 'ArrowRight') seekToPercent((progressPercent + 2) / 100);
          }}
          aria-label="Seek"
        >
          <div className="progressFill" style={{ width: `${progressPercent}%` }} />
        </div>

        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={progressPercent}
          onChange={onProgressChange}
          disabled={!isReady}
          aria-label="Playback position"
          className="progressRange"
        />
      </div>
    </div>
  );
}

CustomAudioPlayer.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string
    })
  )
};
