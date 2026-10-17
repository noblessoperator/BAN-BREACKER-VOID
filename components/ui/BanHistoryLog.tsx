'use client';

import { useState, useEffect } from 'react';
import { History, Trash2 } from 'lucide-react';

interface AppealLog {
  id: number;
  date: string;
  type: string;
  status: 'Sent';
}

const BanHistoryLog = () => {
  const [logs, setLogs] = useState<AppealLog[]>([]);

  useEffect(() => {
    // A function to load logs that can be called to refresh
    const loadLogs = () => {
      try {
        const savedLogs = localStorage.getItem('banAppealHistory');
        setLogs(savedLogs ? JSON.parse(savedLogs).reverse() : []); // Show newest first
      } catch (error) {
        console.error("Failed to parse ban history from localStorage", error);
        setLogs([]);
      }
    };

    loadLogs();
    
    // Listen for custom event to update logs when a new one is added from another component
    window.addEventListener('storageUpdated', loadLogs);
    
    // Cleanup
    return () => {
      window.removeEventListener('storageUpdated', loadLogs);
    };
  }, []);

  const clearHistory = () => {
    if (confirm('Are you sure you want to clear your entire appeal history?')) {
      localStorage.removeItem('banAppealHistory');
      setLogs([]);
    }
  };
  
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <h3 className="text-md font-semibold flex items-center gap-2 mb-2 text-gray-300">
        <History size={16} />
        Appeal History
      </h3>
      <div className="flex-1 overflow-y-auto pr-2 space-y-2 text-sm">
        {logs.length > 0 ? (
          logs.map(log => (
            <div key={log.id} className="bg-gray-800 p-2 rounded-md animate-fadeIn">
              <p className="font-semibold text-white">{log.type} Appeal</p>
              <p className="text-xs text-gray-400">{new Date(log.date).toLocaleString()} - {log.status}</p>
            </div>
          ))
        ) : (
          <p className="text-xs text-gray-500 text-center py-4">No recent appeals sent.</p>
        )}
      </div>
       {logs.length > 0 && (
          <button onClick={clearHistory} className="text-xs text-red-500 hover:underline flex items-center gap-1 mt-2 p-1">
            <Trash2 size={12} /> Clear History
          </button>
        )}
    </div>
  );
};

export default BanHistoryLog;