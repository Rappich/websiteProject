import React from 'react';

interface SkillProgressBarProps {
  name: string;
  level: number;
  color?: string;
}

const SkillProgressBar: React.FC<SkillProgressBarProps> = ({
  name,
  level,
  color = 'bg-gray-400',
}) => {
  const validLevel = Math.max(1, Math.min(10, level));
  const percentage = validLevel * 10;

  return (
    <div className="w-full mb-3">
      <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden relative">
        <div
          className={`h-full ${color} rounded-full flex items-center justify-center transition-width duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={name}
        >

          <span className="text-xs font-medium text-gray-600 px-2 truncate">
            {name}
          </span>
        </div>


      </div>
    </div>
  );
};

export default SkillProgressBar;