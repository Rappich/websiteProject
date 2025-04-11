import React from 'react';

interface ProgressBarProps {
  name: string;
  level: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  name,
  level,
  color = 'bg-orange-600',
}) => {
  const validLevel = Math.max(1, Math.min(10, level));
  const percentage = validLevel * 10;

  return (
    <div className="w-full max-w-[271px]">
      <div className="flex justify-between mb-1">
        <p className="text-gray-700 font-semibold">{name}</p>
      </div>
      <div className="h-2 rounded-full overflow-hidden bg-gray-300">
        <div
          className={`h-full ${color} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={name}
        />
      </div>
    </div>
  );
};

export default ProgressBar;