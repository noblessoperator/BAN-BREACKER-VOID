// BAN BREAKER/components/tools/AiChatbot.tsx

'use client';

import { useState, useRef, ChangeEvent, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { ImagePlus, Send, Loader2, BotMessageSquare, AlertTriangle } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AiChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
      { role: 'assistant', content: "Hello! I am JEDEN, your AI ban appeal assistant. Please describe your ban situation or upload a screenshot of the ban message." }
  ]);
  const [input, setInput] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) { // 4MB limit
        setError('Image is too large. Please select a file under 4MB.');
        return;
      }
      setError(null);
      setImage(file);
    }
  };

  const handleSendMessage = async () => {
    if ((!input.trim() && !image) || isLoading) return;
    setIsLoading(true);
    setError(null);

    const userMessageContent = image ? `[Image Attached: ${image.name}] ${input || '(No text provided)'}` : input;
    setMessages(prev => [...prev, { role: 'user', content: userMessageContent }]);
    
    const formData = new FormData();
    formData.append('prompt', input);
    if (image) formData.append('image', image);

    try {
      const response = await fetch('/api/chat', { method: 'POST', body: formData });
      if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
      const data = await response.json();
      if(data.error) throw new Error(data.error);
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err: any) {
        setError(err.message || 'An unknown error occurred.');
        setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I was unable to process your request. Please try again.' }]);
    }

    setInput('');
    setImage(null);
    if(fileInputRef.current) fileInputRef.current.value = "";
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-black/30 rounded-2xl shadow-lg border border-gray-700/50 flex flex-col h-[85vh] md:h-[75vh]">
        <div className="p-4 border-b border-gray-700/50 flex items-center gap-3">
            <BotMessageSquare className="text-blue-400" />
            <div>
                <h2 className="font-bold text-lg font-orbitron">JEDEN</h2>
                <p className="text-xs text-gray-400">Your AI Ban Appeal Assistant by Heavstal Tech™</p>
            </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xl p-3 rounded-lg prose prose-invert prose-sm prose-p:my-0 ${msg.role === 'user' ? 'bg-blue-600' : 'bg-gray-800'}`}>
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
        </div>
        
        {error && <div className="p-2 mx-4 mb-2 text-xs text-center text-red-400 bg-red-500/20 rounded-md flex items-center justify-center gap-2"><AlertTriangle size={14}/> {error}</div>}
        
        <div className="p-4 border-t border-gray-700/50">
            <div className="flex items-start bg-gray-900 rounded-lg p-2">
                <button onClick={() => fileInputRef.current?.click()} className="p-2 text-gray-400 hover:text-white rounded-full">
                    <ImagePlus />
                </button>
                <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*"/>
                <textarea 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={image ? `Add a comment about the image...` : `Describe your ban...`}
                    className="flex-1 bg-transparent focus:outline-none px-2 py-1.5 resize-none h-10"
                    onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(); } }}
                    disabled={isLoading}
                    rows={1}
                />
                <button onClick={handleSendMessage} disabled={isLoading || (!input.trim() && !image)} className="p-2 bg-blue-600 rounded-full text-white disabled:bg-gray-500 disabled:cursor-not-allowed self-end">
                    {isLoading ? <Loader2 className="animate-spin" /> : <Send />}
                </button>
            </div>
            {image && <div className="text-xs text-center text-green-400 mt-2">Attached: {image.name} <button onClick={() => setImage(null)} className="text-red-400 ml-2">(remove)</button></div>}
        </div>
    </div>
  );
};

export default AiChatbot;