import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const isDark = theme === 'dark';

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
            onChange={() => setTheme(isDark ? 'light' : 'dark')}
            checked={!isDark}
            className="toggle"
        />
    );
}
