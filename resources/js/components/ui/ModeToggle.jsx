import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ModeToggle() {
    const [currentMode, setCurrentMode] = useState(localStorage.getItem('appearance') || 'light');

    const toggleMode = () => {
        setCurrentMode((prevMode) => {
            const newMode = prevMode === 'dark' ? 'light' : 'dark';
            localStorage.setItem('appearance', newMode);
            return newMode;
        });
    };

    useEffect(() => {
        const isDarkMode = currentMode === 'dark';
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [currentMode]);

    return (
        <button
            onClick={toggleMode}
            className="mt-1 p-1 rounded-full bg-transparent hover:opacity-80 transition-opacity duration-300"
        >
            {currentMode === 'dark' ? (
                <Sun className="w-6 h-6 text-gray-800 bg-transparent" />
            ) : (
                <Moon className="w-6 h-6 text-white dark:text-gray-100 bg-transparent" />
            )}
        </button>
    );
}
