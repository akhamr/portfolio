"use client";

import { ThemeProvider } from "next-themes";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" enableSystem={false}>
            {children}
            <ProgressBar color="#71717a" options={{ showSpinner: false }} />
        </ThemeProvider>
    );
}
