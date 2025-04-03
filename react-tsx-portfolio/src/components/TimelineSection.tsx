import React from 'react';
import TimelineBox from './TimelineBox';
// Import FontAwesome if using for close icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Define the structure of a single timeline entry
// Adjust this based on your actual data structure
export interface TimelineEntry {
    id: string | number;
    imageSrc?: string; // Optional image
    title: string;
    subtitle: string;
    duration: string;
    description: string;
    listItems?: string[]; // Optional list of items

}

// Define props for the TimelineSection component
interface TimelineSectionProps {
    id: string; // HTML ID for the section
    title: string; // Title like "Work Experience" or "Education"
    data: TimelineEntry[]; // Array of timeline entries
    onClose: () => void; // Function to call when closing the section
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ id, title, data, onClose }) => {
    return (
        // Use section tag, assign ID for potential scrolling
        <section id={id} className="expandable-section relative pt-[4vh] px-[5%] xl:px-40 box-border">
            <h1 className="title text-3xl xl:text-5xl text-center font-bold mb-8">{title}</h1>

            {/* Timeline Container */}
            <div className="timeline relative w-full mt-16 pb-8 flex flex-col gap-[50px]">
                {/* Vertical Divider Line */}
                <div id="timeline-divider" className="absolute w-[3px] bg-text-dark top-0 bottom-8 left-1/2 -translate-x-1/2 hidden xl:block"></div>

                {/* Map over the data to render timeline boxes */}
                {data.map((entry, index) => (
                    <TimelineBox
                        key={entry.id}
                        id={entry.id} // Pass the id property
                        // Alternate left/right position based on index for desktop view
                        // On smaller screens, all stack left due to base styles in TimelineBox
                        position={index % 2 === 0 ? 'left' : 'right'}
                        imageSrc={entry.imageSrc}
                        title={entry.title}
                        subtitle={entry.subtitle}
                        duration={entry.duration}
                        description={entry.description}
                        listItems={entry.listItems}
                    />
                ))}
            </div>

            {/* Close Button */}
            <FontAwesomeIcon
                icon={faTimes}
                className="icon arrow close-btn absolute bottom-16 right-0 xl:-right-20 cursor-pointer text-3xl text-black hover:text-gray-500 z-10"
                onClick={onClose} // Call the passed-in function on click
                aria-label={`Close ${title}`}
            />
            {/* Or use img if preferred */}
        </section>
    );
};

export default TimelineSection;