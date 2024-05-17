"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <ProgressBar color="#525252" options={{ showSpinner: false }} />
      {children}
    </ThemeProvider>
  );
}
