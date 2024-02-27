import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="flex justify-center sm:justify-between">
                <span className="text-base text-gray-500 sm:text-center dark:text-gray-400 mx-auto">Build by <a href="https://francogilli.vercel.app/" target='_blank' rel='noreferrer' className="font-bold text-slate-300">Franco</a></span>
            </div>
        </div>
    </footer>
  );
}
