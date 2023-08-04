'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const isLight = theme === 'light';

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <input
            aria-label="themeToggler"
            type="checkbox"
            onChange={() => setTheme(isLight ? 'dark' : 'light')}
            checked={isLight}
            className="toggle"
        />
    );
}
