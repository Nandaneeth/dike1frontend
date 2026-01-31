import React from 'react';

const DocumentPreviewButton = ({ toggleDraft }) => {
    return (
        <button
            onClick={toggleDraft}
            className="flex-1 border border-gray-500 hover:border-gray-300 rounded-lg p-3 transition-all hover:bg-white/5 group flex items-center justify-center gap-2 h-full"
            title="View Document"
        >
            <span className="material-symbols-outlined text-gray-400 group-hover:text-white" style={{ fontSize: '20px' }}>description</span>
            <span className="text-sm text-gray-400 group-hover:text-white">Document</span>
        </button>
    );
};

export default DocumentPreviewButton;
