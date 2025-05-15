import React from 'react';
import clsx from 'clsx';

export interface TimelineEntry {
    id: string | number;
    imageSrc?: string;
    title: string;
    subtitle: string;
    duration: string;
    description: string;
    listItems?: string[];
    position: 'left' | 'right';
}

interface TimelineProps {
    id: string;
    title: string;
    data: TimelineEntry[];
    onClose: () => void;
}

const Timeline: React.FC<TimelineProps> = ({ id, title, data }) => {
    return (
        <section id={id} className="expandable-section relative pt-8 px-5 box-border">
            <h1 className="title text-3xl text-center font-bold mb-6">{title}</h1>

            <div className="timeline relative w-full mt-8 pb-8 flex flex-col gap-12">
                <div
                    id="timeline-divider"
                    className="absolute w-[3px] bg-text-dark top-0 bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
                ></div>

                {data.map((entry) => (
                    <div key={entry.id} className="relative flex flex-col items-center lg:flex-row lg:items-start">
                        <div
                            className={clsx(
                                "relative w-full lg:w-[45%] mb-10 lg:mb-0", // Increased margin for better spacing on small screens
                                {
                                    'lg:mr-auto': entry.position === 'left',
                                    'lg:ml-auto': entry.position === 'right',
                                }
                            )}
                        >
                            <div className="relative p-4 border border-border-light rounded-lg bg-white shadow-sm">
                                <div className="timeline-container flex flex-col items-start">
                                    <h3 className="timeline-title font-semibold text-lg mb-1">{entry.title}</h3>
                                    <h4 className="timeline-subtitle text-text-dark mb-1">{entry.subtitle}</h4>
                                    <h5 className="timeline-duration text-sm text-text-primary mb-2">{entry.duration}</h5>
                                    <p className="timeline-description text-base mb-2">{entry.description}</p>
                                    {entry.listItems && entry.listItems.length > 0 && (
                                        <ul className="timeline-list list-disc ml-5 text-base">
                                            {entry.listItems.map((item, itemIndex) => (
                                                <li key={itemIndex}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div
                            className="hidden xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 
xl:w-[80px] xl:h-[80px] rounded-full overflow-hidden border-2 border-text-dark bg-white 
xl:flex xl:items-center xl:justify-center xl:mt-0"                        >
                            <img
                                src={entry.imageSrc || '../assets/experience.png'}
                                alt={`${entry.title} logo`}
                                className="max-w-[90%] max-h-[90%] object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;