import { useEffect, useState } from "react";
// Archived component, this component is not being used in the current version of the portfolio.
// It was intended to be a loading screen that displays a typing effect of "<Hello World />".
interface LoadingScreenProps {
    onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Hello World />";

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 500);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-white text-gray flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-1"> | </span>
            </div>
            <div className="w-[250px] h-[2px] bg-white rounded relative overflow-hidden">
                <div className="w-[40%] h-full animate-loading-bar"></div>
            </div>
        </div>
    );
};