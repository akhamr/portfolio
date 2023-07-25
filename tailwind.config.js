/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-nunito)', 'sans-serif'],
                doodle: ['var(--font-doodle)', 'cursive'],
                footer: ['var(--font-footer)', 'cursive'],
            },
            colors: {
                dark: '#1c1917',
                light: '#f5f5f5',
            },
        },
    },
    plugins: [],
};
