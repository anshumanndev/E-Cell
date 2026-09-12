import React from 'react';

/**
 * GlobalAnimatedBackground
 *
 * A continuous, fully coloured "light yellow" screensaver-like background
 * that fills the entire website. Very soft pastel yellow and cream tones.
 */
export const GlobalAnimatedBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none overflow-hidden"
      style={{ zIndex: -20, backgroundColor: '#FDFCE4' }}
    >
      {/* Layer 0 — Base light yellow gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #FDFCE4 0%, #FFF9C4 40%, #FFF59D 70%, #FFF176 100%)',
          opacity: 0.8
        }}
      />

      {/* Layer 1 — Soft Yellow/Orange blob moving around */}
      <div
        className="bg-blob-1 absolute"
        style={{
          top: '-15%',
          left: '-10%',
          width: '80vw',
          height: '80vw',
          maxWidth: '1200px',
          maxHeight: '1200px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(255, 235, 59, 0.5) 0%, rgba(253, 216, 53, 0.3) 45%, transparent 75%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Layer 2 — Warm Amber/Yellow blob */}
      <div
        className="bg-blob-2 absolute"
        style={{
          bottom: '-15%',
          right: '-10%',
          width: '75vw',
          height: '75vw',
          maxWidth: '1100px',
          maxHeight: '1100px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(255, 193, 7, 0.4) 0%, rgba(255, 152, 0, 0.2) 45%, transparent 75%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Layer 3 — Pale Lemon Chiffon glow */}
      <div
        className="bg-blob-3 absolute"
        style={{
          top: '5%',
          right: '-5%',
          width: '70vw',
          height: '70vw',
          maxWidth: '1000px',
          maxHeight: '1000px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(255, 255, 141, 0.7) 0%, rgba(255, 245, 157, 0.4) 50%, transparent 75%)',
          filter: 'blur(110px)',
        }}
      />

      {/* Layer 4 — Center ambient cream pulse */}
      <div
        className="bg-blob-4 absolute"
        style={{
          top: '50%',
          left: '50%',
          width: '90vw',
          height: '70vh',
          maxWidth: '1400px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(255, 253, 231, 0.6) 0%, rgba(255, 249, 196, 0.3) 50%, transparent 75%)',
          filter: 'blur(100px)',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};