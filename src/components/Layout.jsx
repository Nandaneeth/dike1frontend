import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <div className="flex min-h-screen bg-[#131416]">
            {/* Sidebar */}
            <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />

            {/* Main Content Area */}
            <main
                className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarExpanded ? 'ml-64' : 'ml-16'}`}
            >
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
