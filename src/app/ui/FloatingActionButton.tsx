'use client';

import React, { useState } from 'react';
import { Mail, MoreHorizontal, ExternalLink } from 'lucide-react';

const FloatingActionButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-24 right-12 flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="mb-2 flex flex-col items-center space-y-2">
          <div className="relative group">
            <a
              href="mailto:coriusdev2025@gmail.com"
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-100"
            >
              <Mail className="text-green-500" size={24} />
            </a>
            <span className="absolute bottom-full mb-2 w-max px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100">
              Contact Us
            </span>
          </div>
          <div className="relative group">
            <a
              href="https://coriusdev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-100"
            >
              <ExternalLink className="text-green-500" size={24} />
            </a>
            <span className="absolute bottom-full mb-2 w-max px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100">
              Visit CoriusDev
            </span>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg cursor-pointer">
        <MoreHorizontal className="text-white" size={24} />
      </div>
    </div>
  );
};

export default FloatingActionButton;