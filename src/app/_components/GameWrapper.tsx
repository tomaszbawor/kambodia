import React, { PropsWithChildren } from 'react';

export const GameWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className='w-screen h-screen flex items-center justify-center'>
      <div
        className={
          'h-[768px] max-h-[768px] max-w-[1024px] w-[1024px] bg-gray-400 p-4 '
        }
      >
        {children}
      </div>
    </main>
  );
};
