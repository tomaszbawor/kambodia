'use client';
import React from 'react';

export type ButtonVariant = 'primary' | 'secondary';
interface KamButtonProps {
  label: string;
  onClick: () => void;
  variant?: ButtonVariant;
}

const KamButton: React.FC<KamButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
}) => {
  const buttonVariants: Record<ButtonVariant, string> = {
    primary: 'bg-kam-primary-dark-200 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-black',
  };

  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 mx-2 rounded-full hover:bg-kam-primary-lightgray-700  ${buttonVariants[variant]}`}
    >
      {label}
    </button>
  );
};

export default KamButton;
