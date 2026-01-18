import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './CustomAudioPlayer.css';
import playButtonSvg from './svg/play-button.svg';

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

export default function CustomAudioPlayer({ src, title = 'Track' }) {
  const audioRef = useRef(null);

  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const progressPercent = useMemo(() => {
    if (!duration) return 0;
    return Math.min(100, Math.max(0, (currentTime / duration) * 100));
  }, [currentTime, duration]);

  // Update audio source when src prop changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !src) return;

    audio.src = src;
    audio.load();
    setIsReady(false);
    setCurrentTime(0);
    setDuration(0);
  }, [src]);

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

  return (
    <div className="player">
      {/* Hidden native element (no default controls) */}
      <div id="music-player-main-container">
        <div id="music-player-main"></div>
      </div>
      <button onClick={togglePlay} disabled={!isReady} className="play-button-svg" aria-label={isPlaying ? 'Pause' : 'Play'}>
        <img src={playButtonSvg} alt={isPlaying ? 'Pause' : 'Play'} />
      </button>
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

      <div className="controls">
        <div className="volumeWrap">
          <span className="volumeLabel">Vol</span>
          <input type="range" min="0" max="1" step="0.01" value={isMuted ? 0 : volume} onChange={onVolumeChange} disabled={!isReady} />
        </div>
      </div>

      {/* Progress UI (clickable bar + optional range slider for accessibility) */}
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
  src: PropTypes.string.isRequired,
  title: PropTypes.string
};
