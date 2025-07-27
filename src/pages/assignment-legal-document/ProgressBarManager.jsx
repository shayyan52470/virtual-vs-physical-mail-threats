import React, { useEffect, useState } from 'react';
import { getPoints } from './points';

export const ProgressBarManager = () => {
  const [bars, setBars] = useState(getPoints());

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(getPoints());
    }, 300); // Re-check every 300ms
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 p-4 border rounded bg-base-200 shadow-lg space-y-2 w-64">
      <ProgressBar label="Speed" value={bars.speed} />
      <ProgressBar label="Resources" value={bars.resources} />
      <ProgressBar label="Happiness" value={bars.happiness} />
    </div>
  );
};

const ProgressBar = ({ label, value }) => {
  const segments = 5;
  return (
    <div>
      <div className="flex justify-between text-xs font-semibold mb-1">
        <span>{label}</span>
        <span>{value} / {segments}</span>
      </div>
      <div className="flex space-x-1">
        {[...Array(segments)].map((_, i) => (
          <div
            key={i}
            className={`h-3 flex-1 rounded ${i < value ? 'bg-primary' : 'bg-base-300'} border`}
          />
        ))}
      </div>
    </div>
  );
};
