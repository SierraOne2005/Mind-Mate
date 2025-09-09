"use client";
import React, { useState, useRef, useEffect } from 'react';

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "Hello! I'm here to listen. What's on your mind?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const aiMessage = { sender: 'ai', text: data.reply };
      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      console.error("Failed to fetch AI response:", error);
      const errorMessage = { sender: 'ai', text: "I'm having trouble connecting. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-t-2xl flex justify-between items-center text-white">
        <h3 className="font-bold text-lg">AI Assistant</h3>
        <button onClick={onClose} className="font-bold text-2xl">&times;</button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
            <div className={`p-3 rounded-lg max-w-xs ${msg.sender === 'user' ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mb-3">
             <div className="p-3 rounded-lg bg-gray-200 text-gray-500">
                Typing...
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
          className="flex-1 p-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-cyan-400 text-black"
          disabled={isLoading}
        />
        <button onClick={handleSend} disabled={isLoading} className="px-6 py-2 bg-cyan-500 text-white font-bold rounded-r-full hover:bg-cyan-600 disabled:bg-gray-400">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;