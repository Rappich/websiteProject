import { useEffect, useState } from "react";

/**
 * Props for the LoadingScreen component.
 * 
 * @typedef {Object} LoadingScreenProps
 * @property {() => void} onComplete - Callback function to execute when the loading animation is complete.
 */
interface LoadingScreenProps {
    onComplete: () => void;
}

/**
 * LoadingScreen component.
 * 
 * Displays a loading animation with a typing effect and a progress bar.
 * Calls the `onComplete` callback once the animation finishes.
 * 
 * @component
 * @param {LoadingScreenProps} props - The props for the LoadingScreen component.
 * @returns {JSX.Element} The rendered LoadingScreen component.
 */
export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
    const [text, setText] = useState(""); // State to hold the animated text
    const fullText = "<Hello World />"; // Full text to display during the animation

    useEffect(() => {
        let index = 0;

        // Interval to animate the text one character at a time
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            // Stop the animation when the full text is displayed
            if (index > fullText.length) {
                clearInterval(interval);

                // Call the onComplete callback after a short delay
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-white text-gray flex flex-col items-center justify-center">
            {/* Animated text with a blinking cursor */}
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-1"> | </span>
            </div>

            {/* Loading bar */}
            <div className="w-[250px] h-[2px] bg-white rounded relative overflow-hidden">
                <div className="w-[40%] h-full animate-loading-bar"></div>
            </div>
        </div>
    );
};