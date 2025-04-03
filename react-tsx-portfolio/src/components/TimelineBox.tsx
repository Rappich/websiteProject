import React from 'react';
import clsx from 'clsx';
// Import default image if needed
import defaultExpIcon from '../assets/experience.png';

// Use the TimelineEntry interface (or define props individually)
import { TimelineEntry } from './TimelineSection'; // Reuse if defined there

interface TimelineBoxProps extends TimelineEntry {
    position: 'left' | 'right';
}

const TimelineBox: React.FC<TimelineBoxProps> = ({
    position,
    imageSrc,
    title,
    subtitle,
    duration,
    description,
    listItems,
}) => {
    // Base styles - stack left on mobile/tablet
    const boxBaseStyles = "relative flex w-[90%] left-[5%] xl:w-[42%] xl:relative xl:left-auto text-left";
    // Add positioning class for desktop right-aligned boxes
    const positionStyles = position === 'right' ? 'xl:justify-end' : 'xl:justify-start';

    // Use a default image if imageSrc is not provided
    const displayImageSrc = imageSrc || defaultExpIcon; // Adjust default as needed

    return (
        <div className={clsx(boxBaseStyles, positionStyles)}>
            {/* Main content container */}
            <div className="timeline-content w-full p-4 border border-border-light rounded-lg bg-white shadow-sm"> {/* Added basic styling */}
                <div className="timeline-container flex flex-col items-start"> {/* Align items start */}
                    {/* Logo/Image appears in the middle divider on desktop */}
                    <div className="timeline-logo absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] xl:w-[120px] xl:h-[120px] bg-white rounded-full border-2 border-text-dark flex items-center justify-center overflow-hidden hidden xl:flex">
                        <img src={displayImageSrc} alt={`${title} logo`} className="experience-image max-w-[80%] max-h-[80%] w-auto h-auto object-contain" />
                    </div>

                    {/* Text content */}
                    <h3 className="timeline-title font-semibold text-lg mb-1">{title}</h3>
                    <h4 className="timeline-subtitle text-text-dark mb-1">{subtitle}</h4>
                    <h5 className="timeline-duration text-sm text-text-primary mb-2">{duration}</h5>
                    <p className="timeline-description text-base mb-2">{description}</p>
                    {listItems && listItems.length > 0 && (
                        <ul className="timeline-list list-disc ml-5 text-base">
                            {listItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimelineBox;