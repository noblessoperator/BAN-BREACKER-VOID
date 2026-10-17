'use client';

import { X, Github, Send, Youtube, MessageSquare, History, BotMessageSquare } from 'lucide-react';
import ThemeToggle from '../../components/ui/ThemeToggle';
import BanHistoryLog from '../../components/ui/BanHistoryLog';
import React from 'react';

// --- FIX #1: The prop name now matches page.tsx ---
// It expects `setActiveComponent` instead of `setActiveTool`
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveComponent: (component: 'unbanTool' | 'chatbot') => void;
}

const Sidebar = ({ isOpen, onClose, setActiveComponent }: SidebarProps) => {
  const handleNavigation = (component: 'unbanTool' | 'chatbot') => {
    setActiveComponent(component);
    onClose(); // Close the sidebar after clicking a link
  };
  
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-black text-white p-5 flex flex-col z-50 shadow-2xl shadow-blue-500/20 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-bold font-orbitron">HEAVSTAL TECH</h1>
          <p className="text-xs text-gray-400">Building Tomorrow's Web, Today.</p>
        </div>
        <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-700">
          <X size={20} />
        </button>
      </div>
      <hr className="border-gray-700/50" />

      {/* --- FIX #2: The values now match page.tsx --- */}
      {/* It now passes 'unbanTool' instead of 'unban' */}
      <nav className="flex flex-col space-y-2 my-4">
        <button onClick={() => handleNavigation('unbanTool')} className="text-left w-full flex items-center gap-3 p-2 rounded-md hover:bg-gray-800">
            <History size={18} /> Unban Tool
        </button>
        <button onClick={() => handleNavigation('chatbot')} className="text-left w-full flex items-center gap-3 p-2 rounded-md hover:bg-gray-800">
            <BotMessageSquare size={18} /> AI Assistant (Jeden)
        </button>
      </nav>
      
      {/* Ban History Log */}
      <div className="flex-grow flex flex-col min-h-0">
        <BanHistoryLog />
      </div>

      {/* Footer of Sidebar */}
      <div className="mt-auto pt-4 border-t border-gray-700/50">
        <div className="text-center mb-4">
          <p className="text-sm font-semibold mb-2">More from Heavstal Tech™</p>
          <a href="https://heavstal-tech.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full inline-block hover:bg-blue-700 transition-colors">
            VISIT OFFICIAL SITE
          </a>
        </div>
        <div className="flex justify-center space-x-5 mb-4">
          <a href="https://whatsapp.com/channel/0029VbAIrZ772WU5Foi3sR3E" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500" title="WhatsApp"><MessageSquare /></a>
          <a href="https://t.me/promisemdv1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400" title="Telegram"><Send /></a>
          <a href="https://www.youtube.com/@Heavstal_Tech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500" title="YouTube"><Youtube /></a>
          <a href="https://github.com/Promise818" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" title="GitHub"><Github /></a>
        </div>
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
