import React, { useState } from 'react';
import ChatInterface from '../components/ChatInterface';
import DraftBuilder from '../components/DraftBuilder';

const Home = () => {
    const [isDraftOpen, setIsDraftOpen] = useState(false);

    const toggleDraft = () => {
        setIsDraftOpen(!isDraftOpen);
    };

    return (
        <div className="bg-[#131416] text-white font-sans h-[calc(100vh-2rem)] flex overflow-hidden p-4 gap-4 box-border">

            {/* Left Panel - Chat Interface */}
            {/* If Draft is open, Chat takes less width, otherwise full width */}
            <div className={`transition-all duration-500 ease-in-out h-full relative ${isDraftOpen ? 'w-1/2' : 'w-full max-w-5xl mx-auto'}`}>
                <ChatInterface />

                {/* Toggle Button for Draft Builder (when closed) */}
                {!isDraftOpen && (
                    <button
                        onClick={toggleDraft}
                        className="absolute top-4 right-4 bg-[#232428] hover:bg-[#2a2b30] text-gray-300 px-4 py-2 rounded-lg border border-white/10 shadow-lg flex items-center gap-2 transition-all hover:scale-105"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 20h9"></path>
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                        <span>Open Draft</span>
                    </button>
                )}
            </div>

            {/* Right Panel - Draft Builder */}
            {/* Shows only when isDraftOpen is true */}
            {isDraftOpen && (
                <div className="w-1/2 h-full transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-right-10">
                    <DraftBuilder onClose={toggleDraft} />
                </div>
            )}

        </div>
    );
};

export default Home;

