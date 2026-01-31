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
                <ChatInterface toggleDraft={toggleDraft} />
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

