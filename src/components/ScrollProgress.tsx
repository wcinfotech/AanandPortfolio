import { motion } from "framer-motion";

interface ScrollProgressProps {
    progress: number;
}

export default function ScrollProgress({ progress }: ScrollProgressProps) {
    const safeProgress = Math.max(0, Math.min(100, progress));

    return (
        <div className="fixed inset-x-0 top-0 z-[60] h-1">
            <motion.div
                className="h-full bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-500 shadow-glow"
                animate={{ width: `${safeProgress}%` }}
                transition={{ duration: 0.16, ease: "easeOut" }}
            />
        </div>
    );
}
