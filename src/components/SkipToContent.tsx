'use client';

import { useState } from 'react';

const SkipToContent = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <a
      href="#main-content"
      className={`
        fixed top-4 left-4 p-3 bg-primary-600 text-white font-medium rounded-md z-50
        transform transition-transform duration-200
        ${isFocused ? 'translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500' : '-translate-y-20'}
      `}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      Skip to content
    </a>
  );
};

export default SkipToContent;