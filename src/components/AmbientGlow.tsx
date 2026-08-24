import React from 'react';

/**
 * Slow-drifting blurred blobs used as a quiet ambient background.
 * Purely decorative — sits behind content, ignores pointer events, and is
 * neutralized automatically for prefers-reduced-motion (see index.css).
 */
export const AmbientGlow: React.FC = () => (
  <div className="ambient-glow" aria-hidden="true">
    <div className="ambient-blob ambient-blob--1" />
    <div className="ambient-blob ambient-blob--2" />
    <div className="ambient-blob ambient-blob--3" />
  </div>
);
