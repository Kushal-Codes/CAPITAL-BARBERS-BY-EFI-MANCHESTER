import React from 'react';

interface BrandEmblemProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Vector recreation of Capital Barber by Efi's physical 3D gold wall emblem
 * (5-point Crown above intertwined CB monogram) observed at 46 George Street.
 */
export const BrandEmblem: React.FC<BrandEmblemProps> = ({
  className = '',
  size = 'md',
}) => {
  const dimensions =
    size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-12 h-12' : 'w-9 h-9';

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${dimensions} shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* 5-Point Sovereign Crown */}
      <path
        d="M14 21L10 11L21 16L32 6L43 16L54 11L50 21H14Z"
        stroke="#C8A24A"
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill="rgba(200, 162, 74, 0.14)"
      />
      <line
        x1="14"
        y1="24.5"
        x2="50"
        y2="24.5"
        stroke="#C8A24A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="10" cy="9.5" r="1.8" fill="#C8A24A" />
      <circle cx="21" cy="14" r="1.6" fill="#C8A24A" />
      <circle cx="32" cy="4.5" r="2" fill="#C8A24A" />
      <circle cx="43" cy="14" r="1.6" fill="#C8A24A" />
      <circle cx="54" cy="9.5" r="1.8" fill="#C8A24A" />

      {/* Outer C Monogram */}
      <path
        d="M44 33.5C41.2 30.2 36.8 28.5 31.5 28.5C22.1 28.5 15 35.1 15 43.5C15 51.9 22.1 58.5 31.5 58.5C37.1 58.5 41.6 56.5 44.5 53"
        stroke="#C8A24A"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Inner B Monogram */}
      <path
        d="M27 34.5H35.5C38.5 34.5 40.5 36.2 40.5 38.8C40.5 40.8 39.2 42.3 37.2 42.8C39.8 43.3 41.5 45.1 41.5 47.7C41.5 50.8 39.1 52.5 35.5 52.5H27V34.5Z"
        stroke="#F7F5F0"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <line x1="27" y1="43" x2="36.5" y2="43" stroke="#F7F5F0" strokeWidth="2.4" />
    </svg>
  );
};
