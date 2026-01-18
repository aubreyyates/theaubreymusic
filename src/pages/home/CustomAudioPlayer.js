import React, { useEffect, useMemo, useRef, useState } from 'react';

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

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setIsReady(true);

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
  }, [src]);

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

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
  };

  const skip = (seconds) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(duration || Infinity, Math.max(0, audio.currentTime + seconds));
  };

  return (
    <div style={styles.player}>
      {/* Hidden native element (no default controls) */}
      <audio
        controls
        ref={audioRef}
        onError={() => {
          console.log('error loading audio.');
        }}
      >
        <source src="../audio/Give-You-The-Reason.mp3" />
        <track kind="captions" src="/captions/song.vtt" srcLang="en" label="English" />
      </audio>

      <div style={styles.header}>
        <div style={styles.title}>{title}</div>
        <div style={styles.time}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>

      <div style={styles.controls}>
        <button onClick={() => skip(-10)} disabled={!isReady} style={styles.btn}>
          -10s
        </button>

        <button onClick={togglePlay} disabled={!isReady} style={styles.btnPrimary}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        <button onClick={() => skip(10)} disabled={!isReady} style={styles.btn}>
          +10s
        </button>

        <button onClick={toggleMute} disabled={!isReady} style={styles.btn}>
          {isMuted ? 'Unmute' : 'Mute'}
        </button>

        <div style={styles.volumeWrap}>
          <span style={{ fontSize: 12 }}>Vol</span>
          <input type="range" min="0" max="1" step="0.01" value={isMuted ? 0 : volume} onChange={onVolumeChange} disabled={!isReady} />
        </div>
      </div>

      {/* Progress UI (clickable bar + optional range slider for accessibility) */}
      <div style={styles.progressRow}>
        <div
          style={styles.progressBar}
          onClick={onProgressBarClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') seekToPercent((progressPercent - 2) / 100);
            if (e.key === 'ArrowRight') seekToPercent((progressPercent + 2) / 100);
          }}
          aria-label="Seek"
        >
          <div style={{ ...styles.progressFill, width: `${progressPercent}%` }} />
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
          style={styles.progressRange}
        />
      </div>
    </div>
  );
}

const styles = {
  player: {
    maxWidth: 520,
    border: '1px solid rgba(0,0,0,0.15)',
    borderRadius: 12,
    padding: 14,
    fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial'
  },
  header: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10
  },
  title: { fontWeight: 700 },
  time: { fontSize: 12, opacity: 0.8 },
  controls: { display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' },
  btn: {
    padding: '8px 10px',
    borderRadius: 10,
    border: '1px solid rgba(0,0,0,0.2)',
    background: 'white',
    cursor: 'pointer'
  },
  btnPrimary: {
    padding: '8px 14px',
    borderRadius: 10,
    border: '1px solid rgba(0,0,0,0.2)',
    background: 'white',
    fontWeight: 700,
    cursor: 'pointer'
  },
  volumeWrap: { display: 'flex', alignItems: 'center', gap: 6 },
  progressRow: { marginTop: 12, display: 'grid', gap: 8 },
  progressBar: {
    height: 10,
    borderRadius: 999,
    background: 'rgba(0,0,0,0.1)',
    overflow: 'hidden',
    cursor: 'pointer'
  },
  progressFill: {
    height: '100%',
    borderRadius: 999,
    background: 'rgba(0,0,0,0.45)'
  },
  progressRange: { width: '100%' }
};
