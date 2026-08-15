import React from 'react';
import { Bell, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="h-16 border-b border-zinc-800 bg-zinc-900/20 backdrop-blur-md px-6 flex items-center justify-between text-white">
      <div className="relative w-64">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          size={16}
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl pl-10 pr-4 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
        />
      </div>

      <button className="p-2 hover:bg-zinc-900 rounded-xl transition-all relative text-zinc-400 hover:text-white">
        <Bell size={20} />
        <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full" />
      </button>
    </div>
  );
}