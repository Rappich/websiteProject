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

const Timeline: React.FC<TimelineProps> = ({ id, title, data, onClose }) => {

    return (
        <section id={id} className="expandable-section relative pt-[4vh] px-[5%] xl:px-40 box-border">
            <h1 className="title text-3xl xl:text-5xl text-center font-bold mb-8">{title}</h1>

            <div className="timeline relative w-full mt-16 pb-8 flex flex-col gap-[30px] sm:gap-[50px]">
                <div
                    id="timeline-divider"
                    className="absolute w-[3px] bg-text-dark top-0 bottom-8 left-1/2 xl:px-8-translate-x-1/2 hidden xl:block"
                ></div>

                {data.map((entry) => (
                    <div key={entry.id} className="relative">
                        <div
                            className={clsx(
                                "relative w-[90%] mb-6 xl:w-[45%]",
                                {
                                    'xl:mr-auto': entry.position === 'left',
                                    'xl:ml-auto': entry.position === 'right',
                                }
                            )}
                        >
                            <div className={clsx("relative p-4 border border-border-light rounded-lg bg-white shadow-sm")}>
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
                            className={clsx(
                                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] xl:w-[80px] xl:h-[80px] rounded-full overflow-hidden border-2 border-text-dark bg-white flex items-center justify-center'
                            )}
                        >
                            <img
                                src={entry.imageSrc || '../assets/experience.png'}
                                alt={`${entry.title} logo`}
                                className="max-w-[80%] max-h-[80%] object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;