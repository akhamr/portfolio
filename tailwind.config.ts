import type { Config } from "tailwindcss";
import type { PluginUtils } from "tailwindcss/types/config";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./data/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        doodle: ["var(--font-doodle)", "cursive"],
        della: ["var(--font-della)", "cursive"],
      },
      colors: {
        dark: "#1c1917",
        light: "#f5f5f5",
      },
      typography: ({ theme }: PluginUtils) => ({
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
                scrollMarginTop: "36px",
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
      cursor: {
        pencil: "url(/default/pencil.svg) 0 24, auto",
        "pencil-dark": "url(/default/pencil-dark.svg) 0 24, auto",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
