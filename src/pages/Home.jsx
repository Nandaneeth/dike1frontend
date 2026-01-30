import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative min-h-screen bg-[#131416] text-white font-sans overflow-hidden flex flex-col justify-between">

            {/* Background elements (optional subtle noise or gradient if needed, keeping it minimal for now per request) */}

            {/* Center Section - Vertically Centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-32">
                <div className="mb-6">
                    {/* Sparkle Icon */}
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" opacity="0.9" />
                    </svg>
                </div>
                <h1 className="text-2xl md:text-3xl font-medium text-white/90 tracking-wide">
                    Hello! I am your Legal Assistant!
                </h1>
            </div>

            {/* Bottom Content Container - Pushes content to bottom */}
            <div className="w-full max-w-4xl mx-auto px-4 pb-4 pt-20 flex-1 flex flex-col justify-end">

                {/* Chat Bubbles Area */}
                <div className="space-y-6 mb-8 w-full">

                    {/* Assistant Message (Left) */}
                    <div className="flex flex-col items-start max-w-[85%] md:max-w-2xl">
                        <span className="text-[10px] tracking-widest text-gray-500 font-semibold mb-1 uppercase ml-1">Our AI</span>
                        <div className="relative bg-[#1e1f23] text-gray-300 px-6 py-5 rounded-2xl border border-white/5 shadow-lg flex items-start gap-4">
                            {/* Small Sparkle in Bubble */}
                            <div className="flex-shrink-0 mt-1">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                                    <path d="M12 4L13.4 8.6L18 10L13.4 11.4L12 16L10.6 11.4L6 10L10.6 8.6L12 4Z" fill="currentColor" />
                                </svg>
                            </div>
                            <p className="text-sm leading-relaxed text-gray-300">
                                Hey Name! I'll be asking you a series of questions tailored to the job role you selected. Please answer each question as if you're in a real interview. Stay calm, take your time, and do your best.
                            </p>
                        </div>
                    </div>

                    {/* User Message (Right) */}
                    <div className="flex flex-col items-end self-end w-full">
                        <span className="text-[10px] tracking-widest text-gray-500 font-semibold mb-1 uppercase mr-1">Me</span>
                        <div className="bg-[#27272a] text-gray-200 px-6 py-3 rounded-2xl border border-white/5 shadow-md">
                            <p className="text-sm">Sure. Lets start.</p>
                        </div>
                    </div>
                </div>

                {/* Input Bar */}
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        {/* Could put an icon here if needed */}
                    </div>
                    <input
                        type="text"
                        disabled
                        className="w-full bg-[#1e1f23] border border-white/10 text-gray-300 text-sm rounded-xl py-4 pl-6 pr-12 focus:outline-none focus:ring-1 focus:ring-gray-700 placeholder-gray-500 shadow-sm cursor-not-allowed"
                        placeholder="Ask me anything about your projects"
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                        <button className="text-gray-400 hover:text-white transition-colors duration-200">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Navigation Links for Dev (Hidden or subtle) */}
                <div className="absolute top-4 right-4 flex space-x-4 opacity-0 hover:opacity-50 transition-opacity">
                    <Link to="/login" className="text-xs text-gray-600">Login</Link>
                    <Link to="/signin" className="text-xs text-gray-600">Sign In</Link>
                </div>

            </div>
        </div>
    );
};

export default Home;
