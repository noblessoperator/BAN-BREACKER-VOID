'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon, Sparkles } from 'lucide-react';

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex justify-around items-center bg-gray-900 p-1 rounded-full">
      <button onClick={() => setTheme('dark-blue')} title="Blue Theme" className="p-2 rounded-full hover:bg-blue-500/20 text-blue-400">
        <Sparkles size={16} />
      </button>
      <button onClick={() => setTheme('dark-yellow')} title="Yellow Theme" className="p-2 rounded-full hover:bg-yellow-500/20 text-yellow-400">
        <Sun size={16} />
      </button>
       <button onClick={() => setTheme('dark-red')} title="Red Theme" className="p-2 rounded-full hover:bg-red-500/20 text-red-400">
        <Moon size={16} />
      </button>
    </div>
  );
};

export default ThemeToggle;