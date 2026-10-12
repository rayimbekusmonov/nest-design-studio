import React from 'react';

interface FlagProps {
  className?: string;
  width?: number;
  height?: number;
}

/**
 * High-precision vector SVG of the Uzbekistan flag.
 * Sharp rectangular aspect, subtle border for dark mode readability.
 */
export function UzbekistanFlag({ width = 20, height = 14, className = '' }: FlagProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 ${className}`}
      style={{ border: '1px solid rgba(255, 255, 255, 0.15)', verticalAlign: 'middle' }}
    >
      {/* Top light blue band */}
      <rect width="24" height="5" fill="#0099B5" />
      {/* Red thin divider 1 */}
      <rect y="5" width="24" height="0.5" fill="#CE1126" />
      {/* White center band */}
      <rect y="5.5" width="24" height="5" fill="#FFFFFF" />
      {/* Red thin divider 2 */}
      <rect y="10.5" width="24" height="0.5" fill="#CE1126" />
      {/* Bottom green band */}
      <rect y="11" width="24" height="5" fill="#1EB53A" />

      {/* Crescent moon (white) */}
      <circle cx="3.8" cy="2.5" r="1.5" fill="#FFFFFF" />
      <circle cx="4.3" cy="2.5" r="1.25" fill="#0099B5" />

      {/* 12 Stars arrangement */}
      {/* Row 1 (3 stars) */}
      <circle cx="6.5" cy="1.3" r="0.32" fill="#FFFFFF" />
      <circle cx="7.5" cy="1.3" r="0.32" fill="#FFFFFF" />
      <circle cx="8.5" cy="1.3" r="0.32" fill="#FFFFFF" />
      {/* Row 2 (4 stars) */}
      <circle cx="5.5" cy="2.5" r="0.32" fill="#FFFFFF" />
      <circle cx="6.5" cy="2.5" r="0.32" fill="#FFFFFF" />
      <circle cx="7.5" cy="2.5" r="0.32" fill="#FFFFFF" />
      <circle cx="8.5" cy="2.5" r="0.32" fill="#FFFFFF" />
      {/* Row 3 (5 stars) */}
      <circle cx="4.5" cy="3.7" r="0.32" fill="#FFFFFF" />
      <circle cx="5.5" cy="3.7" r="0.32" fill="#FFFFFF" />
      <circle cx="6.5" cy="3.7" r="0.32" fill="#FFFFFF" />
      <circle cx="7.5" cy="3.7" r="0.32" fill="#FFFFFF" />
      <circle cx="8.5" cy="3.7" r="0.32" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * High-precision vector SVG of the United Kingdom flag (Union Jack).
 */
export function UnitedKingdomFlag({ width = 20, height = 14, className = '' }: FlagProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 ${className}`}
      style={{ border: '1px solid rgba(255, 255, 255, 0.15)', verticalAlign: 'middle' }}
    >
      <clipPath id="uk-clip">
        <rect width="24" height="16" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        {/* Navy background */}
        <rect width="24" height="16" fill="#012169" />
        {/* Diagonal white saltires */}
        <path d="M0 0L24 16M24 0L0 16" stroke="#FFFFFF" strokeWidth="3.2" />
        {/* Diagonal red saltires */}
        <path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.6" />
        {/* Central white cross */}
        <path d="M12 0V16M0 8H24" stroke="#FFFFFF" strokeWidth="5.2" />
        {/* Central red cross */}
        <path d="M12 0V16M0 8H24" stroke="#C8102E" strokeWidth="3.2" />
      </g>
    </svg>
  );
}

/**
 * High-precision vector SVG of the Russian Federation flag (White-Blue-Red).
 */
export function RussiaFlag({ width = 20, height = 14, className = '' }: FlagProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 ${className}`}
      style={{ border: '1px solid rgba(255, 255, 255, 0.15)', verticalAlign: 'middle' }}
    >
      {/* Top white band */}
      <rect width="24" height="5.33" fill="#FFFFFF" />
      {/* Middle blue band */}
      <rect y="5.33" width="24" height="5.33" fill="#0039A6" />
      {/* Bottom red band */}
      <rect y="10.66" width="24" height="5.34" fill="#D52B1E" />
    </svg>
  );
}
