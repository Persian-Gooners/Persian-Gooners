'use client';

import React from 'react';

interface DonateIconProps {
  className?: string;
  size?: number;
}

export default function DonateIcon({ className = 'w-6 h-6', size }: DonateIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path
        d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.04L12 21.35Z"
        className="fill-current"
      />
      <path
        d="M12 7V13M9 10H15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white dark:text-arsenal-darkerGray"
        style={{ color: 'var(--donate-icon-inner)' }}
      />
    </svg>
  );
}
