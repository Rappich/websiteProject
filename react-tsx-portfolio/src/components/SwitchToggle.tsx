import React from 'react';

interface SwitchToggleProps {
    id: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    labelText?: string;
    labelPosition?: 'left' | 'right';
}

const SwitchToggle: React.FC<SwitchToggleProps> = ({
    id,
    checked,
    onChange,
    disabled = false,
    labelText,
    labelPosition = 'right',
}) => {
    const trackWidth = 'w-[60px]';
    const trackHeight = 'h-[30px]';
    const thumbSize = 'w-[28px] h-[28px]';
    const thumbPositionOffset = 'top-[1px] left-[2px]';
    const thumbTranslateX = 'peer-checked:translate-x-[28px]';

    const switchElement = (
        <label htmlFor={id} className={`relative inline-block ${trackWidth} ${trackHeight}`}>
            <input
                type="checkbox"
                id={id}
                className="sr-only peer"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />

            <div
                className={`absolute inset-0 rounded-full cursor-pointer transition-colors duration-200 ease-in-out
                   ${disabled ? 'bg-gray-300' : (checked ? 'bg-gray-950' : 'bg-gray-400')} {/* Blue when checked, grey otherwise */}
                  `}
            ></div>

            <div
                className={`absolute ${thumbPositionOffset} ${thumbSize} bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out translate-x-0
                   ${thumbTranslateX} /* 'on' state position */
                  `}
            ></div>
        </label>
    );

    const labelElement = labelText ? (
        <span
            onClick={() => document.getElementById(id)?.click()}
            className={`text-sm font-medium select-none ${disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 dark:text-gray-300 cursor-pointer'}`}
        >
            {labelText}
        </span>
    ) : null;

    return (
        <div className={`inline-flex items-center ${disabled ? 'opacity-70' : ''}`}>
            {labelPosition === 'left' && labelElement && <span className="mr-2">{labelElement}</span>}
            {switchElement}
            {labelPosition === 'right' && labelElement && <span className="ml-2">{labelElement}</span>}
        </div>
    );
};

export default SwitchToggle;