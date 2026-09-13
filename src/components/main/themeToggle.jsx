import React from 'react';
import useTheme from '../../others/useTheme.js';
import '../../css/themeToggle.css';

const options = [
    { value: 'light', label: 'Light', icon: 'fa-solid fa-sun' },
    { value: 'dark', label: 'Dark', icon: 'fa-solid fa-moon' },
    { value: 'system', label: 'System', icon: 'fa-solid fa-desktop' },
];

const ThemeToggle = () => {
    const { preference, setPreference } = useTheme();

    return (
        <div className="theme-toggle" role="group" aria-label="Colour theme">
            {options.map((option) => {
                const active = preference === option.value;

                return (
                    <button
                        key={option.value}
                        type="button"
                        className={`theme-option ${active ? 'is-active' : ''}`}
                        aria-pressed={active}
                        aria-label={`${option.label} theme`}
                        title={`${option.label} theme`}
                        onClick={() => setPreference(option.value)}
                    >
                        <i className={option.icon} aria-hidden="true"></i>
                        <span className="theme-option-label">{option.label}</span>
                    </button>
                );
            })}
        </div>
    );
};

export default ThemeToggle;
