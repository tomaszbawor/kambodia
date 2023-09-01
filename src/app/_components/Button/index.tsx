'use client';
import React from 'react';

interface KamButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
}

const KamButton: React.FC<KamButtonProps> = ({ label, onClick, variant = 'primary' }) => {
    // Define Tailwind classes based on the 'variant' prop
    const buttonClass =
        variant === 'primary'
            ? 'bg-blue-500 hover:bg-blue-600 text-white'
            : 'bg-gray-300 hover:bg-gray-400 text-black';

    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded ${buttonClass}`}
        >
            {label}
        </button>
    );
};

export default KamButton;