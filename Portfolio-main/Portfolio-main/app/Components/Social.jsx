import React from 'react';

const Social = () => {
  return (
    <div className="relative">
      <ul className="z-10 list-none flex font-normal uppercase tracking-[0.3em] m-0 p-0 absolute transform rotate-[-90deg] translate-x-[-50%] origin-left-bottom top- left-[calc(100%-6rem)]">
        <li className="px-3">
          <a
            href="#0"
            className="text-gray-400 hover:text-white focus:text-white transition-colors"
          >
            Behance
          </a>
        </li>
        <li className="px-3">
          <a
            href="#0"
            className="text-gray-400 hover:text-white focus:text-white transition-colors"
          >
            Indeed
          </a>
        </li>
        <li className="px-3">
          <a
            href="#0"
            className="text-gray-400 hover:text-white focus:text-white transition-colors"
          >
            LinkedIn
          </a>
        </li>
        <li className="px-3">
          <a
            href="#0"
            className="text-gray-400 hover:text-white focus:text-white transition-colors"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
