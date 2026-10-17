'use client';

import { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';
import UnbanTool from '../components/tools/UnbanTool';
import AiChatbot from '../components/tools/AiChatbot';
import { Menu } from 'lucide-react';

export default function HomePage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState<'unbanTool' | 'chatbot'>('unbanTool');

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        setActiveComponent={setActiveComponent} 
      />
      <div 
        className="transition-transform duration-300 ease-in-out"
        style={{ transform: isSidebarOpen ? 'translateX(16rem)' : 'translateX(0)' }}
      >
        <header className="absolute top-0 left-0 z-30 p-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <Menu size={24} />
          </button>
        </header>

        <main className="min-h-screen w-full flex flex-col items-center justify-center p-4">
          {activeComponent === 'unbanTool' && <UnbanTool />}
          {activeComponent === 'chatbot' && <AiChatbot />}
        </main>
        
        <Footer />
      </div>
    </div>
  );
}