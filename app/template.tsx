"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      key={usePathname()}
      className="mx-auto max-w-[85%] flex-1 md:max-w-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.main>
  );
}
