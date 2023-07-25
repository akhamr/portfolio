import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <input
            type="checkbox"
            onChange={() => setTheme(isDark ? 'light' : 'dark')}
            checked={!isDark}
            className="toggle"
        />
    );
}
