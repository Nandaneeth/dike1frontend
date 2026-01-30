import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isExpanded, toggleSidebar }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-screen bg-[#0d0e10] border-r border-white/5 transition-all duration-300 ease-in-out z-50 flex flex-col ${isExpanded ? 'w-64' : 'w-16'}`}
        >
            {/* Header Section */}
            <div className={`flex items-center h-16 px-4 ${isExpanded ? 'justify-between' : 'justify-center'}`}>
                {/* Logo - Hidden when collapsed */}
                <div className={`font-bold text-white text-xl tracking-wide overflow-hidden transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}`}>
                    Dike.ai
                </div>

                {/* Toggle Button */}
                <button
                    onClick={toggleSidebar}
                    className="text-gray-400 hover:text-white transition-colors p-1 rounded-md"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>

            {/* Middle Section - Chat History */}
            <div className="flex-1 overflow-y-auto py-4 px-2 custom-scrollbar">
                {isExpanded && (
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2 fade-in">
                        Your Chats
                    </div>
                )}

                <div className="space-y-1">
                    {/* Dummy Chat Items */}
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                            <div className="text-gray-400 group-hover:text-white">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <span className={`text-sm text-gray-300 whitespace-nowrap overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
                                Project Discussion {item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Section - User Profile */}
            <div className="border-t border-white/5 p-4">
                <div className={`flex items-center gap-3 ${isExpanded ? '' : 'justify-center'}`}>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                        JD
                    </div>
                    <div className={`flex flex-col overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
                        <span className="text-sm text-white font-medium truncate">John Doe</span>
                        <span className="text-xs text-gray-500 truncate">Pro Plan</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
