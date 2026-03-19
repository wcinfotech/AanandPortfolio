import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const blobs = [
    {
      className:
        "left-[-8rem] top-10 h-72 w-72 bg-gradient-to-br from-sky-500/35 to-cyan-500/15 md:left-0 md:h-80 md:w-80",
      duration: 13,
      delay: 0,
    },
    {
      className:
        "right-[-6rem] top-0 h-72 w-72 bg-gradient-to-tr from-indigo-500/30 to-violet-500/20 md:right-8 md:h-80 md:w-80",
      duration: 15,
      delay: 1.4,
    },
    {
      className:
        "bottom-[-4rem] left-1/2 h-60 w-60 -translate-x-1/2 bg-gradient-to-tr from-cyan-500/20 to-blue-500/30 md:h-72 md:w-72",
      duration: 17,
      delay: 2.8,
    },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 grid-pattern opacity-75 animate-pulse-grid" />
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
          animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.div
        className="absolute -left-16 bottom-10 h-44 w-44 rounded-full border border-cyan-300/20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-6 top-16 h-20 w-20 rounded-full border border-indigo-200/25"
        animate={{ scale: [1, 1.2, 1], opacity: [0.45, 0.95, 0.45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
