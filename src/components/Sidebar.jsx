import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isExpanded, toggleSidebar }) => {
    const [chats, setChats] = useState([
        { id: 1, title: 'Project Discussion 1' },
        { id: 2, title: 'Project Discussion 2' },
        { id: 3, title: 'Legal Advice Setup' },
    ]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleNewChat = () => {
        if (!isExpanded) return;

        const newChat = {
            id: Date.now(),
            title: `New Discussion ${chats.length + 1}`,
        };
        setChats([newChat, ...chats]);
    };


    const filteredChats = chats.filter(chat =>
        chat.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

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

            {/* New Chat & Search Section */}
            <div className="px-3 py-2 space-y-3">
                {/* New Chat Button */}
                {isExpanded && (
                    <div className="px-3 py-2">
                        <button
                            onClick={handleNewChat}
                            className="flex items-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-4 transition-all duration-300"
                            title="New Chat"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            <span>New Chat</span>
                        </button>
                    </div>
                )}



                {/* Search Bar - Hidden when collapsed */}
                <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search chats..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#1e1f23] text-gray-300 text-sm rounded-lg pl-9 pr-3 py-2 border border-white/5 focus:outline-none focus:border-blue-500/50"
                        />
                        <svg className="absolute left-3 top-2.5 text-gray-500" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Middle Section - Chat History */}
            {/* Logic: If expanded, show filtered list. If collapsed, show NOTHING (no icons). */}
            <div className="flex-1 overflow-y-auto py-2 px-2 custom-scrollbar">
                {isExpanded && (
                    <div className="fade-in">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">
                            Your Chats
                        </div>
                        <div className="space-y-1">
                            {filteredChats.map((chat) => (
                                <div key={chat.id} className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                                    <div className="text-gray-400 group-hover:text-white shrink-0">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-300 whitespace-nowrap overflow-hidden truncate">
                                        {chat.title}
                                    </span>
                                </div>
                            ))}
                            {filteredChats.length === 0 && (
                                <div className="text-sm text-gray-600 px-3 italic">
                                    No chats found
                                </div>
                            )}
                        </div>
                    </div>
                )}
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
