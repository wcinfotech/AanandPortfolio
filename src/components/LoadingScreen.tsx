import { motion } from "framer-motion";

export default function LoadingScreen() {
    return (
        <motion.div
            className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-slate-950"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="relative mb-7 h-20 w-20">
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-sky-300/40"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-2 rounded-full border-2 border-cyan-400/80 border-t-transparent"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <motion.h1
                className="font-display text-2xl font-semibold tracking-wide text-sky-100"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
            >
                Aanand Palan
            </motion.h1>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-sky-200/80">Loading portfolio</p>
        </motion.div>
    );
}
