import React, { useState, useRef, useEffect } from 'react';
import DocumentPreviewButton from './DocumentPreviewButton';

const ChatInterface = ({ toggleDraft }) => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [hasStartedChat, setHasStartedChat] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            // Add user message
            const userMessage = {
                id: Date.now(),
                type: 'user',
                content: inputValue
            };
            setMessages(prev => [...prev, userMessage]);
            setInputValue('');
            setHasStartedChat(true);

            // Simulate AI response after a short delay
            setTimeout(() => {
                const aiMessage = {
                    id: Date.now() + 1,
                    type: 'assistant',
                    content: 'Hey! I\'m here to help you with your legal queries. Please provide more details about what you need assistance with.'
                };
                setMessages(prev => [...prev, aiMessage]);
            }, 500);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    // Landing page view - when no messages and chat hasn't started
    if (!hasStartedChat && messages.length === 0) {
        return (
            <div className="w-full max-w-4xl mx-auto px-4 pb-4 flex flex-col justify-center items-center h-full">
                {/* Greeting Section */}
                <div className="flex flex-col items-center justify-center mb-16 opacity-90">
                    <div className="flex items-center gap-3 mb-8">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" opacity="0.9" />
                        </svg>
                        <p className="text-lg text-gray-300">Hi Pranav</p>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white text-center tracking-tight">
                        Where should we start?
                    </h1>
                </div>

                {/* Input Section */}
                <div className="w-full max-w-2xl">
                    <div className="relative">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="w-full bg-[#1e1f23] border border-white/10 text-gray-300 text-base rounded-2xl py-4 pl-6 pr-32 focus:outline-none focus:ring-1 focus:ring-blue-500/50 placeholder-gray-500 shadow-lg hover:border-white/20 transition-colors"
                            placeholder="Ask me anything"
                        />
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center gap-2">
                            <button className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/5">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 20h9"></path>
                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                </svg>
                            </button>
                            <button
                                onClick={handleSendMessage}
                                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Chat view - when messages exist
    return (
        <div className="w-full max-w-4xl mx-auto px-4 pb-4 flex flex-col justify-end h-full">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto py-4 mb-6 flex flex-col items-center">
                <div className="space-y-6 w-full max-w-2xl">
                    {messages.map((message, index) => {
                        const showExtraSpacing = index > 0 && messages[index - 1].type !== message.type;
                        return (
                        <div
                            key={message.id}
                            className={`flex flex-col ${message.type === 'user' ? 'items-end' : 'items-start'} ${
                                showExtraSpacing ? 'pt-4' : ''
                            }`}
                        >
                            {message.type !== 'user' && (
                                <span className="text-[10px] tracking-widest text-gray-500 font-semibold mb-1 uppercase">
                                    DIKE
                                </span>
                            )}
                            {message.type === 'user' ? (
                                <div className="bg-indigo-950/40 text-indigo-100 border border-indigo-700/40 px-6 py-4 rounded-2xl">
                                    <p className="text-sm leading-relaxed">
                                        {message.content}
                                    </p>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-3 w-full">
                                    <p className="text-sm leading-relaxed text-slate-100">
                                        {message.content}
                                    </p>
                                    <div className="flex items-stretch gap-2 w-full">
                                        <DocumentPreviewButton toggleDraft={toggleDraft} />
                                        <button
                                            className="border border-gray-500 hover:border-gray-300 rounded-lg p-3 transition-all hover:bg-white/5 group flex items-center justify-center h-full"
                                            title="Download"
                                        >
                                            <span className="material-symbols-outlined text-gray-400 group-hover:text-white" style={{ fontSize: '20px' }}>download</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        );
                    })}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Input Bar - Modern ChatGPT style */}
            <div className="relative w-full max-w-2xl mx-auto">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full bg-[#1e1f23] border border-white/10 text-gray-300 text-sm rounded-full py-3 pl-6 pr-12 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-blue-500/30 placeholder-gray-500 shadow-lg hover:border-white/20 transition-all duration-200"
                    placeholder="Ask me anything about your projects"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                        onClick={handleSendMessage}
                        className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;
