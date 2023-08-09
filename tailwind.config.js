/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-nunito)", "sans-serif"],
                doodle: ["var(--font-doodle)", "cursive"],
                footer: ["var(--font-footer)", "cursive"],
            },
            colors: {
                dark: "#1c1917",
                light: "#f5f5f5",
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: "#202020",
                        "h1,h2,h3,h4,h5,h6": {
                            a: {
                                fontWeight: "bold",
                                textDecoration: "none",
                                "&:hover": {
                                    textDecoration: "underline",
                                },
                            },
                            scrollMarginTop: "84px",
                            "@media (min-width: 768px)": {
                                scrollMarginTop: "40px",
                            },
                        },
                        strong: { fontWeight: "bold" },
                        a: { fontWeight: "bold" },
                    },
                },
                dark: {
                    css: {
                        color: theme("colors.gray.300"),
                        a: {
                            color: theme("colors.white"),
                            code: { color: theme("colors.blue.400") },
                        },
                        blockquote: {
                            borderLeftColor: theme("colors.gray.700"),
                            color: theme("colors.gray.300"),
                        },
                        "h1,h2,h3,h4,h5,h6": {
                            color: theme("colors.white"),
                        },
                        hr: { borderColor: theme("colors.gray.700") },
                        ol: {
                            li: {
                                "&:before": { color: theme("colors.gray.500") },
                            },
                        },
                        ul: {
                            li: {
                                "&:before": {
                                    backgroundColor: theme("colors.gray.500"),
                                },
                            },
                        },
                        strong: {
                            color: theme("colors.gray.300"),
                            fontWeight: "bold",
                        },
                        thead: {
                            color: theme("colors.gray.100"),
                            th: {
                                color: theme("colors.gray.100"),
                            },
                        },
                        tbody: {
                            tr: {
                                borderBottomColor: theme("colors.gray.700"),
                            },
                        },
                    },
                },
            }),
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
