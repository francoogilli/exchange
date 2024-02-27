"use client";
import React from 'react';
export default function Header() {
  return (
    <nav className="bg-zinc-950 p-2 ">
      <div className='w-9/12 mx-auto'>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <svg
            className="h-6 w-6 text-white mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          <span className="text-white font-semibold text-lg">Cripto</span>
        </div>
        <a href="" className='text-white'>Github</a>
      </div>
      </div>
    </nav>
  );
}
