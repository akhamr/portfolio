"use client";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";

type Props = HTMLMotionProps<"section">;

export default function Section({ children, ...rest }: Props) {
    return (
        <AnimatePresence mode="wait">
            <motion.section
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                }}
                {...rest}
            >
                {children}
            </motion.section>
        </AnimatePresence>
    );
}
