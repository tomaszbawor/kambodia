import React from 'react';
import { ResourcesTypes } from '@/engine/ResourcesTypes';
import { numberFormatter } from '@/utlis/numberFormatter';

export const ResourcesBar: React.FC<Record<string, never>> = () => {
  const resources: Record<ResourcesTypes, number> = {
    bronze: 1203e123,
    diamond: 123123,
    gold: 12,
    silver: 10e5,
  };

  const resourceIcons: Record<ResourcesTypes, string> = {
    bronze: '🥉',
    diamond: '💎',
    gold: '🥇',
    silver: '🥈',
  };

  return (
    <nav className={'flex flex-row'}>
      <div>LOGO</div>
      <ul className={'flex'}>
        {Object.keys(resources).map((key) => (
          <li key={key} className={'mx-1'}>
            {resourceIcons[key as ResourcesTypes]}:{' '}
            {numberFormatter(resources[key as ResourcesTypes])}
          </li>
        ))}
      </ul>
    </nav>
  );
};
