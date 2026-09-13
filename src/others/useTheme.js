import { useCallback, useEffect, useState } from 'react';

export const THEME_OPTIONS = ['light', 'dark', 'system'];

const STORAGE_KEY = 'theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';
const THEME_COLOR = { dark: '#070b13', light: '#f7f9fc' };

const readPreference = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return THEME_OPTIONS.includes(stored) ? stored : 'system';
    } catch {
        // Private mode / storage disabled — fall back to following the OS.
        return 'system';
    }
};

const systemPrefersDark = () => window.matchMedia(DARK_QUERY).matches;

// Owns the three-way preference (light / dark / system) and reflects the
// resolved theme onto <html data-theme>, which is what the CSS keys off.
// The same resolution runs inline in index.html before first paint, so the
// first frame already carries the right theme.
const useTheme = () => {
    const [preference, setStoredPreference] = useState(readPreference);
    const [prefersDark, setPrefersDark] = useState(systemPrefersDark);

    // Follow the OS while (and only while) the preference is "system".
    useEffect(() => {
        const query = window.matchMedia(DARK_QUERY);
        const onChange = (event) => setPrefersDark(event.matches);

        if (query.addEventListener) query.addEventListener('change', onChange);
        else query.addListener(onChange);

        setPrefersDark(query.matches);

        return () => {
            if (query.removeEventListener) query.removeEventListener('change', onChange);
            else query.removeListener(onChange);
        };
    }, []);

    const resolved = preference === 'system' ? (prefersDark ? 'dark' : 'light') : preference;

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', resolved);
        root.style.colorScheme = resolved;

        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', THEME_COLOR[resolved]);
    }, [resolved]);

    // Keep other tabs of the portfolio in step.
    useEffect(() => {
        const onStorage = (event) => {
            if (event.key === STORAGE_KEY && THEME_OPTIONS.includes(event.newValue)) {
                setStoredPreference(event.newValue);
            }
        };
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
    }, []);

    const setPreference = useCallback((next) => {
        if (!THEME_OPTIONS.includes(next)) return;
        setStoredPreference(next);
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // Preference still applies for this page view.
        }
    }, []);

    return { preference, resolved, setPreference };
};

export default useTheme;
