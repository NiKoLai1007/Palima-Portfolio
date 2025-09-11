import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleToggle = () => {
        setDarkMode((prev) => !prev);
        if (!darkMode) {
            document.documentElement.classList.add("dark");
         setDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
           setDarkMode(false);
        }
    };

    return (
        <button
            className={`toggle-button ${darkMode ? "dark" : "light"}`}
            onClick={handleToggle}
        >
            <span className="toggle-knob">
                {darkMode ? <Moon size={18} color="Gray" /> : <Sun size={18} color="Yellow" />}
            </span>
        </button>
    );
};

export default ThemeToggle;