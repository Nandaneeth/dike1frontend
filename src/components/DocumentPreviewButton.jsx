import React from 'react';

const DocumentPreviewButton = ({ toggleDraft }) => {
    return (
        <button
            onClick={toggleDraft}
            className="flex-1 border border-gray-500 dark:border-gray-500 light:border-gray-500 hover:border-gray-700 dark:hover:border-gray-300 light:hover:border-gray-700 rounded-lg p-3 transition-all hover:bg-gray-200 dark:hover:bg-white/5 light:hover:bg-gray-200 group flex items-center justify-center gap-2 h-full"
            title="View Document"
        >
            <span className="material-symbols-outlined text-gray-600 dark:text-gray-400 light:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white light:group-hover:text-gray-900" style={{ fontSize: '20px' }}>description</span>
            <span className="text-sm text-gray-600 dark:text-gray-400 light:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white light:group-hover:text-gray-900">Document</span>
        </button>
    );
};

export default DocumentPreviewButton;
