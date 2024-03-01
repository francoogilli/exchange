"use client";
import React from 'react';
import { Icon } from '@iconify/react';
export default function Header() {
  return (
    <nav className="bg-zinc-950 p-3 ">
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
        <a href="https://github.com/francoogilli/exchange" className='relative inline-block' aria-label='Github Repository' target='_blank' rel='noreferrer'>
            <Icon icon="simple-icons:github" className='mb-0 text-transparent size-[25px] text-zinc-950 dark:text-white' width={30} height={30} />
            <Icon icon="radix-icons:star-filled" className="absolute left-4 mt-9 bottom-[15px] mr-2 text-yellow-400 dark:text-yellow-400 animate-bounce transition-all" width="15" height="15" />
        </a>
      </div>
      </div>
    </nav>
  );
}
